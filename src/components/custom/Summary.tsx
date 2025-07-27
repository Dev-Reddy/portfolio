import React from "react";

const Summary = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mt-8 mb-4 px-4">
      <div className="space-y-4 font-montserrat">
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
          Full-stack developer building AI-powered applications.
          <br />I ship fast, break less, and fix faster.
        </p>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Experienced in building with JavaScript, TypeScript, and Python.
          <br />
          Currently exploring generative AI and integrating LLMs into real
          projects.
        </p>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed italic">
          From traditional web apps to AI-driven tools — I build things that
          work.
        </p>
      </div>
    </div>
  );
};

export default Summary;
