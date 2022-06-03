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
const TITLE = " Тренеры - официальный сайт ФК Симбирские львы ";

export const Coaches = () => {
  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="coaches_main">
        <div className="coaches_one">
          <div className="coaches_one_img">
            <div className="coaches_image"></div>
          </div>
          <div className="coaches_one_opis">
            <p>Егоров Никита Алексеевич</p>
            <p>- Тренрская карьера с 2010 года</p>
            <p>- Стаж 12 лет</p>
            <p>- Высшее педагогическое образование</p>
            <p>- Кандидат мастера спорта по футболу</p>
            <p>- 1 тренерская категория</p>
            <p>- Лицензированный специалист C-UEFA</p>
            <p>- Многократный победитель городский, областных,</p>
            <p>Всероссийских соревнований по футболу с</p>
            <p>юношескими командами</p>
            <p>- Воспитанники выступают в профессиональных</p>
            <p>командах и лучших академиях страны</p>
          </div>
        </div>

        <div className="coaches_two">
          <div className="coaches_two_img">
            <div className="coaches_image_2"></div>
          </div>
          <div className="coaches_two_opis">
            <p>Макавеев Олег Юрьевич</p>
            <p>- Тренрская карьера с 2014 года</p>
            <p>- Стаж 6 лет</p>
            <p>- Высшее педагогическое образование</p>
            <p>- Лицензированный специалист C-UEFA</p>
            <p>- Призер городских и областных соревновании</p>
            <p>среди детских команд</p>
          </div>
        </div>
      </div>
    </div>
  );
};
