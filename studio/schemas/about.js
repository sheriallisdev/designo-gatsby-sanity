import { FcAbout as icon } from "react-icons/fc";

export default {
  title: "about",
  name: "about",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
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
      name: "informationRow",
      title: "Information Row",
      type: "array",
      of: [
        {
          type: "infoRow",
        },
      ],
    },
  ],
};
