import { error, json } from "@sveltejs/kit";
import prisma from "$lib/prisma";

export async function GET({ params }) {
  let slug = params.path;
  let path = slug.split("/");
  let subdirs;

  /* If slug is root return root content, edge case*/
  if (path[0] == "root") { 
    let home = await prisma.directory.findFirst({ // get rootEntry
      where: {
        isRoot: true
      }
    });
    subdirs = await prisma.directory.findMany({
      where: {
        parentDirId: home.id
      }
    });
    return json(subdirs);
  }

  const directory = await prisma.directory.findUniqueOrThrow({
    where: {
      path: "/"+slug
    }
  });
  subdirs = await prisma.directory.findMany({
    where: {
      parentDirId: directory.id
    }
  });
  console.log(subdirs)
  return json(subdirs);


}
