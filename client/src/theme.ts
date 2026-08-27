/** 4tify five-mode registry: all theme shells share the selection model, not the layout system. */
export const themeOptions = [
  { id: "estate", label: "Asset Protocol" },
  { id: "response", label: "Response Signal" },
  { id: "metro", label: "Metro Vector" },
  { id: "watchtower", label: "Watchtower" },
  { id: "civic", label: "Civic Guard" },
] as const;
export type ThemeMode = (typeof themeOptions)[number]["id"];
