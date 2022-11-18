import React from "react";

// import styles from "../styles/Index.module.scss";

import Link from "next/link";


const login = () => {
  return (
    <div>
      <div className="container-login">
        <div className="head-login">
          <h2>Iniciar sesión</h2>
        </div>
        <form className="inputs-login">
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
        </form>
        <button className="btn-login">ingresar</button>

        <button className="btn-register">¿No tenés cuenta? Registrate</button>
      </div>

    </div>
  );
};

export default login;
