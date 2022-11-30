import React from "react";
import Navbar from "../../comps/Navbar";

const index = ({ data }) => {
  return (
    <>
      <div className="box">
        <Navbar />
        <div className="title">
          <span>Sucursales</span>
        </div>
        <div className="bookingContainer">
          {data.map((dato, index) => (
            <div>
              <div>
                <div>Nombre</div>
                <div>
                  <span className="content" key={index}>
                    {dato.name}
                  </span>
                </div>
              </div>

              <div>
                <div>Mail</div>
                <div>
                  <span className="content" key={index}>
                    {dato.email}
                  </span>
                </div>
              </div>

              <div>
                <div>Capacidad Máxima</div>
                <div>
                  <span className="content" key={index}>
                    {dato.maxCapacity}
                  </span>
                </div>
              </div>
              <div>
                <div>Horario de Inicio y Cierre</div>
                <div>
                  <span className="content" key={index}>
                    {dato.start} - {dato.end} Hs
                  </span>
                </div>
              </div>
              <button className="edit">
                <span className="editText">Editar</span>
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
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default index;
