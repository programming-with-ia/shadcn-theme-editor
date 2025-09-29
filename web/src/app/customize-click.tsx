"use client";

export default function CustomizeBtn() {
  return (
    <span
      className="absolute inset-0"
      onClick={() =>
        (
          document.querySelector("[data-ste-trigger]") as
            | HTMLElement
            | undefined
        )?.click()
      }
    />
  );
}
