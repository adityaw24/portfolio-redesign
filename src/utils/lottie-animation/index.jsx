import Lottie from "lottie-react";

export const LottieAnimation = ({ lottie, width, height }, props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex h-full">
      {/* <Lottie options={defaultOptions} height={height} width={width} /> */}
      <Lottie
        height={height}
        width={width}
        loop
        animationData={lottie}
        {...props}
      />
    </div>
  );
};
