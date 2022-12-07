import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../../comps/Navbar";
import TopBanner from "../../comps/TopBanner";
import { useRef } from "react";
import Link from "next/link";

const Profile = () => {
  const inputPassword = useRef();
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [dni, setDni] = useState(0);
  const auth = useAuth();
  const [id, setId] = useState(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password) {
      axios
        .put(`http://localhost:5000/api/user/${id}`, {
          password: password,
          telephone: phone,
        })
        .then((res) => res.data)
        .catch((err) => alert(err, "error"));
      Swal.fire({
        title: "Exito",
        text: "Se registró de manera exitosa",
        icon: "success",
        allowOutsideClick: false,
      }).then((res) => {
        if (res.isConfirmed) {
          router.push("/user");
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

      {/*Formulario*/}
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="newSucursal">Mis Datos</div>
          <div className="input2">
            <label>Nombre</label>
            <input type="text" value={fullname} disabled></input>
          </div>
          <div className="input2">
            <label>Mail</label>
            <input type="text" value={email} disabled></input>
          </div>
          <div className="fila">
            <div className="inputDesktop2">
              <label>DNI</label>
              <input type="number" value={dni} disabled></input>
            </div>
            <div className="inputDesktop3">
              <label>Teléfono</label>
              <input
                type="number"
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="Horario">
            <div>
              <label>Contraseña</label>
              <input
                type="password"
                ref={inputPassword}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <Link href="">
              <span
                className="inputEditarContraseña"
                onClick={() => inputPassword.current.focus()}
              >
                Editar Contraseña
              </span>
            </Link>
          </div>
          <button className="buttonProfileUser">Aceptar</button>
        </div>
      </form>
    </>
  );
};

export default Profile;
