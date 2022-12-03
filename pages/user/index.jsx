import React, { useEffect, useState, useContext, useDebugValue } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../../comps/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../sate/user";
import Router, { useRouter } from "next/router";
import Swal from "sweetalert2";
import Image from "next/image";
import { AuthContext } from "../../context/authContext";
const Index = () => {
  const dispatch = useDispatch();
  const authContext = useContext(AuthContext);
  const user = useSelector((state) => state.user);
  const [value, onChange] = useState(null);
  // const [value, onChange] = useState(new Date());
  const [sucursal, setSucursal] = useState(null);
  const [hours, setHours] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    console.log(authContext);
  }, [authContext]);

  // const contextoGlobal = authContext;
  function fn() {
    console.log(user);
    // console.log(sucursal);
    // console.log(value);
  }

  const handleLocalitation = (values) => {
    if (values !== "select") {
      setSucursal(values);
    } else {
      setSucursal(null);
    }
  };

  const handleHours = (hour) => {
    if (hour !== "select") {
      setHours(hour);
    } else {
      setHours(null);
    }
  };

  const handleFullName = (fullName) => {
    setFullName(fullName);
  };

  const handlePhone = (phone) => {
    setPhone(phone);
  };

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handleSubmit = () => {
    console.log("Sucursal: ", sucursal);
    console.log("Fecha: ", value);
    console.log("Horario: ", hours);
    console.log("Full Name: ", fullName);
    console.log("Telefono: ", phone);
    console.log("Email: ", email);
    Swal.fire({
      title: "Exito",
      text: "Reservaste tu turno satisfactoriamente!",
      icon: "success",
      allowOutsideClick: false,
    });
    Router.push("/user/bookingPanel");
  };

  // const hours = () => {
  //   let timeArray = [];
  //   let d = new Date();
  //   let h = d.getHours();
  //   let m = d.getMinutes();
  //   for (var i = 0; i < 24; i++) {
  //     for (m = (m + 15 - (m % 15)) % 60; m < 60; m = m + 15) {
  //       timeArray.push(h + ":" + m);
  //     }
  //     h = (h + 1) % 24;
  //     timeArray.push(h + ":" + "00");
  //   }
  // };

  const borderOk = sucursal === null ? "" : "border-ok";
  const letterOk = sucursal === null ? "" : "letter-ok";
  const borderProcess = sucursal === null ? "" : "border-process";
  const letterProcess = sucursal === null ? "" : "letter-process";
  const confirm =
    sucursal !== null &&
    hours !== null &&
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
        <Calendar onChange={onChange} value={value} />
        {/* {console.log(value)} */}
      </div>
      <button onClick={fn}>USER</button>
      {value === null ? (
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
                <option value="Villa-crespo">Villa Crespo</option>
                <option value="Devoto">Devoto</option>
                <option value="Palermo">Palermo</option>
                <option value="Recoleta">Recoleta</option>
                <option value="Belgrano">Belgrano</option>
                <option value="Floresta">Floresta</option>
                <option value="Centro">Micro Centro</option>
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
                <option value="Villa-crespo">Villa Crespo</option>
                <option value="Devoto">Devoto</option>
                <option value="Palermo">Palermo</option>
                <option value="Recoleta">Recoleta</option>
                <option value="Belgrano">Belgrano</option>
                <option value="Floresta">Floresta</option>
                <option value="Centro">Micro Centro</option>
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
                <option value="select">Selecciona un horario</option>
                <option value="ocho">08:00 hs</option>
                <option value="nueve">09:00 hs</option>
                <option value="diez">10:00 hs</option>
                <option value="once">11:00 hs</option>
                <option value="doce">12:00 hs</option>
                <option value="trece">13:00 hs</option>
                <option value="catorce">14:00 hs</option>
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
                  onChange={(e) => handleFullName(e.target.value)}
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
                  onChange={(e) => handlePhone(e.target.value)}
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
                  onChange={(e) => handleEmail(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          {/* <button
            classNameName={`clientefinal-paneldereservas-c-t-a-desktop1 ${confirm}`}
          >
            Confirmar reserva
          </button> */}

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

export default Index;
