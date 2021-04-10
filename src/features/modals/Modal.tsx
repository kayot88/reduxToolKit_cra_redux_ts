import React, { ReactElement, useEffect, useState } from "react";

export interface ModalsPropsTypes {
  close: () => void;
  confirm: () => void;
  text: string;
  userProfile: {}
}

const Modal: React.FC<ModalsPropsTypes> = ({

  text,
  confirm,
  close,
}: ModalsPropsTypes): ReactElement => {
  return (
    <div>
      {text} <br />
      <button onClick={close}>Close</button>
    </div>
  );
};

export default Modal;
