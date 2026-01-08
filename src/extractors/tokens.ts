export interface DesignTokens {
  colors: Record<string, string>;
  spacing: Record<string, string>;
  typography: Record<string, string>;
}

export const extractTokens = (): DesignTokens => {
  // In a real project, this would parse tailwind.config.ts or CSS variables.
  // For demonstration, we return a mock object.
  return {
    colors: {
      primary: "#3B82F6",
      secondary: "#10B981",
      background: "#FFFFFF",
      text: "#111827",
    },
    spacing: {
      sm: "0.5rem",
      md: "1rem",
      lg: "2rem",
    },
    typography: {
      base: "16px",
      heading: "24px",
    },
  };
};
