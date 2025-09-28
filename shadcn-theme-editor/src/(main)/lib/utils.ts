import { sharedData } from "./shared";

export const copy2clipboard = (text: string) =>
  navigator.clipboard.writeText(text);

export function setProperity(proprity: string, value: string | null) {
  // document.querySelector(":root")?.style.setProperty(proprity, value);
  sharedData.getContainer().style.setProperty(proprity, value);
}

export function memoize<Args extends unknown[], R>(
  fn: (...args: Args) => R,
): (...args: Args) => R {
  const cache = new Map<string, R>();

  return (...args: Args): R => {
    // Create a cache key from arguments.
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key)!; // safe because we just checked
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

export function resetCurrentTheme(full = true) {
  /**
    @param full
    Only perform a full theme reset if no saved theme was found.
    If a theme exists, keep some settings so the saved theme can override them later.
  */
  const style = sharedData.getContainer().style;

  Object.keys(sharedData.currentTheme).forEach((propertyName) =>
    style.removeProperty(propertyName),
  );
  sharedData.currentTheme = {};
  if (full) {
    sharedData.defaultThemeEmittor.setState({});
  }
}

export function copyCurrentTheme() {
  copy2clipboard(
    Object.entries(sharedData.currentTheme)
      .map(
        ([propertyName, hex]) =>
          propertyName +
          ": " +
          (sharedData.getCopyValue ?? sharedData.toCssString)(hex)[1] +
          ";",
      )
      .join("\n"),
  );
}
