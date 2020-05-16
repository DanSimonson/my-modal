import React, { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle(event) {
    let tag = event.target;

    if (tag.className === "modal-wrapper") {
      setIsShowing(!isShowing);
    } else if (tag.className === "close-span") {
      setIsShowing(!isShowing);
    } else if (tag.className === "button-default") {
      setIsShowing(!isShowing);
    }
  }

  return {
    isShowing,
    toggle,
  };
};

export default useModal;
