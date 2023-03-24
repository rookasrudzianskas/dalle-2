"use client";

import React, {useState} from 'react';

const PromptInput = ({}) => {
  const [input, setInput] = useState("");

  return (
    <div className="m-10">
      <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
        <textarea
          placeholder="Enter your prompt here"
          className="flex-1 p-4 outline-none rounded-md"
        />
        <button
          className={`p-4 ${
            input
              ? "bg-violet-500 text-white transition-colors duration-200"
              : "text-gray-300 cursor-not-allowed"
          } font-bold`}
          type="submit"
          disabled={!input}
        >
          Generate
        </button>
        <button
          className={`p-4 bg-violet-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400`}
          // onClick={() => submitPrompt(true)}
          // disabled={isLoading || isValidating}
          type="button"
        >
          Use Suggestion
        </button>
        <button
          className={`p-4 bg-white text-violet-500 border-none transition-colors duration-200 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold`}
          // onClick={mutate}
          type="button"
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
};

export default PromptInput;
// by Rokas with ❤️
