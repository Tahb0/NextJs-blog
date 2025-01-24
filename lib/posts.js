import matter from "gray-matter";

const fs = require("fs");
const path = require("path");
import html from "remark-html";
import { remark } from "remark";

//create a current working directory
const postDirectory = path.join(process.cwd(), "posts"); // nodeJs process to lauch Node app

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postDirectory);

  //loop through the files
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); //remove .md from file names

    const fullPath = path.join(postDirectory, fileName);

    const fileContent = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContent);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postDirectory);

  return fileNames.map((fileName) => {
    return {
      params: { id: fileName.replace(/\.md$/, "") },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postDirectory, `${id}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
