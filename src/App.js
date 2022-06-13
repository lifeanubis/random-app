import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Album from "./components/Album";
import Images from "./components/Images";
import Users from "./components/Users";

//  Author :- Shreyansh sharma

function App() {
  return (
    <div className={"bg-teal-700 py-4 h-screen overflow-y-auto"}>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/album" element={<Album />} />
        <Route path="/photos" element={<Images />} />
      </Routes>
    </div>
  );
}
export default App;
