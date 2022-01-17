import Button from "@mui/material/Button";
import "App.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { signout } from "store/actions/authActions";
import { Link } from "react-router-dom";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const { authenticated } = useSelector((state: RootState) => state.auth);
  const action = useDispatch();

  const handleClose = () => {
    action(signout());
  };
  return (
    <div className="nav">
      {authenticated ? (
        <Button color="primary" variant="contained" onClick={handleClose}>
          Wyloguj się
        </Button>
      ) : (
        <p className="nav-title">KURS JS</p>
      )}
      <div>
        {authenticated ? (
          <Link to="/dashboard">
            <i className="fas fa-dragon dragon"></i>
          </Link>
        ) : (
          <i className="fas fa-dragon dragon"></i>
        )}
      </div>
    </div>
  );
};
