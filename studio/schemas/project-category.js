import { BsFolderFill as icon } from "react-icons/bs";

export default {
  name: "project_category",
  title: "Project Category",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "background",
      title: "Background Image",
      type: "image",
    },
  ],
};
