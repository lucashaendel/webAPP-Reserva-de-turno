import Link from "next/link";
import TopBanner from "../comps/TopBanner";
import { useState } from "react";
import Pwd from "../PWDrequisite";
import axios from "axios";
import SvgEyesOne from "../comps/SvgEyesOne";
import SvgEyesTwo from "../comps/SvgEyesTwo";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [dni, setDni] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [pwdEyes, setPwdEyes] = useState(false);
  const [pwdEyesTwo, setPwdEyesTwo] = useState(false);

  const [pwdRequisite, setPwdRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    letterToLowerCase: false,
    empty: true,
  });

  const router = useRouter();

  const handleChangeName = (e) => {
    setFullName(e.target.value);
  };
  const handleChangeDni = (e) => {
    setDni(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleOnFocus = (e) => {
    setPwdRequisite(true);
  };

  const handleOnBlur = () => {
    setPwdRequisite(false);
  };

  const handleOnKeyUp = (e) => {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const letterToLowerCase = /[a-z]/.test(value);
    const empty = !value;

    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      letterToLowerCase,
      empty,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      checks.capsLetterCheck &&
      checks.numberCheck &&
      checks.pwdLengthCheck &&
      checks.letterToLowerCase &&
      password === repeatPassword
    ) {
      axios
        .post("http://localhost:5000/api/user/register", {
          fullName,
          dni,
          email,
          password,
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
          router.push("/");
        }
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Error de validacion o contraseña",
        icon: "error",
        allowOutsideClick: false,
      });
    }
  };

  return (
    <>
      <TopBanner />
      <div className="divRegistar">
        <div className="loginMailHead">
          <div className="CTADesktop3">
            <Link href="/">
              <svg
                className="loginVector"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5875 16.4209C10.912 16.0964 10.912 15.5703 10.5875 15.2459L6.17503 10.8334H16.6667C17.1269 10.8334 17.5 10.4603 17.5 10C17.5 9.53979 17.1269 9.1667 16.6667 9.1667H6.17503L10.5875 4.7542C10.912 4.42973 10.912 3.90367 10.5875 3.5792C10.2631 3.25473 9.737 3.25473 9.41253 3.5792L3.69881 9.29293C3.30828 9.68345 3.30828 10.3166 3.69881 10.7071L9.41253 16.4209C9.737 16.7453 10.2631 16.7453 10.5875 16.4209Z"
                  fill="#A442F1"
                />
              </svg>
            </Link>
            <Link href="/">
              <span className="backText Semibold·14·16">Atrás</span>{" "}
            </Link>
          </div>
          <div className="crearCuenta">
            <h2> Crear cuenta</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="containerInputs">
            <div className="inputFilaOne">
              <div className="InputDesktop2">
                <div className="loginMailTxt">
                  <span className="loginMailText04 Regular·14·20">
                    <span>Nombre y Apellido</span>
                  </span>
                </div>
                <input
                  type="text"
                  className="login-mail-input-desktop1"
                  onChange={handleChangeName}
                  value={fullName}
                  required
                />
              </div>
              <div>
                <div>
                  <span className="login-mail-text06 Regular·14·20">
                    <span>DNI</span>
                  </span>
                </div>
                <input
                  type="number"
                  className="loginMailInputDesktop11"
                  onChange={handleChangeDni}
                  value={dni}
                  required
                />
              </div>
            </div>
            <div className="loginMailInputDesktop22">
              <div>
                <span className="login-mail-text08 Regular·14·20">
                  <span>Mail</span>
                </span>
              </div>
              <input
                type="email"
                className="loginMailInputDesktop12"
                onChange={handleChangeEmail}
                value={email}
                required
              />
            </div>
            <div className="loginMailFila1">
              <div className="loginMailInputDesktop23">
                <div>
                  <span className="loginMailText10 Regular·14·20">
                    <span>Contraseña</span>
                  </span>
                </div>
                <input
                  className="login-mail-input-desktop1"
                  type={pwdEyes ? "text" : "password"}
                  onChange={handleChangePassword}
                  value={password}
                  required
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                  onKeyUp={handleOnKeyUp}
                />
                <div className="svgEyes" onClick={() => setPwdEyes(!pwdEyes)}>
                  {!pwdEyes ? <SvgEyesOne /> : <SvgEyesTwo />}{" "}
                </div>
                <div>
                  <span className="login-mail-text12 Regular·14·20"></span>
                  <div className="loginMailUserInterface1"></div>
                </div>
              </div>
              <div className="loginMailInputDesktop24">
                <div>
                  <span className="loginMailText13 Regular·14·20">
                    <span>Repetir Contraseña</span>
                  </span>
                </div>
                <input
                  type={pwdEyesTwo ? "text" : "password"}
                  className="pass"
                  onChange={handleRepeatPassword}
                  value={repeatPassword}
                  required
                />
                <div
                  className="svgEyesTwo"
                  onClick={() => setPwdEyesTwo(!pwdEyesTwo)}
                >
                  {!pwdEyesTwo ? <SvgEyesOne /> : <SvgEyesTwo />}
                  <span className="login-mail-text15 Regular·14·20"></span>
                  <div className="loginMailUserInterface2"></div>
                </div>
              </div>
            </div>
            <div className="loginMailAdvertencia">
              {
                <Pwd
                  neutral={checks.empty ? "gris" : ""}
                  capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
                  numberFlag={checks.numberCheck ? "valid" : "invalid"}
                  pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
                  specialCharFlag={
                    checks.letterToLowerCase ? "valid" : "invalid"
                  }
                />
              }
            </div>
          </div>
          <button className="loginMailCtaDesktop1" type="submit">
            <span className="loginMailText34 Semibold·16·20">Registrarme</span>
          </button>
        </form>
        <div className="loginMailCtaDesktop2">
          <span className="loginMailText36 Semibold·16·20">
            <Link href="/">
              <span className="inSesion">¿Ya tenés cuenta? Iniciá sesión</span>{" "}
            </Link>
          </span>
        </div>
      </div>
      <div></div>
    </>
  );
};
export default Register;
