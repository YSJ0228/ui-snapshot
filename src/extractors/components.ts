export interface ComponentMeta {
  name: string;
  category: "Base" | "Layout" | "Feedback" | "Navigation" | "Data";
  description: string;
  props: { name: string; type: string; required: boolean }[];
  variants: string[];
}

export const extractComponents = (): ComponentMeta[] => {
  return [
    {
      name: "Button",
      category: "Base",
      description: "Standard clickable button for actions.",
      props: [
        { name: "label", type: "string", required: true },
        { name: "onClick", type: "function", required: false },
        { name: "loading", type: "boolean", required: false },
      ],
      variants: ["primary", "secondary", "ghost", "danger"],
    },
    {
      name: "Modal",
      category: "Feedback",
      description: "Dialog window that overlays the main content.",
      props: [
        { name: "isOpen", type: "boolean", required: true },
        { name: "onClose", type: "function", required: true },
        { name: "title", type: "string", required: false },
      ],
      variants: ["centered", "fullscreen"],
    },
    {
      name: "Badge",
      category: "Data",
      description: "Small visual indicator for status or counts.",
      props: [
        { name: "count", type: "number", required: false },
        { name: "color", type: "string", required: false },
      ],
      variants: ["dot", "rounded", "pill"],
    },
    {
      name: "Navbar",
      category: "Navigation",
      description: "Main navigation header for the application.",
      props: [
        { name: "logo", type: "string", required: false },
        { name: "links", type: "array", required: true },
      ],
      variants: ["sticky", "fixed"],
    },
  ];
};
