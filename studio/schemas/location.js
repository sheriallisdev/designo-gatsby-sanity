import { FaMapMarkedAlt as icon } from "react-icons/fa";

export default {
  name: "location",
  title: "Location",
  type: "document",
  icon,
  fields: [
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "illustration",
      title: "Image",
      type: "image",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
    {
      name: "office_name",
      title: "Office Name",
      type: "string",
    },
    {
      name: "address_line1",
      title: "Adress Line 1",
      type: "string",
    },
    {
      name: "address_line2",
      title: "Adress Line 2",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "coordinates",
      title: "Coordinates",
      type: "geopoint",
    },
    {
      name: "map_image",
      title: "Image of Map (square)",
      description: "An image of the location on a map (square)",
      type: "image",
    },
    {
      name: "map_image_landscape",
      title: "Image of Map (landscape)",
      description: "An image of the location on a map (landscape)",
      type: "image",
    },
  ],
};
