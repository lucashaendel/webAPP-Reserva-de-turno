import Navbar from "../../comps/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/authContext";

const Profile = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState(null);
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const [id, setId] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/admin/myProfile/${id}/modifyPassword`, {
        // fullname,
        // email,
        // dni,
        password,
      })
      .then((res) => res.data)
      .catch((err) => alert(err, "error"));
  };
  useEffect(() => {
    const ID = auth?.auth?.id;
    if (ID) {
      setId(ID);
    }
  }, [auth]);

  return (
    <div className="perfil-administrador-perfil-administrador">
      <Navbar />
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
              onChange={(e) => setFullName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setDni(e.target.value)}
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
              />
            </div>
            <span className="perfil-administrador-input-desktop3 editpassword">
              Editar contraseña
            </span>
          </div>
          <button className="perfil-administrador-c-t-a-desktop1">
            <span className="perfil-administrador-text10 Semibold·16·20">
              <span>Aceptar</span>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
