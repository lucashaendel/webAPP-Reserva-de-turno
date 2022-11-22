import React from "react";
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
            <input type="text" required />
          </div>

          <div className="input-login">
            <label>Contraseña</label>
            <input type="password" required />
          </div>

          <Link href="#" className="forgot-pw">
            ¿olvidaste tu contraseña?
          </Link>
          <button className="btn-login">ingresar</button>
        </form>
        <Link href="/register">
          <button className="btn-register">¿No tenés cuenta? Registrate</button>
        </Link>
      </div>
    </div>
  );
};

export default login;
