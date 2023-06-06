export function toFixed4(num?: number): string {
  if (!num) return '0'
  return num.toFixed(4).replace(/\.?0+$/, "");
}

export function percentToFixed4(num: number): string {
  return toFixed4(num * 100);
}
