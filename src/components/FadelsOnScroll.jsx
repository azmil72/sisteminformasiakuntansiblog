import { useEffect, useRef, useState } from "react";

const FadeInOnScroll = ({ children, className = "" }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
          }else{
            setVisible(false);
          
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out 
      ${visible ? "opacity-100 blur-0" : "opacity-30 blur-sm"} 
      ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
