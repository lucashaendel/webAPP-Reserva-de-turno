import React, { useEffect, useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../../comps/Navbar";
import Router from "next/router";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/authContext";
import { useAuth } from "../../context/authContext";
import axios from "axios";

const Index = ({ data }) => {
  const user = useAuth();
  const authContext = useContext(AuthContext);
  const [date, setDate] = useState(null);
  const [sucursal, setSucursal] = useState(null);
  const [hours, setHours] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    console.log(authContext);
    if (user.auth) {
      setFullName(user.auth.fullName);
      setEmail(user.auth.email);
    }
  }, [authContext]);

  const handleLocalitation = (values) => {
    if (values !== "select") {
      setSucursal(values);
    } else {
      setSucursal(null);
    }
  };

  const handleHours = (num) => {
    if (num !== "select") {
      setHours(num);
    } else {
      setHours(null);
    }
  };

  const handleSubmit = async () => {
    console.log("Sucursal: ", sucursal);
    console.log(
      "Fecha: ",
      date.toLocaleDateString("es-ar", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      })
    );
    try {
      const turn = {
        fullName,
        email,
        phone,
        date,
        user: user.auth.id,
        branch: sucursal,
      };
      /*     console.log("Horario: ", hours);
    console.log("Full Name: ", fullName);
    console.log("Telefono: ", phone);
    console.log("Email: ", email); */
      const result = await axios.post("http://localhost:5000/api/turn/", turn);
    } catch (error) {
      console.log(error);
    }

    Swal.fire({
      title: "Exito",
      text: "Reservaste tu turno satisfactoriamente!",
      icon: "success",
      allowOutsideClick: false,
    });
    Router.push("/user/bookingPanel");
  };

  const times = () => {
    let timeArray = [];
    let d = new Date("2022-11-26T07:45:00");
    let h = d.getHours();
    let m = d.getMinutes();
    for (let i = 0; i < 12; i++) {
      for (m = (m + 15 - (m % 15)) % 60; m < 60; m = m + 15) {
        timeArray.push(h + ":" + m);
      }
      h = (h + 1) % 24;
      timeArray.push(h + ":" + "00");
    }
    return timeArray;
  };
  console.log(data);

  const borderOk = sucursal === null ? "" : "border-ok";
  const letterOk = sucursal === null ? "" : "letter-ok";
  const borderProcess = sucursal === null ? "" : "border-process";
  const letterProcess = sucursal === null ? "" : "letter-process";
  const confirm =
    sucursal !== null &&
    hours !== null &&
    date !== null &&
    fullName !== null &&
    phone !== null &&
    email !== null
      ? "confirm"
      : "";

  const totalBorder = confirm === "confirm" ? "border-ok" : "";
  const totalLetter = confirm !== "confirm" ? "" : "letter-ok";

  return (
    <div>
      <Navbar />
      <div className="containerCalendar">
        <Calendar onChange={setDate} value={date} />
      </div>
      {date === null ? (
        <div className="reserva-reserva">
          <div className="reserva-content">
            <div className="reserva-head">
              <span className="reserva-text Semibold·18·24">
                <span>Reserva</span>
              </span>
              <span className="reserva-text02 Regular·14·20">
                <span>Seleccioná tu sucursal</span>
              </span>
            </div>
            <div className="reserva-stepper">
              <div className="reserva-step">
                <div className="reserva-step1">
                  <div className={`reserva-border ${borderOk}`}></div>
                  <div className={`reserva-number ${borderOk}`}>
                    <span className="reserva-text04 Semibold·14·20">1</span>
                  </div>
                  <div className={`reserva-border1 ${borderOk}`} />
                </div>
                <span className="reserva-text05 Regular·14·20">
                  <span className={`${letterOk}`}>Elegí tu sucursal</span>
                </span>
              </div>
              <div className="reserva-step4">
                <div className="reserva-step5">
                  <div className={`reserva-border4 ${borderProcess}`} />
                  <div className={`reserva-number2 ${borderProcess}`}>
                    <span className="reserva-text10 Semibold·14·20">2</span>
                  </div>
                  <div className={`reserva-border5 ${borderProcess}`} />
                </div>
                <span className={`reserva-text11 ${letterProcess}`}>
                  <span>Seleccioná el día</span>
                </span>
              </div>
              <div className="reserva-step4">
                <div className="reserva-step5">
                  <div className="reserva-border4" />
                  <div className="reserva-number2">
                    <span className="reserva-text10 Semibold·14·20">3</span>
                  </div>
                  <div className="reserva-border5" />
                </div>
                <span className="reserva-text11 Regular·14·20">
                  <span>Completá el formulario</span>
                </span>
              </div>
            </div>
            <div className="reserva-input-desktop2">
              <div className="reserva-txt">
                <span className="reserva-text13 Regular·14·20">
                  <span>Sucursal</span>
                </span>
              </div>
              <select
                className="reserva-input-desktop1"
                onChange={(e) => handleLocalitation(e.target.value)}
              >
                <option value="select">Selecciona la sucursal</option>
                {data?.map((dato, index) => (
                  <option key={index} value={dato._id}>
                    {dato.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="reserva-c-t-a-desktop1">Confirmar reserva</div>
        </div>
      ) : (
        <div className="reserva-reserva reserva-ok">
          <div className="reserva-content">
            <div className="reserva-head">
              <span className="reserva-text Semibold·18·24">
                <span>Reserva</span>
              </span>
              <span className="reserva-text02 Regular·14·20">
                <span>Seleccioná tu sucursal</span>
              </span>
            </div>
            <div className="reserva-stepper">
              <div className="reserva-step">
                <div className="reserva-step1">
                  <div className={`reserva-border ${borderOk}`} />
                  <div className={`reserva-number ${borderOk}`}>
                    <span className="reserva-text04 Semibold·14·20">1</span>
                  </div>
                  <div className={`reserva-border1 ${borderOk}`} />
                </div>
                <span className="reserva-text05 Regular·14·20">
                  <span className={`${letterOk}`}>Elegí tu sucursal</span>
                </span>
              </div>
              <div className="reserva-step4">
                <div className="reserva-step5">
                  <div className={`reserva-border4 ${borderOk}`} />
                  <div className={`reserva-number2 ${borderOk}`}>
                    <span className="reserva-text10 Semibold·14·20">2</span>
                  </div>
                  <div className={`reserva-border5 ${borderOk}`} />
                </div>
                <span className={`reserva-text11 ${letterOk}`}>
                  <span>Seleccioná el día</span>
                </span>
              </div>
              <div className="reserva-step4">
                <div className="reserva-step5">
                  <div className={`reserva-border4 ${borderProcess}`} />
                  <div className={`reserva-number2 ${borderProcess}`}>
                    <span className="reserva-text10 Semibold·14·20">3</span>
                  </div>
                  <div
                    className={`reserva-border5 ${borderProcess} ${totalBorder}`}
                  />
                </div>
                <span
                  className={`reserva-text11  ${letterProcess} ${totalLetter}`}
                >
                  <span>Completá el formulario</span>
                </span>
              </div>
            </div>
            <div className="reserva-input-desktop2">
              <div className="reserva-txt">
                <span className="reserva-text13 Regular·14·20">
                  <span>Sucursal</span>
                </span>
              </div>
              <select
                className="reserva-input-desktop1"
                onChange={(e) => handleLocalitation(e.target.value)}
              >
                <option value="select">Selecciona la sucursal</option>
                {data?.map((dato, index) => (
                  <option key={index}>{dato.name}</option>
                ))}
              </select>
            </div>
            <div className="reserva-input-desktop2 horario">
              <div className="reserva-txt">
                <span className="reserva-text13 Regular·14·20">
                  <span>Horario</span>
                </span>
              </div>
              <select
                className="reserva-input-desktop1"
                onChange={(e) => handleHours(e.target.value)}
              >
                <option value="select">Seleccionar horario</option>
                {times().map((num, index) => (
                  <option key={index} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="information">
              <div className="reserva-input-desktop2 data">
                <div className="reserva-txt">
                  <span className="reserva-text13 Regular·14·20">
                    <span>Nombre y apellido</span>
                  </span>
                </div>
                <input
                  type="text"
                  required
                  className="reserva-input-desktop1 datos"
                  value={user.auth ? user.auth.fullName : ""}
                  disabled
                ></input>
              </div>
              <div className="reserva-input-desktop2 data ">
                <div className="reserva-txt">
                  <span className="reserva-text13 Regular·14·20">
                    <span>telefono</span>
                  </span>
                </div>
                <input
                  type="text"
                  required
                  className="reserva-input-desktop1 datos"
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>

              <div className="reserva-input-desktop2 horario">
                <div className="reserva-txt">
                  <span className="reserva-text13 Regular·14·20">
                    <span>Email</span>
                  </span>
                </div>
                <input
                  type="email"
                  required
                  className="reserva-input-desktop1"
                  value={user.auth ? user.auth.email : ""}
                  disabled
                ></input>
              </div>
            </div>
          </div>
          <button
            className={`clientefinal-paneldereservas-c-t-a-desktop1 ${confirm}`}
            onClick={handleSubmit}
          >
            Confirmar reserva
          </button>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:5000/api/branch");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default Index;
