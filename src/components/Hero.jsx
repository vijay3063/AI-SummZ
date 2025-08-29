import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center px-4 sm:px-8">
      {/* Navigation */}
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-24 sm:w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("#")}
          className="px-4 py-2 rounded-lg bg-primary text-white font-medium shadow-md hover:bg-primary-dark transition"
        >
          GitHub
        </button>
      </nav>

      {/* Headline */}
      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight">
        AI Summarizer using{" "}
        <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-primary-dark to-secondary-dark text-transparent bg-clip-text drop-shadow-md">
          OPENAI GPT-4
        </span>
      </h1>

      {/* Subtext */}
      <h2 className="text-center text-sm sm:text-base md:text-lg mt-4 px-2 sm:px-6 text-gray-700 max-w-2xl">
        Just paste a link and let AI Summarizer do the work — it fetches the
        article, analyzes the content, and delivers a clear, concise summary in
        seconds. No more wading through endless paragraphs to find the key
        points.
      </h2>
    </header>
  );
};

export default Hero;
