import Link from "next/link";
import React from "react";
import Navbar from "../../comps/Navbar";

const profile = () => {
  return (
    <>
      <Navbar />

      {/*Formulario*/}
      <div className="form">
        <div className="newSucursal">Mis Datos</div>
        <div className="input2">
          <label>Nombre</label>
          <input type="text"></input>
        </div>
        <div className="input2">
          <label>Mail</label>
          <input type="text"></input>
        </div>
        <div className="fila">
          <div className="inputDesktop2">
            <label>DNI</label>
            <input type="number"></input>
          </div>
          <div className="inputDesktop3">
            <label>Teléfono</label>
            <input type="number"></input>
          </div>
        </div>
        <div className="Horario">
          <div>
            <label>Contraseña</label>
            <input type="password"></input>
          </div>
          <Link href="#" className="inputEditarContraseña">
            Editar Contraseña
          </Link>
        </div>
        <button className="buttonProfileUser">Aceptar</button>
      </div>
    </>
  );
};

export default profile;
