export interface DesignTokens {
  colors: Record<string, string>;
  spacing: Record<string, string>;
  typography: {
    fontFamily: Record<string, string>;
    fontSize: Record<string, string>;
    fontWeight: Record<string, string>;
  };
  borderRadius: Record<string, string>;
  boxShadow: Record<string, string>;
  breakpoints: Record<string, string>;
}

export const extractTokens = (): DesignTokens => {
  return {
    colors: {
      primary: "#3B82F6",
      primaryDark: "#1D4ED8",
      secondary: "#10B981",
      accent: "#F59E0B",
      danger: "#EF4444",
      background: "#FFFFFF",
      text: "#111827",
      muted: "#6B7280",
    },
    spacing: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1rem",
      lg: "2rem",
      xl: "4rem",
    },
    typography: {
      fontFamily: {
        sans: "Inter, ui-sans-serif, system-ui",
        mono: "JetBrains Mono, monospace",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        bold: "700",
      },
    },
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      default: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      default:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  };
};
