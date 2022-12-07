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
import { useAuth } from "../context/authContext";

const Login = () => {
  const router = useRouter();
  const authContext = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [pwdEyes, setPwdEyes] = useState(false);
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.user);

  useEffect(() => {
    console.log(authContext);
    if (authContext.auth) {
      const { auth } = authContext;
      const role = auth?.user?.role;
      if (role) {
        Swal.fire({
          title: "Exito",
          text: "Ingresaste correctamente!",
          icon: "success",
          timer: 1000,
          allowOutsideClick: false,
        });
        router.push(`/${role}`);
      }
    }
  }, [authContext]);

  return (
    !!!authContext?.isFetching && (
      <div>
        <TopBanner />

        <div className="container-login">
          <div className="head-login">
            <h2>Iniciar sesión</h2>
          </div>
          <form
            className="inputs-login"
            onSubmit={() => authContext.logIn({ email, password })}
          >
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
            <button className="btn-register">
              ¿No tenés cuenta? Registrate
            </button>
          </Link>
        </div>
      </div>
    )
  );
};

export default Login;
