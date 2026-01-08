export interface ComponentMeta {
  name: string;
  props: string[];
  variants: string[];
}

export const extractComponents = (): ComponentMeta[] => {
  // In a real project, this would use AST parsing for React/Vue components.
  // For demonstration, we return mock component metadata.
  return [
    {
      name: "Button",
      props: ["label", "onClick", "disabled"],
      variants: ["primary", "secondary", "outline"],
    },
    {
      name: "Input",
      props: ["value", "onChange", "placeholder", "type"],
      variants: ["default", "filled"],
    },
    {
      name: "Card",
      props: ["title", "content", "footer"],
      variants: ["elevated", "flat"],
    },
  ];
};
