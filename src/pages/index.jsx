import * as React from "react";
import clsx from "clsx";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home</title>
      <div
        className={clsx("flex", "items-center", "h-screen", "justify-between")}>
        <div className={clsx("flex-1")}></div>
        <div className={clsx("flex-1", "flex", "flex-col", "items-center")}>
          <div>
            <h1 className={clsx("font-title", "text-6xl", "mb-1")}>
              Jenyus Org
            </h1>
            <hr className={clsx("border-2", "border-black", "mb-2")} />
            <p className={clsx("font-title", "text-xl")}>Realising Ideas</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
