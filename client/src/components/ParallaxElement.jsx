const ParallaxElement = ({ offsetX, children }) => {
  const style = {
    transform: `translateX(${offsetX * 0.5}px)`,
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default ParallaxElement
