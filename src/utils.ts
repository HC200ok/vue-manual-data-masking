export function getContrastColor(hexcolor: string): string {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === "#") {
    hexcolor = hexcolor.slice(1);
  }
  // Convert to RGB value
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  // Check contrast
  return yiq >= 128 ? "black" : "white";
}
