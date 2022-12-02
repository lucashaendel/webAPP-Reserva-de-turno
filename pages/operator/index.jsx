import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const index = ({ data }) => {
  return (
    <div className="divReservas1">
      <div className="tituloReserva">
        <span>Reservas</span>
      </div>

      <div className="divReservas">
        {data.map((dato, index) => (
          <div className="divPedido">
            <div className="divNombre">
              <span className="spanNombre">
                <span>Nombre</span>
              </span>
              <span className="spanNombre2" key={dato._id}>
                <span>{dato.fullName}</span>
              </span>
            </div>
            <div className="divFecha">
              <span className="tituloFecha">
                <span>Reserva</span>
              </span>
              <span className="fecha" key={dato._id}>
                <span>Dia reservado</span>
              </span>
            </div>
            <div className="divDia">
              <span className="tituloDia">
                <span>Día de la reserva</span>
              </span>
              <span className="spanDia" key={dato._id}>
                <span>{dato.date}</span>
              </span>
            </div>
            <div className="divNumeroReservas">
              <span className="tituloNumReserva">
                <span>N° de la reserva</span>
              </span>
              <span className="numReserva" key={dato._id}>
                <span>{index}</span>
              </span>
            </div>
            <div className="divConfirmacion">
              <LikeButton id={dato._id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export function LikeButton(data) {
  const [attendance, setAttendance] = useState(false);

  const handleClick = () => {
    if (attendance) {
      setAttendance(false);
    } else {
      setAttendance(true);
    }

    axios
      .put(`http://localhost:5000/api/operator/reservations/turn/${data.id}`, {
        attendance,
      })
      .then((res) => res.data.attendance)
      .catch((err) => alert(err));
  };
  const result = !attendance ? "Confirmado el turno" : "Confirmacion pendiente";
  return (
    <div>
      <button onClick={handleClick} className="BtnStyle" type="submit">
        <span className="txtConfirmacion"> {result}</span>
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:5000/api/turn");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default index;
