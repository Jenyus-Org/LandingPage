import * as React from "react";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home</title>
      <div className="flex items-center h-screen justify-between">
        <div className="flex-1"></div>
        <div className="flex-1 flex flex-col items-center">
          <div>
            <h1 className="font-title text-6xl mb-1">Jenyus Org</h1>
            <hr className="border-2 border-black mb-2" />
            <p className="font-title text-xl">Realising Ideas</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
