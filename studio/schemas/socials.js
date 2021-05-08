import { TiSocialTwitter as icon } from "react-icons/ti";

export default {
  name: "socials",
  title: "Social Media",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
    },
  ],
};
