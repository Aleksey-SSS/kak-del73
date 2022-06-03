import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import "./App.css";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import MainPage from "./pages/MainPage";
import ContactsPage from "./pages/ContactsPage";
import CoachesPage from "./pages/CoachesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/news" exact element={<NotesListPage />} />
        <Route path="/contacts" exact element={<ContactsPage />} />
        <Route path="/note/:id" element={<NotePage />} />
        <Route path="/coaches" exact element={<CoachesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
