import { error, json } from "@sveltejs/kit";
import prisma from "$lib/prisma";

export async function GET({ params }) {
  let slug = params.path;
  let files;

  const directory = await prisma.directory.findUniqueOrThrow({
    where: {
      path: "/"+slug
    }
  });
  files = await prisma.file.findMany({
    where: {
      parentDirId: directory.id
    }
  });

  return json(files);


}
