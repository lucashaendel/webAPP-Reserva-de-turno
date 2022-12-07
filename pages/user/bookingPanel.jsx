import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/authContext";
import TopBanner from "../../comps/TopBanner";
import Navbar from "../../comps/Navbar";

const BookingPanel = () => {
  const user = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user.auth) {
      const fetchData = async () => {
        const ID = user.auth.id;
        const data = await axios
          .get(`http://localhost:5000/api/turn/user/${ID}`)
          .then((res) => setData(res.data));
      };
      fetchData().catch((error) => console.log(error));
    }
  }, [user]);

  return (
    <div>
      <TopBanner />
      <Navbar />
      <h1 className="titleBookings">Reservas</h1>
      <div className="bookings">
        {data.map((dato, index) => (
          <div className="myAccount" key={index}>
            <div className="info">
              <h2>Nombre y apellido</h2>
              {console.log(dato.fullName)}
              <p>{dato.fullName}</p>
            </div>
            <div className="info">
              <h2>Reserva</h2>
              <p>{dato.reservationDate}</p>
            </div>
            <div className="info">
              <h2>Sucursal</h2>
              <p>{dato.branchName}</p>
            </div>
            <div className="info">
              <h2>N de la reserva</h2>
              <p>{dato._id}</p>
            </div>
            <button>
              Editar{" "}
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.70484 0.794965C1.31548 0.405604 0.684205 0.405605 0.294844 0.794966C-0.094517 1.18433 -0.0945169 1.81561 0.294844 2.20497L7.29274 9.20286C7.68326 9.59338 8.31643 9.59338 8.70695 9.20286L15.7048 2.20497C16.0942 1.81561 16.0942 1.18433 15.7048 0.794966C15.3155 0.405605 14.6842 0.405605 14.2948 0.794966L7.99984 7.08997L1.70484 0.794965Z"
                  fill="#A442F1"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPanel;
