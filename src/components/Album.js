import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Album = () => {
  const [album, setAlbum] = useState();
  const navigation = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const getAlbum = async () => {
      try {
        const albums = await axios.get(
          `https://jsonplaceholder.typicode.com/albums/${location.state}`
        );

        console.log(albums.data);
        setAlbum(albums.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAlbum();
  }, []);

  return (
    <div className={"flex text-center justify-center"}>
      <div>
        <p className={"text-4xl"}>Album</p>
        <p
          className={
            "animate-bounce  text-2xl my-12 px-10 py-4 items-center bg-zinc-500 text-white  cursor-pointer"
          }
          onClick={() =>
            navigation("/photos", { state: album && album.userId })
          }
        >
          {album ? (
            album.title
          ) : (
            <div className={"animate-ping"}> loading </div>
          )}
        </p>

        <button
          className={" text-xl text-white  px-4 py-4 bg-slate-600 w-full"}
          onClick={() => navigation("/")}
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default Album;
