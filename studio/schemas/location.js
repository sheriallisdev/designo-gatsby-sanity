export default {
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "image",
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
  ],
};
