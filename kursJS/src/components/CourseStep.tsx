import * as React from "react";
import "../App.scss";

interface IntroStepProps {
  nazwa: string;
  url: string;
  fileLabel?: string;
  fileLink?: string;
}

export const CourseStep: React.FC<IntroStepProps> = ({ nazwa, url , fileLabel, fileLink}) => {
  return (
    <div className="intro-step">
      <h3>{nazwa}</h3>
      <iframe
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="movie-frame"
      ></iframe>
        <p>{fileLabel}</p>
        {fileLink && <a href={fileLink}>Kliknij tutaj, aby pobrać</a>}
    </div>
  );
};
