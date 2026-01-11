"use client";
import BlurText from "./BlurText";
import "./loader.css";

const PrimaryLoader = ({ isClosing = false }: { isClosing?: boolean }) => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div className={`loader-wrapper ${isClosing ? "fade-out" : ""}`}>
      <div className="mb-2 w-full flex flex-col items-center">
        <BlurText
          text="Welcome to"
          className="text-2xl md:text-3xl lg:text-4xl font-medium"
          animateBy="words"
          direction="top"
          delay={100}
        />

        <BlurText
          text="AgriCore"
          delay={250}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-5xl md:text-8xl mb-8 font-bold text-green-400"
        />
      </div>
    </div>
  );
};

export default PrimaryLoader;
