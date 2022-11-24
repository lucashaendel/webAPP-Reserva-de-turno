import React from "react";


import Navbar from "../comps/Navbar";



import Link from "next/link";


const login = () => {
  return (
    
    <div>
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
