import React from "react";
import TopBanner from "../../comps/TopBanner";
("../../comps/TopBanner");
import Navbar from "../../comps/Navbar";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const newOperator = () => {
  const [fullName, setFullName] = useState("");
  const [dni, setDni] = useState(null);
  const [email, setEmail] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const router = useRouter();

  const handleChangeSucursal = (e) => {
    setSucursal(e.target.value);
  };

  let arrSucursales = [
    "Villa crespo",
    "Devoto",
    "Floresta",
    "Palermo",
    "Microcentro",
    "Recoleta",
    "Belgrano",
  ];
  let arrSuc = [];
  const sucs = () => {
    for (let i = 0; i < arrSucursales.length; i++) {
      arrSuc.push(arrSucursales[i]);
    }
    return arrSuc;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password == repeatPassword) {
      axios
        .post("#", { fullName, dni, email, sucursal, password })

        .then((res) => console.log(dni))
        .catch((err) => alert(err, "error"));
      Swal.fire({
        title: "Exito",
        text: "Se creo operador con exito",
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
        text: "No se pudo crear el operador: Verificar datos",
        icon: "error",
        allowOutsideClick: false,
      });
    }
  };

  return (
    <div>
      <TopBanner />
      <div>
        <Navbar />
        <form onSubmit={handleSubmit}>
          <div className="formularioFormulario">
            <span className="formularioText SemiBold·20·24">
              <span>Creación de operadores</span>
            </span>

            <div className="formularioInputDesktop2">
              <div>
                <span className="formularioText02 Regular·14·20">
                  <span>Nombre </span>
                </span>
              </div>

              <input
                type="text"
                className="formularioInputDesktop1"
                required
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
            </div>
            <div className="formularioInputDesktop21">
              <div>
                <span className="formularioText04 Regular·14·20">
                  <span>Correo electrónico</span>
                </span>
              </div>
              <input
                type="email"
                className="formularioInputDesktop11"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="formularioFila">
              <div>
                <div>
                  <span className="formularioText06 Regular·14·20">
                    <span>DNI</span>
                  </span>
                </div>
                <input
                  type="number"
                  className="formularioInputDesktop12"
                  required
                  onChange={(e) => setDni(e.target.value)}
                  value={dni}
                />
              </div>
              <div>
                <div>
                  <span className="formularioText08 Regular·14·20">
                    <span>Sucursal</span>
                  </span>
                </div>
                <select
                  value={sucursal}
                  className="formularioInputDesktop13"
                  onChange={handleChangeSucursal}
                  required
                >
                  {" "}
                  <option className="optionText">Seleccionar sucursal</option>
                  {sucs().map((suc) => (
                    <option value={suc}>{suc}</option>
                  ))}
                </select>
                <span className="formularioText10 Regular·14·20"></span>
                <div className="administrador-cre"> </div>
              </div>
            </div>
            <div className="formularioHorario">
              <div>
                <div>
                  <span className="formularioText12 Regular·14·20">
                    <span>Contraseña </span>
                  </span>
                </div>
                <input
                  type="password"
                  placeholder
                  className="formularioInputDesktop14"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div>
                <div>
                  <span className="formularioText14 Regular·14·20">
                    <span>Repetir contraseña </span>
                  </span>
                </div>
                <input
                  type="password"
                  className="formularioInputDesktop15"
                  required
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  value={repeatPassword}
                />
              </div>
            </div>
            <button type="submit" className="formularioCtaDesktop1 ">
              <span className="formularioText16 Semibold·16·20 send">
                Enviar
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default newOperator;
