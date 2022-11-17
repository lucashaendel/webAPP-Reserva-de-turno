import React from "react";

const profile = () => {
  return (
    <div>
      <div class="divFormulario">
        <span class="textHeader">
          <span>Mis datos</span>
        </span>
        <div class="divInputDesktop2">
          <div class="divFormulario-txt">
            <span class="textName">
              <span>Nombre</span>
            </span>
          </div>
          <input type="text" placeholder class="divInput-Desktop1" />
        </div>
        <div class="divInputDesktop3">
          <div class="divFormulario-txt">
            <span class="textName">
              <span>Correo electrónico</span>
            </span>
          </div>
          <input type="text" placeholder class="divInput-Desktop2" />
        </div>
        <div class="divFila">
          <div class="divFilaInput">
            <div class="txtFila">
              <span class="txtDNI">
                <span>DNI</span>
              </span>
            </div>
            <input type="text" placeholder class="filaInput-Desktop1" />
          </div>
          <div class="divFilaInput">
            <div class="txtFila">
              <span class="txtDNI">
                <span>Sucursal</span>
              </span>
            </div>
            <div class="filaInput-Desktop2">
              <span class="txtSucursal">
                <span>Villa Crespo</span>
              </span>
              <svg
                className="formulario-user-interface"
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
        <div class="divHorario">
          <div class="divInputDesktop4">
            <div class="txtHorario">
              <span class="txtContraseña">
                <span>Contraseña</span>
              </span>
            </div>
            <input type="text" placeholder class="horarioInputinput-desktop1" />
          </div>
          <div class="horarioInput-desktop2">
            <span className="txtHorario2">
              <span>Editar contraseña</span>
            </span>
          </div>
        </div>
        <button class="HorarioButton-desktop1">
          <span class="textHorarioButton">
            <span>Aceptar</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default profile;
