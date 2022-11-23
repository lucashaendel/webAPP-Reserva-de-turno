import React from "react";
import Link from "next/link";

const register = () => {
 
  return (
    <div className="divRegistar">
      <div className="login-mail-head">
        <div className="CTA-Desktop-3">
          <Link href="#">  <svg
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
          </svg></Link>
          <span className="back-text Semibold·14·16">
            <span>Atrás</span>
          </span>
        </div>
        <span className="title">
          <span>Crear cuenta</span>
        </span>
      </div>
      <div className="container-inputs">
        <div className="input-fila-one">
          <div className="Input-Desktop-2">
            <div className="login-mail-txt">
              <span className="login-mail-text04 Regular·14·20">
                <span>Nombre y Apellido</span>
              </span>
            </div>
            <input type="text" placeholder className="login-mail-input-desktop1" />
          </div>
          <div className="login-mail-input-desktop21">
            <div className="login-mail-txt1">
              <span className="login-mail-text06 Regular·14·20">
                <span>DNI</span>
              </span>
            </div>
            <input type="text" placeholder className="login-mail-input-desktop11" />
          </div>
        </div>
        <div className="login-mail-input-desktop22">
    
          <div className="login-mail-txt2">

            <span cclassName="login-mail-text08 Regular·14·20">
              <span>Mail</span>
            </span>
          </div>     
          <input type="text" placeholder className="login-mail-input-desktop12" />
        </div>
        <div className="login-mail-fila1">

          <div className="login-mail-input-desktop23">
           
            <div className="login-mail-txt3">

              <span className="login-mail-text10 Regular·14·20">
                <span>Contraseña</span> 
              </span>
            </div>
            <input type="password"  className="login-mail-input-desktop1"/>
            
            <div className="login-mail-input-desktop13">        
              <span className="login-mail-text12 Regular·14·20"></span>
              <div className="login-mail-user-interface1">
       


              </div>
            </div>
          </div>

          <div className="login-mail-input-desktop24">
            <div className="login-mail-txt4">
              <span className="login-mail-text13 Regular·14·20">
                <span>Repetir Contraseña</span>
              </span>

            </div>
          
            <input type="password"  className="pass"/>

            <div className="login-mail-input-desktop14">
              <span className="login-mail-text15 Regular·14·20"></span>
              <div className="login-mail-user-interface2">
  



              </div>
            </div>
          </div>
        </div>


        <div className="login-mail-advertencia">
          <div className="login-mail-head1">
            <span className="login-mail-text16">
              <span>La contraseña debe contener:</span>
            </span>
           
          </div>



          <div className="login-mail-content">
            <div className="login-mail-fila2">
              <div className="login-mail-fila3">
                <span className="login-mail-text18 BodyRegular·12·16">
                  <span>ABC</span>
                </span>
                <span className="login-mail-text20 BodyRegular·12·16">
                  <span>Una letra mayúscula</span>
                </span>
              </div>
              <div className="login-mail-fila4">
                <span className="login-mail-text22 BodyRegular·12·16">
                  <span>abc</span>
                </span>
                <span className="login-mail-text24 BodyRegular·12·16">
                  <span>Una letra minúscula</span>
                </span>
              </div>
            </div>
            <div className="login-mail-fila5">
              <div className="login-mail-fila6">
                <span className="login-mail-text26 BodyRegular·12·16">
                  <span>123</span>
                </span>
                <span className="login-mail-text28 BodyRegular·12·16">
                  <span>Un número</span>
                </span>
              </div>
              <div className="login-mail-fila7">
                <span className="login-mail-text30 BodyRegular·12·16">
                  <span>***</span>
                </span>
                <span className="login-mail-text32 BodyRegular·12·16">
                  <span>Mínimo 8 caracteres</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-mail-c-t-a-desktop1">
        <span className="login-mail-text34 Semibold·16·20">
          Registrarme
        </span>
      </div>
      
      <div className="login-mail-c-t-a-desktop2">
        <span className="login-mail-text36 Semibold·16·20">
          <Link href="#"><span>¿Ya tenés cuenta? Iniciá sesión</span> </Link>
        </span>
      </div>
    </div>
  );
};






export default register;



