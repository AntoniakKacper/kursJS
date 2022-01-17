import "App.scss";
import React from "react";
import {Link} from "react-router-dom";

interface BackArrowButtonProps {
  path: string;
}

export const BackArrowButton: React.FC<BackArrowButtonProps> = ({path}) => {
  return <Link to={path}><i className="fas fa-chevron-left arrow-button"></i></Link>
};
