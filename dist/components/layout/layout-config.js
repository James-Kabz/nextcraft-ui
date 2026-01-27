const layoutConfigSchema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  title: "Nextcraft UI Layout Config",
  type: "object",
  additionalProperties: false,
  properties: {
    sidebar: {
      type: "object",
      additionalProperties: false,
      properties: {
        title: { type: "string" },
        footerText: { type: "string" },
        items: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              label: { type: "string" },
              href: { type: "string" },
              icon: { type: "string" },
              active: { type: "boolean" }
            },
            required: ["label"]
          }
        }
      },
      required: ["items"]
    },
    header: {
      type: "object",
      additionalProperties: false,
      properties: {
        title: { type: "string" },
        breadcrumb: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              label: { type: "string" },
              href: { type: "string" }
            },
            required: ["label"]
          }
        }
      }
    }
  }
};
export {
  layoutConfigSchema
};
//# sourceMappingURL=layout-config.js.map