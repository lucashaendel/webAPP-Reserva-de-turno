import React from "react";

const index = ({ data }) => {
  return (
    <div className="divReservas1">
      <span className="tituloReserva">
        <span>Reservas</span>
      </span>
      {data.map((dato, index) => (
        <div className="divReservas">
          <div className="divPedido">
            <div className="divNombre">
              <span className="spanNombre">
                <span>Nombre</span>
              </span>
              <span className="spanNombre2" key={index}>
                <span>{dato.fullName}</span>
              </span>
            </div>
            <div className="divFecha">
              <span className="tituloFecha">
                <span>Reserva</span>
              </span>
              <span className="fecha" key={index}>
                <span>{dato.fullName}</span>
              </span>
            </div>
            <div className="divDia">
              <span className="tituloDia">
                <span>Día de la reserva</span>
              </span>
              <span className="spanDia" key={index}>
                <span>{dato.fullName}</span>
              </span>
            </div>
            <div className="divNumeroReservas">
              <span className="tituloNumReserva">
                <span>N° de la reserva</span>
              </span>
              <span className="numReserva" key={index}>
                <span>{dato.fullName}</span>
              </span>
            </div>
            <div className="divConfirmacion">
              <span className="txtConfirmacion">
                <span>Confirmación</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:5000/api/user");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default index;
