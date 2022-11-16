import Link from "next/link";
import React from "react";

const cancelled = () => {
  return (
    <div className="containerCancelled">
      <div className="topBanner">
        <div className="txt">
          <p>Mensaje Promocional</p>
        </div>

        <div className="userInterface">
          <Link href="#">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.731669 13.2929C1.12219 13.6834 1.75536 13.6834 2.14588 13.2929L7 8.43878L11.8541 13.2929C12.2446 13.6834 12.8778 13.6834 13.2683 13.2929L13.2929 13.2683C13.6834 12.8778 13.6834 12.2446 13.2929 11.8541L8.43878 7L13.2929 2.14588C13.6834 1.75536 13.6834 1.12219 13.2929 0.731669L13.2683 0.707107C12.8778 0.316582 12.2446 0.316583 11.8541 0.707107L7 5.56122L2.14588 0.707107C1.75536 0.316582 1.12219 0.316582 0.731669 0.707107L0.707107 0.731669C0.316582 1.12219 0.316583 1.75536 0.707107 2.14588L5.56122 7L0.707107 11.8541C0.316582 12.2446 0.316582 12.8778 0.707107 13.2683L0.731669 13.2929Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="navbar">
        <h1>navbar</h1>
      </div>
      <div className="divFlecha">
        <div>
          <Link href="#">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.70509 15.705C9.09445 15.3156 9.09445 14.6844 8.70509 14.295L3.41009 9H16.0001C16.5524 9 17.0001 8.55228 17.0001 8C17.0001 7.44771 16.5524 7 16.0001 7H3.41009L8.70509 1.705C9.09445 1.31564 9.09445 0.684357 8.70509 0.294996C8.31573 -0.0943644 7.68445 -0.0943643 7.29509 0.294997L0.297195 7.29289C-0.0933288 7.68341 -0.0933296 8.31658 0.297195 8.7071L7.29509 15.705C7.68445 16.0944 8.31573 16.0944 8.70509 15.705Z"
                fill="#A442F1"
              />
            </svg>
          </Link>
        </div>
        <p>Atras</p>
      </div>
      {/* Informacion reserva */}
      <div className="infoReserva">
        <div>
          <span className="spanInfo1">Informacion de la reserva</span>
          <span className="spanInfo2">Ivan Cruce</span>
        </div>
        <div className="contentReserva">
          <div className="contentReserva1">
            <div>
              <span className="spanReserva1">Dia</span>
              <span className="spanReserva2">12/10/2022</span>
            </div>
          </div>
          <div className="contentReserva2">
            <span className="spanReserva1">Horario</span>
            <span className="spanReserva2">13:00hs</span>
          </div>
          <div className="contentReserva3">
            <span className="spanReserva1">Sucursal</span>
            <span className="spanReserva2">Villa Crespo</span>
          </div>
        </div>
      </div>
      <div className="cancelarReserva">Cancelar Reserva</div>
      {/* div cancelar */}
      <div className="cancelar">
        {/* contenido div */}
        <div className="cancelarHeader">
          <div className="tituloHeader">Hola Ivan</div>
          <div className="preguntaHeader">
            ¿Porque desea cancelar su reserva?
          </div>
          <div className="border"></div>
        </div>
        <div className="checkboxDiv">
          <div>
            <input type="checkbox" />
          </div>
          <span>Ya no quiero ir</span>
        </div>
        <div className="border1"></div>
        <div className="checkboxDiv">
          <div>
            <input type="checkbox" />
          </div>
          <span>Me Equivoque de horario</span>
        </div>
        <div className="card">
          <div className="divCard1">Su reserva actual será cancelada</div>
          <div className="divCard2">La cancelacion no puede ser revertida</div>
          <button>
            <span>Confirmar Cancelacion</span>
          </button>
        </div>
        <div className="border2"></div>
        <div className="checkboxDiv2">
          <div>
            <input type="checkbox" />
          </div>
          <span>Encontre un lugar mejor</span>
        </div>
        <div className="border3"></div>
        <div className="checkboxDiv3">
          <div>
            <input type="checkbox" />
          </div>
          <span>Me cancelaron</span>
        </div>
        <div className="border4"></div>
        <div className="checkboxDiv4">
          <div>
            <input type="checkbox" />
          </div>
          <span>Otro</span>
        </div>
      </div>
    </div>
  );
};

export default cancelled;
