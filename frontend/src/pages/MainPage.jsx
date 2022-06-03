import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AppHeader } from '../components/Header'
import { Footer } from '../components/Footer'
// импорт всяки библиотек для визуала
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';





// импорт всяки библиотек для визуала
import { Helmet } from 'react-helmet'
const TITLE = 'ФК Симбирские львы - официальный сай'



const MainPage = () => {

  let [notes, setNotes] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    console.log('dghsahdf');
  }, []);

  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <div>
        <AppHeader />
      </div>
      <div class="main_image">
        <div class="main_name">
          <p class="main_name_in_image">ФУТБОЛЬНЫЙ КЛУБ <br></br>"СИМБИРСКИЕ ЛЬВЫ" </p>
        </div>
      </div>

      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p><p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p><p>1</p>
      <p>1</p>

      <div>
        <Footer />
      </div>
    </div>
  );

};


export default MainPage;
