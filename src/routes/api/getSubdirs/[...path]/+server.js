import { error, json } from "@sveltejs/kit";
import prisma from "$lib/prisma";

export async function GET({ params }) {
  let slug = params.path;
  let subdirs;

  const directory = await prisma.directory.findUniqueOrThrow({
    where: {
      path: "/"+slug
    }
  });
  if (!directory) {
    throw error(404, 'Directory not found')
  }
  subdirs = await prisma.directory.findMany({
    where: {
      parentDirId: directory.id
    }
  });
  return json(subdirs);


}
