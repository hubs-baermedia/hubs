/**
 * Spinner
 * Loading animation used through the app.
 * @version 1.0.0
 */
import React from "react";
import { ReactComponent as SpinnerSvg } from "./Spinner.svg";

/**
 * Returns the animated svg file as a React component.
 */
export function Spinner() {
  return <SpinnerSvg />;
}
