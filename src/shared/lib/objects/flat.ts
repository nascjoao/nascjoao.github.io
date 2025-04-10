export default function flatObject(
  obj: Record<string, unknown>,
  parentKey = "",
  result: Record<string, string> = {},
): Record<string, string> {
  for (const [key, value] of Object.entries(obj)) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      flatObject(value as Record<string, unknown>, newKey, result);
    } else {
      result[newKey] = value as string;
    }
  }

  return result;
}
