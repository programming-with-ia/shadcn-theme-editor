import { sharedData } from "./shared";

export const LOCAL_STORAGE_KEY = "shadcnTheme";

export const ls = {
  get: <T = unknown>(key: string): T | null => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch (error) {
      console.error(`Error getting item from localStorage:`, error);
      return null;
    }
  },

  set: (key: string, value: unknown): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item in localStorage:`, error);
    }
  },

  remove: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from localStorage:`, error);
    }
  },

  //* Helpers
  saveCurrentTheme() {
    this.set(this.getCurrentThemeKey(), sharedData.currentTheme);
  },

  getCurrentThemeKey() {
    return LOCAL_STORAGE_KEY + ":" + (sharedData.isDark ? "dark" : "light");
  },

  deleteAllThemes() {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key?.startsWith(LOCAL_STORAGE_KEY)) {
        localStorage.removeItem(key);
      }
    }
  },
};
