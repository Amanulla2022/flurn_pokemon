import React from "react";

const Toast = ({ message, className }) => {
  return (
    <div
      className={`fixed top-20 underline right-0 m-4 p-4 rounded-md ${className}`}
    >
      {message}
    </div>
  );
};

export default Toast;
