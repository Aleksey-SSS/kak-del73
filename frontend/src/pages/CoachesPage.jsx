import React, { useState, useEffect } from "react";
import { Link, useHref, useNavigate } from "react-router-dom";
import { AppHeader } from '../components/Header'
import { Coaches } from '../components/Coaches'
import { Footer } from '../components/Footer'



const СoachesPage = () => {
  let [notes, setNotes] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    console.log('dghsahdf');
  }, []);



  return (

    <div>

      <div>
        <AppHeader />
      </div>
      <div>
        <Coaches />
      </div>

      <div>
        <Footer />
      </div>
    </div>

  );
};

export default СoachesPage;
