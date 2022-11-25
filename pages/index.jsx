
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../comps/Navbar";
import Link from "next/link";
import authContext from "../context/authContext";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  // const { auth, handleAuth } = useContext(authContext);
  // const { userActive } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/user/login", { email, password })
      .then((res) => localStorage.setItem("user", JSON.stringify(res.data)))
      .then(() => {
        alert("Iniciaste sesion con exito!");
        router.push("/user");
      })
      .catch((error) => alert("Ups! Error en los datos ingresados"));
  };
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("user"));
    // console.log(usuario);
    setUser(usuario);

    if (usuario) router.push("/user");
  }, []);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   localStorage.clear();
  //   console.log("Cookie borrada");
  // };
  return (
    
    <div>
      {/* {user?.name ? <h1>logueado</h1> : <h1>Deslogueado</h1>} */}
      <div className="container-login">
        <div className="head-login">
          <h2>Iniciar sesión</h2>
        </div>
        <form className="inputs-login" onSubmit={handleSubmit}>
          <div className="input-login">
            <label>Correo</label>
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="input-login">
            <label>Contraseña</label>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

           <Link href="#" className="forgot-pw">
            ¿olvidaste tu contraseña?
          </Link>
          <button className="btn-login">ingresar</button>
        </form>
        <Link href="/register">
          <button className="btn-register">¿No tenés cuenta? Registrate</button>
        </Link>
      </div>
    </div>
  );
};

export default login;
