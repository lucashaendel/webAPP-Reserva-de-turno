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
          {data.map((dato, index) => {
            if (dato.turns.length > 0) {
              // dato.operator.length
              console.log(data[index]);
              return dato.turns.map(
                (
                  prueba // dato.operator.map
                ) => (
                  <div>
                    <div>
                      <div>Nombre</div>
                      <div>
                        <span className="inputText" key={index}>
                          {prueba.fullName}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div>Email</div>
                      <div>
                        <span className="inputText" key={index}>
                          {prueba.email}
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
                        <span>{data[index].name}</span>
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
                        <span>*****</span>
                      </span>
                    </div>
                    <button className="editButton">
                      <span>Editar</span>
                    </button>
                  </div>
                )
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:5000/api/branch");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default operatorList;
