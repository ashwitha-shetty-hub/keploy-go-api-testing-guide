import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

export default {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    [
      rehypePrettyCode,
      {
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      },
    ],
  ],
};