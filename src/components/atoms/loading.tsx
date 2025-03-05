import Lottie from "lottie-react";
import loadingAnimation from "@public/loading.json";

const BLoading = () => {
  return <Lottie animationData={loadingAnimation} loop={true} height={2} />;
};

export default BLoading;
