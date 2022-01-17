import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

interface ProgressCircleProps {
  progressValue: number;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  progressValue,
}) => {
  return (
    <div>
      <CircularProgress
        variant="determinate"
        value={progressValue}
        color="secondary"
        size={180}
      />
    </div>
  );
};
