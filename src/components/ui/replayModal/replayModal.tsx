import React from "react";
import { createPortal } from "react-dom";
import { ReplayButton } from "./replayButton";
import { ReplayModalProps } from "../../../types/modalTypes";
import "./replayModal.scss";
import { ReplayScore } from "./replayScore";

export const ReplayModal = ({ onReset, gameState }: ReplayModalProps) => {
  return createPortal(
    <div className="replay-modal">
      <ReplayButton onReset={onReset}></ReplayButton>
      <ReplayScore gameState={gameState}></ReplayScore>
    </div>,
    document.body
  );
};
