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

import { Helmet } from "react-helmet";
const TITLE = " Контакты - официальный сайт ФК Симбирские львы ";

export const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="main_contacts">
        <div className="chldr_contacts_1">
          <div className="contacts_1">
            <p className="contacts_text">СВЯЗАТЬСЯ</p>
            <p className="contacts_text_small">Ульяновск, проспект Гая 15</p>
            <p className="contacts_text_small">sim.lion@mail.ru</p>
            <p className="contacts_text_small">+7 (904) 194-94-00</p>
          </div>
        </div>
        <div className="chldr_contacts_2">
          <div className="contacts_2"></div>
        </div>
      </div>
    </div>
  );
};
