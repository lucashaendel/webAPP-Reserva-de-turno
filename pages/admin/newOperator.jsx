import React from "react";
import TopBanner from "../../comps/TopBanner";"../../comps/TopBanner"
import Navbar from "../../comps/Navbar"

const newOperator = () => {
  return <div>
     <TopBanner/>
          <div> 
    <Navbar/>
            <div className="formularioFormulario">
             <span className="formularioText SemiBold·20·24">
              <span>Creación de operadores</span>
             </span>
              <div className="formularioInputDesktop2">
               <div>
                <span className="formularioText02 Regular·14·20">
                 <span>Nombre</span>
               </span>
               </div>
                <input type="text" placeholder className="formularioInputDesktop1" />
              </div>
      <div className="formularioInputDesktop21">
        <div>
          <span className="formularioText04 Regular·14·20">
            <span>Correo electrónico</span>
          </span>
        </div>
        <input type="text" placeholder className="formularioInputDesktop11" />
      </div>
      <div className="formularioFila">
        <div>
          <div>
            <span className="formularioText06 Regular·14·20">
              <span>DNI</span>
            </span>
          </div>
          <input type="text" placeholder className="formularioInputDesktop12" />
        </div>
        <div>
          <div>
            <span className="formularioText08 Regular·14·20">
              <span>Sucursal</span>
            </span>
          </div>
          <div className="formularioInputDesktop13">
            <span className="formularioText10 Regular·14·20">
             <span>Villa Crespo</span>
            </span>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.75371 0.495703C1.42924 0.171236 0.903178 0.171236 0.578711 0.495703C0.254244 0.82017 0.254244 1.34624 0.578711 1.6707L6.29244 7.38443C6.68296 7.77495 7.31613 7.77495 7.70665 7.38443L13.4204 1.6707C13.7448 1.34624 13.7448 0.82017 13.4204 0.495703C13.0959 0.171236 12.5698 0.171236 12.2454 0.495703L6.99954 5.74154L1.75371 0.495703Z" fill="#AFAFAF"/>
</svg>
          </div>
        </div>
      </div>
      <div className="formularioHorario">
        <div>
          <div>
            <span className="formularioText12 Regular·14·20">
              <span>Contraseña</span>
            </span>
          </div>
          <input type="text" placeholder className="formularioInputDesktop14" />
        </div>
        <div>
          <div>
            <span className="formularioText14 Regular·14·20">
              <span>Repetir contraseña</span>
            </span>
          </div>
          <input type="text" placeholder className="formularioInputDesktop15" />
        </div>
      </div>
      <div className="formularioCtaDesktop1">
        <span className="formularioText16 Semibold·16·20">
          <span className="send">Enviar</span>
        </span>
      </div>
    </div>
  </div>
</div>
};

export default newOperator;
