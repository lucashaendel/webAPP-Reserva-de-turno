import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../../comps/Navbar";
import TopBanner from "../../comps/TopBanner";

//creacion de nueva sucursal

const newBranch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState(null);
  const [maxCapacity, setMaxCapacity] = useState(Number);
  const [start, setStart] = useState(Number);
  const [end, setEnd] = useState(Number);

  const router = useRouter();
  const handleChangeCapacity = (e) => {
    setMaxCapacity(e.target.value);
  };

  let arr = [];
  const nums = () => {
    for (let i = 1; i <= 20; i++) {
      arr.push(i * 5);
    }
    return arr;
  };
  const handleChangeStart = (e) => {
    setStart(e.target.value);
  };

  const handleChangeEnd = (e) => {
    setEnd(e.target.value);
  };

  const hours = () => {
    let timeArray = [];
    let d = new Date("2022-11-26T00:00:00");
    let h = d.getHours();
    let m = d.getMinutes();
    for (let i = 0; i < 24; i++) {
      for (m = (m + 0 - (m % 0)) % 60; m < 60; m = m + 0) {
        timeArray.push(h + ":" + m);
      }
      h = (h + 1) % 24;
      timeArray.push(h + ":" + "00");
    }
    return timeArray;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (maxCapacity > 0) {
      axios
        .post("http://localhost:5000/api/branch", {
          name,
          email,
          telephone,
          maxCapacity,
          start,
          end,
        })
        .then((res) => res.data)
        .catch((err) => alert(err, "error"));
      Swal.fire({
        title: "Exito",
        text: "Se creo sucursal con exito",
        icon: "success",
        allowOutsideClick: false,
      }).then((res) => {
        if (res.isConfirmed) {
          router.push("/admin");
        }
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pudo crear la sucursal: Verificar datos",
        icon: "error",
        allowOutsideClick: false,
      });
    }
  };

  return (
    <>
      <div className="topBanner">
        <TopBanner />
      </div>
      <div className="topNavbar">
        <Navbar />
      </div>
      <div className="branchContainer">
        <form onSubmit={handleSubmit}>
          <div className="form">
            <span className="newBranch">
              <span>Crear una nueva sucursal</span>
            </span>
            <div> </div>
            <div className="administrador-creacindesucursales-input-desktop2">
              <div className="administrador-creacindesucursales-txt">
                <span className="administrador-creacindesucursales-text02 Regular·14·20">
                  <span>Nombre</span>
                </span>
              </div>
              <input
                type="text"
                placeholder
                className="administrador-creacindesucursales-input-desktop1"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="administrador-creacindesucursales-input-desktop21">
              <div className="administrador-creacindesucursales-txt1">
                <span className="administrador-creacindesucursales-text04 Regular·14·20">
                  <span>Correo electrónico</span>
                </span>
              </div>
              <input
                type="email"
                placeholder
                className="administrador-creacindesucursales-input-desktop11"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="administrador-creacindesucursales-fila">
              <div className="administrador-creacindesucursales-input-desktop22">
                <div className="administrador-creacindesucursales-txt2">
                  <span className="administrador-creacindesucursales-text06 Regular·14·20">
                    <span>Teléfono</span>
                  </span>
                </div>
                <input
                  type="number"
                  placeholder
                  className="administrador-creacindesucursales-input-desktop12"
                  onChange={(e) => setTelephone(e.target.value)}
                  value={telephone}
                  required
                />
              </div>
              <div className="administrador-creacindesucursales-input-desktop3">
                <div className="administrador-creacindesucursales-txt3">
                  <span className="administrador-creacindesucursales-text08 Regular·14·20">
                    <span>Capacidad máxima</span>
                  </span>
                </div>
                <select
                  className="administrador-creacindesucursales-input-desktop13"
                  onChange={handleChangeCapacity}
                >
                  <option value={0}>Seleccionar capacidad maxima</option>{" "}
                  {nums().map((num) => (
                    <option value={num}>{num}</option>
                  ))}
                </select>
                <span className="administrador-creacindesucursales-text10 Regular·14·20"></span>
                <div className="administrador-creacindesucursales-user-interface"></div>
              </div>
            </div>
            <div className="administrador-creacindesucursales-horario">
              <div className="administrador-creacindesucursales-input-desktop23">
                <div className="administrador-creacindesucursales-txt4">
                  <span className="administrador-creacindesucursales-text11 Regular·14·20">
                    <span>Horario de Inicio</span>
                  </span>
                </div>
                <select
                  className="administrador-creacindesucursales-input-desktop14"
                  onChange={handleChangeStart}
                >
                  <option value="select">Seleccionar horario</option>
                  {hours().map((num) => (
                    <option value={num}>{num}</option>
                  ))}{" "}
                </select>
                <span className="administrador-creacindesucursales-text10 Regular·14·20"></span>
                <div className="administrador-creacindesucursales-user-interface"></div>
              </div>
              <div className="administrador-creacindesucursales-input-desktop31">
                <div className="administrador-creacindesucursales-txt5">
                  <span className="administrador-creacindesucursales-text15 Regular·14·20">
                    <span>Horario de Cierre</span>
                  </span>
                </div>
                <select
                  className="administrador-creacindesucursales-input-desktop15"
                  onChange={handleChangeEnd}
                >
                  <option value="select">Seleccionar horario</option>
                  {hours().map((num) => (
                    <option value={num}>{num}</option>
                  ))}
                </select>
                <span className="administrador-creacindesucursales-text10 Regular·14·20"></span>
                <div className="administrador-creacindesucursales-user-interface"></div>
              </div>
            </div>
            <button type="submit" className="buttonSend">
              <span className="buttonSendText">Enviar</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default newBranch;
