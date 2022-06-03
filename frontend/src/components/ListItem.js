import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const f = (sdgfs, sfhws, sdh) => {};

const ListItem = ({ note }) => {
  const getTime = (note) => {
    return new Date(note.update).toLocaleDateString();
  };

  const getContent = (note) => {
    if (note.body.length > 45) {
      return note.body.slice(0, 350) + "...";
    } else {
      return note.body;
    }
  };

  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <div className="centr_images">
          <div className="hz">
            <img className="filters__img" width={500} src={note.model_img} />
          </div>
        </div>

        <p className="medium_head_note ">{note.title}</p>
        <p className="body_note_list">{getContent(note)}</p>
        <span className="text_white">{getTime(note)}</span>
      </div>
    </Link>
  );
};

export default ListItem;
