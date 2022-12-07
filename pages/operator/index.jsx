import React from "react";
import { useState } from "react";
import axios from "axios";
import TopBanner from "../../comps/TopBanner";
import { useEffect } from "react";
import Link from "next/link";
import Navbar from "../../comps/Navbar";

const Index = ({ data }) => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const docs = data.docs;

  useEffect(() => {
    const paginas = data?.totalPages;
    if (paginas) {
      setPageCount(paginas);
    }
  }, [data]);

  const handlePrevious = (e) => {
    e.preventDefault();
    setPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
  };

  const handleNext = () => {
    setPage((p) => {
      if (p === pageCount) return p;
      return p + 1;
    });
  };

  return (
    <>
      <div className="topb">
        <TopBanner />
      </div>
      <Navbar />
      <div className="divReservas1">
        <div className="tituloReserva">
          <span>Reservas</span>
        </div>

        <div className="divReservas">
          {docs.map((dato, index) => (
            <div className="divPedido">
              <div className="divNombre">
                <span className="spanNombre">
                  <span>Nombre</span>
                </span>
                <span className="spanNombre2" key={dato._id}>
                  <span>{dato.fullName}</span>
                </span>
              </div>
              <div className="divFecha">
                <span className="tituloFecha">
                  <span>Reserva</span>
                </span>
                <span className="fecha" key={dato._id}>
                  <span>{`${dato.reservationDate} hs`}</span>
                </span>
              </div>
              <div className="divDia">
                <span className="tituloDia">
                  <span>Día de la reserva</span>
                </span>
                <span className="spanDia" key={dato._id}>
                  <span>{dato.date}</span>
                </span>
              </div>
              <div className="divNumeroReservas">
                <span className="tituloNumReserva">
                  <span>N° de la reserva</span>
                </span>
                <span className="numReserva" key={dato._id}>
                  <span>{index}</span>
                </span>
              </div>
              <div className="divConfirmacion">
                <LikeButton obj={dato} />
              </div>
            </div>
          ))}
          <footer>
            {/* <button disabled={page === 1} onClick={handlePrevious}>
              <Link href={`/operator?page=${page}`}>Previous</Link>
            </button>
            <button disabled={page === pageCount} onClick={handleNext}>
              <Link href={`/operator?page=${page}`}> Next</Link>
            </button> */}
            <div>
              <span className="formularioText08 Regular·14·20">
                <span>Seleccionar Pagina</span>
              </span>
            </div>
            <Link href={`/operator?page=${page}`}>
              <select
                className="formularioInputDesktop13"
                value={page}
                onChange={(e) => {
                  setPage(e.target.value);
                }}
              >
                {Array(pageCount)
                  .fill(null)
                  .map((_, index) => {
                    return <option key={index}> {index + 1}</option>;
                  })}
              </select>
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
};

export function LikeButton({ obj }) {
  const [estado, setEstado] = useState(!obj.attendance);

  const handleClick = async () => {
    if (estado) {
      setEstado(false);
    } else {
      setEstado(true);
    }

    await axios
      .put(`http://localhost:5000/api/operator/reservations/turn/${obj._id}`, {
        attendance: estado,
      })

      .catch((err) => alert(err));
  };

  return (
    <div>
      <button onClick={handleClick} className="BtnStyle" type="submit">
        <span className="txtConfirmacion">
          {estado ? "Confirmacion pendiente" : "Confirmado el turno"}
        </span>
      </button>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  if (!{ query }) {
    const page = 1;
    const res = await fetch(`http://localhost:5000/api/turn?page=${page}`);
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } else {
    const { page } = query;
    const res = await fetch(`http://localhost:5000/api/turn?page=${page}`);
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  }
}

export default Index;
