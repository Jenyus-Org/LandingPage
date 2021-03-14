import clsx from "clsx";
import * as React from "react";

const Paragraph = (props) => <p className={clsx("mb-2")} {...props} />;

const Heading1 = (props) => (
  <h2
    className={clsx("text-2xl", "mt-8", "mb-2")}
    id={props.children}
    {...props}
  />
);

const Heading2 = (props) => <h3 className={clsx("text-xl")} {...props} />;

const Heading3 = (props) => <h4 className={clsx("text-lg")} {...props} />;

const Heading4 = (props) => <h5 {...props} />;

const Heading5 = (props) => <h6 {...props} />;

const Heading6 = (props) => <p {...props} />;

const List = (props) => (
  <ul className={clsx("list-disc", "list-inside", "mb-2")} {...props} />
);

const Link = (props) => (
  <a
    className={clsx(
      "underline",
      "text-red-400",
      "hover:text-red-500",
      "transition-colors",
    )}
    target="_blank"
    {...props}
  />
);

const InlineCode = (props) => (
  <code
    className={clsx("text-gray-700", "bg-gray-200", "rounded", "px-1")}
    {...props}></code>
);

const Blockquote = (props) => (
  <blockquote
    className={clsx(
      "italic",
      "border-l-2",
      "border-gray-200",
      "pl-3",
      "my-8",
      "ml-2",
    )}
    {...props}
  />
);

const HorizontalRule = (props) => (
  <hr className={clsx("border-gray-200", "my-3")} {...props} />
);

export default {
  p: Paragraph,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  ul: List,
  a: Link,
  inlineCode: InlineCode,
  blockquote: Blockquote,
  hr: HorizontalRule,
};
