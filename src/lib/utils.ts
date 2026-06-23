export type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassValue[];

/**
 * Tiny className combiner (clsx-lite). Joins truthy values with a space.
 * Avoids extra dependencies while keeping conditional class logic readable.
 */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) out.push(nested);
    } else {
      out.push(String(input));
    }
  }
  return out.join(" ");
}
