/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const FiBrAngleSmallDown2 = ({ color = "#3F3F3F", className }) => {
  return (
    <svg
      className={`fi-br-angle-small-down-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M19.0612 7.85399C18.9219 7.7146 18.7565 7.60402 18.5745 7.52858C18.3924 7.45314 18.1973 7.41431 18.0002 7.41431C17.8031 7.41431 17.608 7.45314 17.426 7.52858C17.2439 7.60402 17.0785 7.7146 16.9392 7.85399L12.3532 12.439C12.2594 12.5327 12.1323 12.5854 11.9997 12.5854C11.8671 12.5854 11.74 12.5327 11.6462 12.439L7.06121 7.85399C6.77995 7.57259 6.39842 7.41445 6.00056 7.41436C5.60271 7.41426 5.22111 7.57222 4.93971 7.85349C4.65832 8.13475 4.50018 8.51627 4.50008 8.91413C4.49999 9.31199 4.65795 9.69359 4.93921 9.97499L9.52521 14.561C9.85022 14.886 10.2361 15.1439 10.6607 15.3198C11.0854 15.4957 11.5406 15.5862 12.0002 15.5862C12.4599 15.5862 12.915 15.4957 13.3397 15.3198C13.7643 15.1439 14.1502 14.886 14.4752 14.561L19.0612 9.97499C19.3424 9.69369 19.5004 9.31223 19.5004 8.91449C19.5004 8.51674 19.3424 8.13528 19.0612 7.85399Z"
        fill={color}
      />
    </svg>
  );
};

FiBrAngleSmallDown2.propTypes = {
  color: PropTypes.string,
};
