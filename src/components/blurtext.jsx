import { useEffect, useRef, useState } from "react";

export default function ScrollBlur({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 } // 30% elemen terlihat
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "blur-0 opacity-100" : "blur-sm opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
