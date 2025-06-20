// src/components/ThemeSwitcher.tsx - Theme Switcher Component
"use client";

import { useState } from "react";
import { Palette, Check } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm text-white hover:bg-opacity-20 transition-colors"
        aria-label="Change theme"
      >
        <Palette className="w-4 h-4" />
        <span className="text-sm">Theme</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[200px] z-50">
          <div className="p-2">
            <div className="text-sm font-medium text-gray-700 px-3 py-2">
              Choose Theme
            </div>
            {themes.map((themeOption) => (
              <button
                key={themeOption.value}
                onClick={() => {
                  setTheme(themeOption.value);
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {themeOption.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-700">
                    {themeOption.label}
                  </span>
                </div>
                {theme === themeOption.value && (
                  <Check className="w-4 h-4 text-green-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
