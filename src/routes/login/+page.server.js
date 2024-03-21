import { fail, redirect } from "@sveltejs/kit";
import bcrypt from "bcrypt";

import prisma from "$lib/prisma";

export const load = async ({ locals }) => {
	// if already logged in, redirect to home page
	if (locals.user) {
		throw redirect(302, "/");
	}
};

const login = async ({ cookies, request }) => {
	// get form data and test if it is valid
	const data = await request.formData();
	const username = data.get("username");
	const password = data.get("password");
	if (typeof username !== "string" || typeof password !== "string" || !username || !password) {
		return fail(400, { invalid: true });
	}

	// get user entry
	const user = await prisma.user.findUnique({ where: { username } });

	// verify username
	if (!user) {
		return fail(400, { credentials: true });
	}

	// verify password
	const userPassword = await bcrypt.compare(password, user.passwordHash);
	if (!userPassword) {
		return fail(400, { credentials: true });
	}

	// regenerate auth token
	const authenticatedUser = await prisma.user.update({
		where: { username: user.username },
		data: { userAuthToken: crypto.randomUUID() },
	});

	// set cookie to new authentication token
	cookies.set("session", authenticatedUser.userAuthToken, {
		// send cookie for every page
		path: "/",
		// server side only cookie so you can't use `document.cookie`
		httpOnly: true,
		// only sent over HTTPS in production
		secure: process.env.NODE_ENV === "production",
		// set cookie to expire after a month
		maxAge: 60 * 60 * 24 * 30,
	});

	throw redirect(302, "/");
};

export const actions = { login };
