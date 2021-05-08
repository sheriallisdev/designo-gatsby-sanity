import { GoProject as icon } from "react-icons/go";

export default {
  name: "project",
  title: "Project",
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
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project_category" }] }],
    },
  ],
};
