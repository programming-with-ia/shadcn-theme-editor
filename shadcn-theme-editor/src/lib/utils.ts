export function cn(...inputs: (string | null | undefined | false)[]): string {
  return inputs.filter((v): v is string => !!v).join(" ");
}
