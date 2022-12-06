import Link from "next/link";
import React from "react";
import Navbar from "../../comps/Navbar";
import TopBanner from "../../comps/TopBanner";

const Cancelled = () => {
  return (
    <>
      <TopBanner />
      <Navbar />
      <div className="container-cancelado">
        <div className="cancelado-vector">
          <svg
            className="cancelado-user-interface"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.58704 13.4209C7.91151 13.0964 7.91151 12.5703 7.58704 12.2459L3.17454 7.83337H13.6662C14.1264 7.83337 14.4995 7.46027 14.4995 7.00003C14.4995 6.53979 14.1264 6.1667 13.6662 6.1667H3.17454L7.58704 1.7542C7.91151 1.42973 7.91151 0.903667 7.58704 0.579199C7.26258 0.254732 6.73651 0.254732 6.41204 0.579199L0.698317 6.29293C0.307793 6.68345 0.307793 7.31661 0.698318 7.70714L6.41204 13.4209C6.73651 13.7453 7.26258 13.7453 7.58704 13.4209Z"
              fill="#A442F1"
            />
          </svg>

          <span className="cancelado-text-vector">
            <span>Atrás</span>
          </span>
        </div>
        <div className="div-cancelar">
          <div className="cancelado-header">
            <span className="cancelado-nombre">
              <span>Hola Ivan,</span>
            </span>
            <span className="cancelado-pregunta">
              <span>¿Por qué desea cancelar su reserva?</span>
            </span>
          </div>
          <svg
            className="cancelado-border "
            width="779"
            height="1"
            viewBox="0 0 779 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="779" y2="0.5" stroke="#C8C8C8" />
          </svg>

          <div className="cancelado-div-checkbox">
            <input className="cancelado-user-interface1" type="checkbox" />

            <span className="cancelado-text06">
              <span>Ya no quiero ir</span>
            </span>
          </div>
          <svg
            className="cancelado-border1"
            width="779"
            height="1"
            viewBox="0 0 779 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="779" y2="0.5" stroke="#C8C8C8" />
          </svg>

          <div className="cancelado-div-checkbox2">
            <input className="cancelado-user-interface1" type="checkbox" />
            <span className="cancelado-text08">
              <span>Me equivoqué de horario</span>
            </span>
          </div>
          <div className="cancelado-card">
            <span className="cancelado-text10">
              <span>Su reserva actual será cancelada</span>
            </span>
            <span className="cancelado-text12">
              <span>La cancelación no puede ser revertida</span>
            </span>
            <button className="cancelado-button-red">
              <span className="cancelado-span-text">
                <span>Confirmar cancelación</span>
              </span>
            </button>
          </div>
          <svg
            className="cancelado-border2"
            width="779"
            height="1"
            viewBox="0 0 779 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="779" y2="0.5" stroke="#C8C8C8" />
          </svg>

          <div className="cancelado-div-checkbox3">
            <input className="cancelado-user-interface1" type="checkbox" />
            <span className="cancelado-text16">
              <span>Encontré un lugar mejor</span>
            </span>
          </div>
          <svg
            className="cancelado-border3"
            width="779"
            height="1"
            viewBox="0 0 779 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="779" y2="0.5" stroke="#C8C8C8" />
          </svg>

          <div className="cancelado-div-checkbox4">
            <input className="cancelado-user-interface1" type="checkbox" />
            <span className="cancelado-text18">
              <span>Me cancelaron</span>
            </span>
          </div>
          <svg
            className="cancelado-border4"
            width="779"
            height="1"
            viewBox="0 0 779 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="779" y2="0.5" stroke="#C8C8C8" />
          </svg>

          <div className="cancelado-div-checkbox5">
            <input className="cancelado-user-interface1" type="checkbox" />
            <span className="cancelado-text20">
              <span>Otro</span>
            </span>
          </div>
        </div>
        <span className="cancelado-text22">
          <span>Cancelar reserva</span>
        </span>
        <div className="cancelado-div-informacinreserva">
          <div className="cancelado-datos-usuario">
            <span className="cancelado-text24">
              <span>Información de la reserva</span>
            </span>
            <span className="cancelado-text26">
              <span>Ivan Cruce</span>
            </span>
          </div>
          <div className="cancelado-div-content">
            <div className="cancelado-div-txt1">
              <span className="cancelado-text28">
                <span>Día</span>
              </span>
              <span className="cancelado-text30">
                <span>12/10/2022</span>
              </span>
            </div>
            <div className="cancelado-div-txt2">
              <span className="cancelado-text32">
                <span>Horario:</span>
              </span>
              <span className="cancelado-text34">
                <span>13:00 hs</span>
              </span>
            </div>
            <div className="cancelado-div-txt3">
              <span className="cancelado-text36">
                <span>Sucursal:</span>
              </span>
              <span className="cancelado-text38">
                <span>Villa Crespo</span>
              </span>
            </div>
          </div>
          <svg
            className="cancelado-border5"
            width="282"
            height="1"
            viewBox="0 0 282 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0.5"
              x2="281.5"
              y2="0.5"
              stroke="#E1E1E1"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Cancelled;
