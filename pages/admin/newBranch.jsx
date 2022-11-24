import React from "react";

const newBranch = () => {
  return (
    <div className="branchContainer">
      <div className="form">
        <span className="newBranch">
          <span>Crear una nueva sucursal</span>
        </span>
        <div className="administrador-creacindesucursales-input-desktop2">
          <div className="administrador-creacindesucursales-txt">
            <span className="administrador-creacindesucursales-text02 Regular·14·20">
              <span>Nombre</span>
            </span>
          </div>
          <input
            type="text"
            placeholder
            className="administrador-creacindesucursales-input-desktop1"
          />
        </div>
        <div className="administrador-creacindesucursales-input-desktop21">
          <div className="administrador-creacindesucursales-txt1">
            <span className="administrador-creacindesucursales-text04 Regular·14·20">
              <span>Correo electrónico</span>
            </span>
          </div>
          <input
            type="text"
            placeholder
            className="administrador-creacindesucursales-input-desktop11"
          />
        </div>
        <div className="administrador-creacindesucursales-fila">
          <div className="administrador-creacindesucursales-input-desktop22">
            <div className="administrador-creacindesucursales-txt2">
              <span className="administrador-creacindesucursales-text06 Regular·14·20">
                <span>Teléfono</span>
              </span>
            </div>
            <input
              type="text"
              placeholder
              className="administrador-creacindesucursales-input-desktop12"
            />
          </div>
          <div className="administrador-creacindesucursales-input-desktop3">
            <div className="administrador-creacindesucursales-txt3">
              <span className="administrador-creacindesucursales-text08 Regular·14·20">
                <span>Capacidad máxima</span>
              </span>
            </div>
            <div className="administrador-creacindesucursales-input-desktop13">
              <span className="administrador-creacindesucursales-text10 Regular·14·20"></span>

              <svg
                className="administrador-creacindesucursales-user-interface"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.7542 0.495703C1.42973 0.171236 0.903667 0.171236 0.579199 0.495703V0.495703C0.254732 0.82017 0.254732 1.34624 0.579199 1.6707L6.29293 7.38443C6.68345 7.77495 7.31661 7.77495 7.70714 7.38443L13.4209 1.6707C13.7453 1.34624 13.7453 0.82017 13.4209 0.495703V0.495703C13.0964 0.171236 12.5703 0.171236 12.2459 0.495703L7.00003 5.74154L1.7542 0.495703Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="administrador-creacindesucursales-horario">
          <div className="administrador-creacindesucursales-input-desktop23">
            <div className="administrador-creacindesucursales-txt4">
              <span className="administrador-creacindesucursales-text11 Regular·14·20">
                <span>Horario de Inicio</span>
              </span>
            </div>
            <div className="administrador-creacindesucursales-input-desktop14">
              <span className="administrador-creacindesucursales-text13 Regular·14·20">
                <span>10:00</span>
              </span>
              <svg
                className="administrador-creacindesucursales-user-interface1"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.7542 0.495703C1.42973 0.171236 0.903667 0.171236 0.579199 0.495703C0.254732 0.82017 0.254732 1.34624 0.579199 1.6707L6.29293 7.38443C6.68345 7.77495 7.31661 7.77495 7.70714 7.38443L13.4209 1.6707C13.7453 1.34624 13.7453 0.82017 13.4209 0.495703C13.0964 0.171236 12.5703 0.171236 12.2459 0.495703L7.00003 5.74154L1.7542 0.495703Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
          </div>
          <div className="administrador-creacindesucursales-input-desktop31">
            <div className="administrador-creacindesucursales-txt5">
              <span className="administrador-creacindesucursales-text15 Regular·14·20">
                <span>Horario de Cierre</span>
              </span>
            </div>
            <div className="administrador-creacindesucursales-input-desktop15">
              <span className="administrador-creacindesucursales-text17 Regular·14·20">
                <span>18:00</span>
              </span>
              <svg
                className="administrador-creacindesucursales-user-interface2"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.7542 0.495703C1.42973 0.171236 0.903667 0.171236 0.579199 0.495703C0.254732 0.82017 0.254732 1.34624 0.579199 1.6707L6.29293 7.38443C6.68345 7.77495 7.31661 7.77495 7.70714 7.38443L13.4209 1.6707C13.7453 1.34624 13.7453 0.82017 13.4209 0.495703C13.0964 0.171236 12.5703 0.171236 12.2459 0.495703L7.00003 5.74154L1.7542 0.495703Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
          </div>
        </div>
        <button className="buttonSend">
          <span className="buttonSendText">
            <span>Enviar</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default newBranch;
