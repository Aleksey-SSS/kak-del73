import React, { useState } from "react";
import "../App.css";
import { styled } from "@mui/material/styles";
// import { withStyles } from "@mui/s";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import axios from "axios";

import vk from "../assets/icons/vk.png";
import instagram from "../assets/icons/instagram.png";

export const Footer = () => {
  return (
    <div>
      <hr></hr>
      <div className="main_footer">
        <div className="footer_column">
          <div className="tel_footer">
            <p>+7 (904) 194-94-00</p>
          </div>
          <div className="footer_icons">
            <div className="footer_buttons">
              <p>
                <a href="https://vk.com/fcsimlion" target="_blank">
                  <img src={vk}></img>
                </a>
              </p>
              <p>
                <a
                  href="https://instagram.com/lfksimbirskie?utm_source=ig_profile_share&igshid=1jbj4dkn2q2e2"
                  target="_blank"
                >
                  <img src={instagram}></img>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer_column">
          <div className="footer_icons">
            <div className="footer_buttons">
              <a
                className="css-1b7eyqz-MuiButtonBase-root-MuiButton-root topbutton"
                href="#"
                title="Вернуться к началу"
              >
                ^Наверх
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
