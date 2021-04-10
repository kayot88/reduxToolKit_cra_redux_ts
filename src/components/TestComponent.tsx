import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../features/modals/Modal";
import {
  modalOpen,
  modalClose,
  // loading,
  fetchThunk,
  selectModal,
} from "../features/modals/modalSlicer";

const TestComponent = () => {
  const handleClick = () => {
    // dispatch(loading());
    dispatch(modalOpen());
    dispatch(fetchThunk());
  };
  const handleCloseClick = () => {
    dispatch(modalClose());
  };
  const dispatch = useDispatch();
  const modals = useSelector(selectModal);

  console.log(modals);
  return (
    <div>
      {modals.status === "loading" ? (
        <div>...loading</div>
      ) : (
        <button onClick={handleClick}>Open modal</button>
      )}
      {modals.isModal && (
        <Modal
          close={handleCloseClick}
          userProfile={modals}
          confirm={() => console.log("Are you ready")}
          text={"Hello"}
        />
      )}
    </div>
  );
};

export default TestComponent;
