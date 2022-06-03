import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { AppHeader } from "../components/Header";
import { Footer } from "../components/Footer";

const NotePage = ({ match, history }) => {
  const { id } = useParams();
  const [note, setNote] = useState({
    body: "",
    create: "",
    id: "",
    update: "",
    model_img: "",
  });
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getNote();
  }, []);

  const getNote = async () => {
    if (id === "new") return;

    let response = await fetch(`/api/notes/${id}/`);
    let data = await response.json();
    // console.log('data', data)
    setNote(data);
  };

  let createNote = async () => {
    fetch(`/api/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let updateNote = async () => {
    fetch(`/api/notes/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let deleteNote = async () => {
    var name = prompt("Please enter the password");
    if (name === "1234")
      fetch(`/api/notes/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    navigate("/news");
  };

  let handleSubmit = () => {
    if (id !== "new" && note.body === "") {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
      setEdit(false);
    } else if (id === "new" && note.body !== null) {
      createNote();
    }
    navigate("/news");
  };

  let handleChange = (value) => {
    setNote((note) => ({ ...note, body: value }));
    console.log("Handle Change:", note);
  };

  function validateUser() {
    var name = prompt("Please enter the password");
    if (name === "1234")
      // document.getElementsByName("comment")[0].disabled=false;
      document.getElementsByName("comment")[0].disabled = false;
    setEdit(true);
  }

  const getTime = (note) => {
    return new Date(note.update).toLocaleDateString();
  };
  return (
    <div className="note">
      <AppHeader />
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {/* {id !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )} */}
      </div>
      {/* <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        defaultValue={note.body}
      ></textarea> */}
      {/* <div className="button_notePage">
        <button onClick={validateUser} >Edit</button>
        <button onClick={deleteNote} >DELTE</button>
        </div> */}
      <div className="main_notePage">
        <span className="text_white otstup">{getTime(note)}</span>
        <h1 className="distance_between_title">{note.title}</h1>
        {!edit && (
          <pre className="news_note_body">
            <img src={note.model_img} align="right" />
            {note.body}
          </pre>
        )}
        {edit && (
          <textarea
            className="text_area"
            name="comment"
            cols="5"
            rows="2"
            disabled="disabled"
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            value={note.body}
          >
            aaa
          </textarea>
        )}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default NotePage;
