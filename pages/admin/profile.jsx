import Navbar from "../../comps/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import TopBanner from "../../comps/TopBanner";
import { useAuth } from "../../context/authContext";
import { useRouter } from "next/router";
import { useRef } from "react";
import Link from "next/link";



const Profile = () => {
  const inputPassword = useRef();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState(0);
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const [id, setId] = useState(null);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password) {
      axios
        .put(`http://localhost:5000/api/admin/myProfile/${id}/modifyPassword`, {
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

      <div className="perfil-administrador-perfil-administrador">
        <form onSubmit={handleSubmit}>
          <div className="perfil-administrador-formulario">
            <span className="perfil-administrador-text SemiBold·20·24">
              <span>Mis datos</span>
            </span>
            <div className="perfil-administrador-input-desktop2">
              <div className="perfil-administrador-txt">
                <span className="perfil-administrador-text02 Regular·14·20">
                  <span>Nombre</span>
                </span>
              </div>
              <input
                type="text"
                placeholder
                className="perfil-administrador-input-desktop1"
                value={fullName}
                disabled
              />
            </div>
            <div className="perfil-administrador-input-desktop21">
              <div className="perfil-administrador-txt1">
                <span className="perfil-administrador-text04 Regular·14·20">
                  <span>Correo electrónico</span>
                </span>
              </div>
              <input
                type="email"
                placeholder
                className="perfil-administrador-input-desktop11"
                value={email}
                disabled
              />
            </div>
            <div className="perfil-administrador-input-desktop21">
              <div className="perfil-administrador-txt1">
                <span className="perfil-administrador-text04 Regular·14·20">
                  <span>DNI</span>
                </span>
              </div>
              <input
                type="number"
                placeholder
                className="perfil-administrador-input-desktop11"
                value={dni}
                disabled
              />
            </div>
            <div className="perfil-administrador-horario">
              <div className="perfil-administrador-input-desktop23">
                <div className="perfil-administrador-txt3">
                  <span className="perfil-administrador-text08 Regular·14·20">
                    <span>Contraseña</span>
                  </span>
                </div>
                <input
                  type="password"
                  placeholder
                  className="perfil-administrador-input-desktop13"
                  onChange={(e) => setPassword(e.target.value)}
                  ref={inputPassword}
                />
              </div>

              <Link href="">
                <span
                  className="perfil-administrador-input-desktop3 editpassword"
                  onClick={() => inputPassword.current.focus()}
                >
                  Editar contraseña
                </span>{" "}
              </Link>
            </div>
            <button className="perfil-administrador-c-t-a-desktop1">
              <span className="perfil-administrador-text10 Semibold·16·20">
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
