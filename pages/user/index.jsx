import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../../comps/Navbar";

const index = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Navbar />
      <div className="containerCalendar">
        <Calendar onChange={onChange} value={value} />
        {/* {console.log(value)} */}
      </div>

      <div class="reserva-reserva">
        <div class="reserva-content">
          <div class="reserva-head">
            <span class="reserva-text Semibold·18·24">
              <span>Reserva</span>
            </span>
            <span class="reserva-text02 Regular·14·20">
              <span>Seleccioná tu sucursal</span>
            </span>
          </div>
          <div class="reserva-stepper">
            <div class="reserva-step">
              <div class="reserva-step1">
                <img
                  src="/playground_assets/borderi417-2j8-200h.png"
                  alt=" "
                  class="reserva-border"
                />
                <div class="reserva-number">
                  <span class="reserva-text04 Semibold·14·20">1</span>
                </div>
                <img
                  src="/playground_assets/borderi417-o5q-200h.png"
                  alt=" "
                  class="reserva-border1"
                />
              </div>
              <span class="reserva-text05 Regular·14·20">
                <span>Elegí tu sucursal</span>
              </span>
            </div>
            <div class="reserva-step4">
              <div class="reserva-step5">
                <img
                  src="/playground_assets/borderi417-sv0s-200h.png"
                  alt=" "
                  class="reserva-border4"
                />
                <div class="reserva-number2">
                  <span class="reserva-text10 Semibold·14·20">2</span>
                </div>
                <img
                  src="/playground_assets/borderi417-3jff-200h.png"
                  alt=" "
                  class="reserva-border5"
                />
              </div>
              <span class="reserva-text11 Regular·14·20">
                <span>Seleccioná el día</span>
              </span>
            </div>
            <div class="reserva-step4">
              <div class="reserva-step5">
                <img
                  src="/playground_assets/borderi417-sv0s-200h.png"
                  alt=" "
                  class="reserva-border4"
                />
                <div class="reserva-number2">
                  <span class="reserva-text10 Semibold·14·20">3</span>
                </div>
                <img
                  src="/playground_assets/borderi417-3jff-200h.png"
                  alt=" "
                  class="reserva-border5"
                />
              </div>
              <span class="reserva-text11 Regular·14·20">
                <span>Completá el formulario</span>
              </span>
            </div>
          </div>
          <div class="reserva-input-desktop2">
            <div class="reserva-txt">
              <span class="reserva-text13 Regular·14·20">
                <span>Sucursal</span>
              </span>
            </div>
            <div class="reserva-input-desktop1">
              <span class="reserva-text15 Regular·14·20"></span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="reserva-user-interface"
              >
                <path
                  d="M4.7542 6.49583C4.42973 6.17136 3.90367 6.17136 3.5792 6.49582C3.25473 6.82029 3.25473 7.34636 3.5792 7.67083L9.29293 13.3846C9.68345 13.7751 10.3166 13.7751 10.7071 13.3846L16.4209 7.67082C16.7453 7.34636 16.7453 6.82029 16.4209 6.49582C16.0964 6.17136 15.5703 6.17136 15.2459 6.49583L10 11.7417L4.7542 6.49583Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="reserva-c-t-a-desktop1">
          <span class="reserva-text16 Semibold·16·20">
            <span>Confirmar reserva</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
