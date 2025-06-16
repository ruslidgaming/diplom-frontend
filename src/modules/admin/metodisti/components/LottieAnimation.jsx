import Lottie from "lottie-react";
import robotAnimation from "./logo-loader.json";

const style = { height: 300 };

const Example = () => {
  return (
    <Lottie
      animationData={robotAnimation}
      style={style}
    />
  );
};

export default Example;



