"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function PageLoader() {
  const pathname = usePathname();
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setWidth(0);

    const t1 = setTimeout(() => setWidth(40), 20);
    const t2 = setTimeout(() => setWidth(70), 300);
    const t3 = setTimeout(() => setWidth(90), 600);
    const t4 = setTimeout(() => {
      setWidth(100);
      setTimeout(() => setVisible(false), 250);
    }, 900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[999] h-[3px] bg-accent"
      style={{
        width: `${width}%`,
        transition: width === 0 ? "none" : width === 100 ? "width 200ms ease-out" : "width 400ms ease-out",
      }}
    />
  );
}
