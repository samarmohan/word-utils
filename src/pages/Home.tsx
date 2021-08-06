import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";

export const Home = () => {
  const phrasesToLoopThrough = [
    "Transform",
    "Manipulate",
    "Play With",
    "Translate",
  ];

  return (
    <div className="flex items-center flex-col justify-center py-20 px-6">
      <h1 className="text-center text-4xl font-bold mb-2 text-black">
        The Best Place on the Internet <br /> to{" "}
        <TextLoop interval={2000}>
          {phrasesToLoopThrough.map((phrase: string, index: number) => (
            <span
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="bg-clip-text bg-gradient-to-tr from-green-500 to-blue-500"
              key={index}
            >
              {phrase}
            </span>
          ))}
        </TextLoop>{" "}
        Text
      </h1>
      <Link to="/reverse/sentence">
        <button className="m-2 bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          Get Started
        </button>
      </Link>
    </div>
  );
};
