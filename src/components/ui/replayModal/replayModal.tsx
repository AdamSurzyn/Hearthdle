import React from "react";
import { createPortal } from "react-dom";
import { ReplayButton } from "./replayButton";
import { ReplayModalProps } from "../../../types/modalTypes";
import "./replayModal.scss";
import { ReplayScore } from "./replayScore";

export const ReplayModal = ({ onReset, gameState }: ReplayModalProps) => {
  return createPortal(
    <div className="replay-modal">
      <ReplayScore gameState={gameState}></ReplayScore>
      <ReplayButton onReset={onReset}></ReplayButton>
    </div>,
    document.body
  );
};
