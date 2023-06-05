import { useState } from "react";

export default function useHackyUpdate() {
  const [n, update] = useState(0);

  return update.bind(null, n + 1);
}
