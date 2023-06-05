export function toFixed4(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "");
}

export function percentToFixed4(num: number) {
  return toFixed4(num * 100);
}
