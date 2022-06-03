import React, { useState, useEffect } from "react";
import { Link, useHref, useNavigate } from "react-router-dom";
import { AppHeader } from '../components/Header'
import { Contact } from "../components/Contacts";

import { Footer } from '../components/Footer'
import { Map, Placemark, YMaps } from "react-yandex-maps";

const ContactsPage = () => {
  let [notes, setNotes] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    console.log('dghsahdf');
  }, []);

  const coordinates =
    [54.268224, 48.330476]
    ;
  const mapData = {
    center: [54.268224, 48.330476],
    zoom: 15,
  };

  return (

    <div className="">

      <div>
        <AppHeader />
      </div>
      <div>
        <Contact />
      </div>
      <hr></hr>
      <div>
      </div>

      <div >
        <div className="big_boy " >

        </div>
        <div className="main_map">
          <div className="map_center">
            <YMaps >
              <Map width={'70%'} height={'500px '} defaultState={mapData}>
                <Placemark geometry={coordinates} />

              </Map>
            </YMaps>
          </div>

        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
};

export default ContactsPage;
