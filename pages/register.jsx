import React from "react";
import Link from "next/link";
import TopBanner from "../comps/TopBanner"

const register = () => { 
  return (
    <> <TopBanner/>
    <div className="divRegistar">
      <div className="loginMailHead">
        <div className="CTADesktop3">
          <Link href="/">  <svg
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
          </svg></Link><Link href="/">
          <span className="backText Semibold·14·16">
            Atrás
          </span> </Link>
        </div> <div className="crearCuenta"> <h2 > Crear cuenta</h2> 
          </div>
      </div>
      <div className="containerInputs">
        <div className="inputFilaOne">
          <div className="InputDesktop2">
            <div className="loginMailTxt">
              <span className="loginMailText04 Regular·14·20">
                <span>Nombre y Apellido</span>
              </span>
            </div>
            <input type="text" placeholder className="login-mail-input-desktop1" />
          </div>
          <div>
            <div>
              <span className="login-mail-text06 Regular·14·20">
                <span>DNI</span>
              </span>
            </div>
            <input type="text" placeholder className="loginMailInputDesktop11" />
          </div>
        </div>
        <div className="loginMailInputDesktop22">
          <div >
            <span cclassName="login-mail-text08 Regular·14·20">
              <span>Mail</span>
            </span>
          </div>     
          <input type="text" placeholder className="loginMailInputDesktop12" />
        </div>
        <div className="loginMailFila1">
          <div className="loginMailInputDesktop23"> 
            <div>
              <span className="loginMailText10 Regular·14·20">
                <span>Contraseña</span> 
              </span>
            </div>
            <input type="password"  className="login-mail-input-desktop1"/>
            <div>  
              <span className="login-mail-text12 Regular·14·20"></span>
              <div className="loginMailUserInterface1">                 
            </div>
            </div>
          </div>
          <div className="loginMailInputDesktop24">
            <div >
              <span className="loginMailText13 Regular·14·20">
                <span>Repetir Contraseña</span>
              </span>
            </div>
            <input type="password"  className="pass"/>
            <div >
              <span className="login-mail-text15 Regular·14·20"></span>
              <div className="loginMailUserInterface2">
              </div>
            </div>
          </div>
        </div>
        <div className="loginMailAdvertencia">
          <div >
            <span className="loginMailText16">
              <span>La contraseña debe contener:</span>
            </span>
          </div>
          <div className="loginMailContent">
            <div className="loginMailFila2">
              <div className="loginMailFila3">
                <span className="loginMailText18 BodyRegular·12·16">
                  <span>ABC</span>
                </span>
                <span className="loginMailText20 BodyRegular·12·16">
                  <span>Una letra mayúscula</span>
                </span>
              </div>
              <div className="loginMailFila4">
                <span className="loginMailText22 BodyRegular·12·16">
                  <span>abc</span>
                </span>
                <span className="loginMailText24 BodyRegular·12·16">
                  <span>Una letra minúscula</span>
                </span>
              </div>
            </div>
            <div className="loginMailFila5">
              <div className="loginMailFila6">
                <span className="loginMailText26 BodyRegular·12·16">
                  <span>123</span>
                </span>
                <span className="loginMailText28 BodyRegular·12·16">
                  <span>Un número</span>
                </span>
              </div>
              <div className="loginMailFila7">
                <span className="loginMailText30 BodyRegular·12·16">
                  <span>***</span>
                </span>
                <span className="loginMailText32 BodyRegular·12·16">
                  <span>Mínimo 8 caracteres</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="loginMailCtaDesktop1">
        <span className="loginMailText34 Semibold·16·20">
          Registrarme
        </span>
      </button>
      <div className="loginMailCtaDesktop2">
        <span className="loginMailText36 Semibold·16·20">
          <Link href="/"><span>¿Ya tenés cuenta? Iniciá sesión</span> </Link>
        </span>
      </div>
    </div>
    </>
  );
};
export default register;



