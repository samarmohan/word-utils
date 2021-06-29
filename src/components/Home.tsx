import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";

export const Home = () => {
  return (
    <div className="text-center py-20 bg-gradient-to-tr from-green-500 to-blue-500 px-6 m-auto justify-center">
      <h2 className="text-4xl font-bold mb-2 text-white">Word Utils</h2>
      <h3>
        <TextLoop
          className="text-2xl mb-8 text-gray-200"
          interval={2000}
          // eslint-disable-next-line react/no-children-prop
          children={[
            "Beautiful Interface",
            "Reverse Words and Sentences",
            "Randomly Capitalize",
            "Translate to Pig Latin and Morse Code",
          ]}
        ></TextLoop>
      </h3>
      <Link to="/reverse/sentence">
        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          Get Started
        </button>
      </Link>
    </div>
  );
};
