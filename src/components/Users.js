import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setData(users.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className={"flex py-4 justify-center mb-4 "}>
      <ul>
        {data.map((item) => {
          return (
            <>
              <li
                className={
                  "py-4 bg-slate-700 mb-4 text-center px-5 text-2xl text-white  cursor-pointer "
                }
                onClick={() => navigation("/album", { state: item.id })}
              >
                <div className={"animate-bounce"}>{item.name}</div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
