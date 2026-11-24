import { Fragment } from "react";

/**
 * Text whose long words carry soft hyphens (&shy;). Each of those words is
 * kept whole, moving to the next line if needed, and only breaks when it is
 * wider than the line itself, as happens with enlarged text on a phone.
 */
export function SoftText({ children }: { children: string }) {
  return children.split(" ").map((word, index) => (
    <Fragment key={index}>
      {index > 0 && " "}
      {word.includes("\u00AD") ? (
        <span className="inline-block max-w-full">{word}</span>
      ) : (
        word
      )}
    </Fragment>
  ));
}
