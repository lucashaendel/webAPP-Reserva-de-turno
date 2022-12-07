import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import TopBanner from "../../comps/TopBanner";
import { useAuth } from "../../context/authContext";
import Swal from "sweetalert2";
import Link from "next/link";
import Navbar from "../../comps/Navbar";
import { useRouter } from "next/router";

const Profile = () => {
  const inputPassword = useRef();
  const [fullName, setFullName] = useState("");
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [dni, setDni] = useState(null);
  const [branch, setBranch] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();
  const [id, setId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password) {
      axios
        .put(`http://localhost:5000/api/operator/myProfile/${id} `, {
          password: password,
        })
        .then((res) => res.data)
        .catch((err) => alert(err, "error"));
      Swal.fire({
        title: "Exito",
        text: "Se modifico su contraseña exitosamente",
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
        text: "Error, rellene todos los datos",
        icon: "error",
        allowOutsideClick: false,
      });
    }
  };

  useEffect(() => {
    const ID = auth?.auth?.id;
    const name = auth?.auth?.fullName;
    const mail = auth?.auth?.email;
    const documento = auth?.auth?.dni;
    if (ID) {
      setId(ID);
    }
    if (name) {
      setFullName(name);
    }
    if (mail) {
      setEmail(mail);
    }
    if (documento) {
      setDni(documento);
    }
  }, [auth]);

  return (
    <>
      <TopBanner />
      <Navbar />
      <div>
        <form onSubmit={handleSubmit}>
          <div class="divFormulario">
            <span class="textHeader">
              <span>Mis datos</span>
            </span>
            <div class="divInputDesktop2">
              <div class="divFormulario-txt">
                <span class="textName">
                  <span>Nombre</span>
                </span>
              </div>
              <input
                type="text"
                placeholder
                class="divInput-Desktop1"
                value={fullName}
                disabled
              />
            </div>
            <div class="divInputDesktop3">
              <div class="divFormulario-txt">
                <span class="textName">
                  <span>Correo electrónico</span>
                </span>
              </div>
              <input
                type="email"
                placeholder
                class="divInput-Desktop2"
                value={email}
                disabled
              />
            </div>
            <div class="divFila">
              <div class="divFilaInput">
                <div class="txtFila">
                  <span class="txtDNI">
                    <span>DNI</span>
                  </span>
                </div>
                <input
                  type="number"
                  placeholder
                  class="filaInput-Desktop1"
                  value={dni}
                  disabled
                />
              </div>
              <div class="divFilaInput">
                <div class="txtFila">
                  <span class="txtDNI">
                    <span>Sucursal</span>
                  </span>
                </div>
                <div>
                  <select class=" filaInput-Desktop2" disabled>
                    <option>--</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="divHorario">
              <div class="divInputDesktop4">
                <div class="txtHorario">
                  <span class="txtContraseña">
                    <span>Contraseña</span>
                  </span>
                </div>
                <input
                  type="password"
                  placeholder
                  class="horarioInputinput-desktop1"
                  onChange={(e) => setPassword(e.target.value)}
                  ref={inputPassword}
                  required
                />
              </div>
              <div class="horarioInput-desktop2">
                <Link href="">
                  <span className="txtHorario2">
                    <span onClick={() => inputPassword.current.focus()}>
                      Editar contraseña
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <button class="HorarioButton-desktop1">
              <span class="textHorarioButton">
                <span>Aceptar</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
