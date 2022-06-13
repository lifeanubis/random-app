import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Images = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const [image, setImage] = useState("");
  useEffect(() => {
    const getImages = async () => {
      try {
        const images = await axios.get(
          `https://jsonplaceholder.typicode.com/photos/${location.state}`
        );
        console.log(images.data);
        setImage(images.data);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);

  return (
    <div className={"flex py-14 my-4 justify-center mb-4  "}>
      <div
        className={
          " py-4 bg-slate-700 mb-4 text-center px-5 text-2xl text-white max-w-md  cursor-pointer "
        }
      >
        <h2 className={"my-4"}>Images</h2>

        <div>
          {image ? (
            <>
              <img
                src={image.url}
                alt="img err"
                width={"100%"}
                height={"100%"}
              />
              <h2
                className={
                  "text-2xl my-4 text-justify items-center  text-white max-w-md  cursor-pointer"
                }
              >
                title:- {image.title}
              </h2>
              <h2> id:- {image.id} </h2>
              <h2> albumid:- {image.albumId} </h2>
            </>
          ) : (
            <div className={"animate-ping"}> loading </div>
          )}
        </div>
        <button
          className={" text-xl text-white  px-4 my-4 py-4 bg-slate-600 w-full"}
          onClick={() => navigation("/")}
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default Images;
