export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62e3ea6acb0d921ebcf55775",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-n3ctemz7",
                  apiId: "296668db-9778-4409-9f23-4031c9f114d2",
                },
                {
                  buildHookId: "62e3ea6acb0d921ebcf55776",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-4dk1cftu",
                  apiId: "1d21acc5-87b5-44fc-a79a-fbcb45d3cb93",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Beemhuse/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-4dk1cftu.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
