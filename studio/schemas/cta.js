import { HiSpeakerphone as icon } from "react-icons/hi";

export default {
  name: "cta",
  title: "Call To Action",
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
      name: "button_label",
      title: "Button Label",
      type: "string",
    },
    {
      name: "button_route",
      title: "Button Route",
      type: "string",
    },
  ],
};
