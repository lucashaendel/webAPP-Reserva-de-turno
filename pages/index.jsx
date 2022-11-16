import React from "react";
import Link from "next/link";

const login = () => {
  return (
    <div>
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
        <button>Reservar</button>
      </div>

      <div className="container-login">
        <div className="head-login">
          <h2>Iniciar sesión</h2>
        </div>
        <div className="inputs-login">
          <div className="input-login">
            <label>Usuario</label>
            <input type="text" />
          </div>

          <div className="input-login">
            <label>Contraseña</label>
            <input type="password" />
          </div>

          <Link href="#" className="forgot-pw">
            ¿olvidaste tu contraseña?
          </Link>
        </div>
        <button className="btn-login">
          <span>ingresar</span>
        </button>

        <button className="btn-register">¿No tenés cuenta? Registrate</button>
      </div>
    </div>
  );
};

export default login;