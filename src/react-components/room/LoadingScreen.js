import React from "react";
import PropTypes from "prop-types";
import { LoadingScreenLayout } from "../layout/LoadingScreenLayout";
import { Spinner } from "../misc/Spinner";
////DISABLED import { useRandomMessageTransition } from "./useRandomMessageTransition";
export function LoadingScreen({ message /****DISABLED ,infoMessages ****/ }) {
  ////DISABLED const infoMessage = useRandomMessageTransition(infoMessages);
  return (
    <LoadingScreenLayout
      center={
        <>
          <Spinner />
          <p>{message}</p>
        </>
      }
      /****DISABLED
      bottom={
        <>
          <h3>{infoMessage.heading}</h3>
          <p>{infoMessage.message}</p>
        </>
      }
      ****/
    />
  );
}

LoadingScreen.propTypes = {
  message: PropTypes.node,
  infoMessages: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.node.isRequired,
      message: PropTypes.node.isRequired
    })
  )
};

LoadingScreen.defaultProps = {
  infoMessages: []
};
