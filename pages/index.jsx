import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../comps/Navbar";
import TopBanner from "../comps/TopBanner";
import SvgEyesOne from "../comps/SvgEyesOne";
import SvgEyesTwo from "../comps/SvgEyesTwo";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { userLogin } from "../sate/user";
import { useSelector } from "react-redux";

const login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [pwdEyes, setPwdEyes] = useState(false);
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/api/user/login",
        { email, password },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        dispatch(userLogin(res.data));
      })
      .then(() => {
        Swal.fire({
          title: "Exito",
          text: "Iniciaste sesión!",
          icon: "success",
          allowOutsideClick: false,
        });
        router.push("/user");
      })
      .catch(() => {
        Swal.fire({
          title: "Error",
          text: "Ingresaste algun dato NO valido",
          icon: "warning",
          allowOutsideClick: false,
        });
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/me", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        dispatch(userLogin(res.data));
        if (usuario) router.push("/user");
      })
      .catch(() => console.error("Falta loguearte"));
  }, []);

  return (
    <div>
      <TopBanner />
      {/* <Navbar /> */}

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
            />
          </div>

          <div className="input-login">
            <label>Contraseña</label>
            <input
              type={pwdEyes ? "text" : "password"}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="svglogin" onClick={() => setPwdEyes(!pwdEyes)}>
              {!pwdEyes ? <SvgEyesOne /> : <SvgEyesTwo />}
            </div>
          </div>

          <Link href="#" className="forgot-pw">
            ¿olvidaste tu contraseña?
          </Link>
          <button type="submit" className="btn-login">
            ingresar
          </button>
        </form>
        <Link href="/register">
          <button className="btn-register">¿No tenés cuenta? Registrate</button>
        </Link>
      </div>
    </div>
  );
};

export default login;
