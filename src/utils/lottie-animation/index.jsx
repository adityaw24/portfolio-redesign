import Lottie from "lottie-react";

export const LottieAnimation = ({ lottie, width, height }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* <Lottie options={defaultOptions} height={height} width={width} /> */}
      <Lottie height={height} width={width} loop animationData={lottie} />
    </>
  );
};
