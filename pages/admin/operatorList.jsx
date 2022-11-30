import React from "react";
import Navbar from "../../comps/Navbar";

const operatorList = ({ data }) => {
  return (
    <>
      <div className="box">
        <div className="Header">
          <Navbar />
        </div>
        <div className="title">
          <span>Operadores</span>
        </div>
        <div className="operatorsContainer">
          {data.map((dato, index) => (
            <div>
              <div>
                <div>Nombre</div>
                <div>
                  <span className="inputText" key={index}>
                    {dato.fullName}
                  </span>
                </div>
              </div>
              <div>
                <div>Email</div>
                <div>
                  <span className="inputText" key={index}>
                    {dato.email}
                  </span>
                </div>
              </div>
              <div>
                <div>Dni</div>
                <div>
                  <span className="inputText" key={index}>
                    {dato.dni}
                  </span>
                </div>
              </div>
              <div className="administrador-listadodeoperadores-info22">
                <span className="administrador-listadodeoperadores-text100 Regular·12·16">
                  <span>Sucursal</span>
                </span>
                <span
                  className="administrador-listadodeoperadores-text102 Semibold·14·16"
                  key={index}
                >
                  <span>{dato.sucursal}</span>
                </span>
              </div>
              <div className="administrador-listadodeoperadores-info23">
                <span className="administrador-listadodeoperadores-text104 Regular·12·16">
                  <span>Contraseña</span>
                </span>
                <span
                  className="administrador-listadodeoperadores-text106 Semibold·14·16"
                  key={index}
                >
                  <span>{dato.password}</span>
                </span>
              </div>
              <button className="editButton">
                <span>Editar</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("#");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default operatorList;
