import { useEffect, useState } from "react";

export default function Teste() {
  const [effectCount, setEffectCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEffectCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>useEffect executou: {effectCount}x</p>
    </div>
  );
}
