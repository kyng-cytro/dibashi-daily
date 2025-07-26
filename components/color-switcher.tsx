"use client";

import { useTheme } from "next-themes";

export function ColorSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="uppercase hover:underline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Switch Theme
    </button>
  );
}
