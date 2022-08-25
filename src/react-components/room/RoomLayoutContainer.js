/**
 * RoomLayoutContainer
 * Container wrapping the RoomLayout, used in `ui-root.js` by passing all arguments to `RoomLayout.js`
 * and handling the viewport resizing.
 * Not relevant because the actual room layout implementation is done in `RoomLayout.js`.
 * @version 0.0.0
 */
import React, { useRef } from "react";
import PropTypes from "prop-types";
import { RoomLayout } from "../layout/RoomLayout";
import { useResizeViewport } from "./useResizeViewport";

export function RoomLayoutContainer({ store, scene, ...rest }) {
  const viewportRef = useRef();

  useResizeViewport(viewportRef, store, scene);

  return <RoomLayout viewportRef={viewportRef} {...rest} />;
}

RoomLayoutContainer.propTypes = {
  store: PropTypes.object.isRequired,
  scene: PropTypes.object.isRequired
};
