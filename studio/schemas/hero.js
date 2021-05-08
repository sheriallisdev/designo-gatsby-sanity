import { MdStars as icon } from "react-icons/md";

export default {
  name: "hero_section",
  title: "Hero",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "body",
      title: "Body Text",
      type: "text",
    },
    {
      name: "button_label",
      title: "Button Label",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
