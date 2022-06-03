import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";
import { AppHeader } from "../components/Header";

import { Footer } from "../components/Footer";

import { Helmet } from "react-helmet";
const TITLE = "Новости - официальный сайт ФК Симбирские львы";

const NotesListPage = () => {
  let [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("/api/notes/");
    let data = await response.json();
    console.log(data);
    data = data.sort((el1, el2) => el2.id - el1.id);
    setNotes(data);
  };

  return (
    <div className="notes">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <AppHeader />

  
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Новости </h2>
        {/* <p className="notes-count">{notes.length}</p> */}
      </div>
      <div className="notes_center">
        <div className="notes-list">
          {notes.map((note, index) => (
            <ListItem key={index} note={note} />
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
      {/* <AddButton /> */}
    </div>
  );
};

export default NotesListPage;
