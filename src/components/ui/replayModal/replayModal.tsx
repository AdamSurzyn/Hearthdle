import React from "react";
import { createPortal } from "react-dom";
import { ReplayButton } from "./replayButton";
import { ReplayButtonProps } from "../../../types/modalTypes";
import "./replayModal.scss";
export const ReplayModal = ({ onReset }: ReplayButtonProps) => {
  return createPortal(
    <div className="replay-modal">
      <ReplayButton onReset={onReset}></ReplayButton>
    </div>,
    document.body
  );
};
