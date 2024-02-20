const ParallaxElement = ({ offsetY, children }) => {
  const style = {
    transform: `translateY(${offsetY * 0.5}px)`,
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default ParallaxElement
