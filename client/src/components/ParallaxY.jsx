import React, { useRef, useEffect, useState } from 'react';

const ParallaxContainer = ({ children }) => {
  const containerRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const { top } = containerRef.current.getBoundingClientRect();
      setOffsetY(top);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div ref={containerRef}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { offsetY })
      )}
    </div>
  );
};

export default ParallaxContainer;
