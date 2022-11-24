const PWDrequisite = ({
  capsLetterFlag,
  numberFlag,
  pwdLengthFlag,
  specialCharFlag,
  neutral,
}) => {
  return (
    <div>
      <div>
        <div>
          <span className="loginMailText16">
            <span>La contraseña debe contener:</span>
          </span>
        </div>
        <div className="loginMailContent">
          <div className="loginMailFila2">
            <div className="loginMailFila3">
              <span className="loginMailText18 BodyRegular·12·16">
                <span className={capsLetterFlag + neutral}>ABC</span>
              </span>
              <span className="loginMailText20 BodyRegular·12·16">
                <span className={capsLetterFlag + neutral}>
                  Una letra mayúscula
                </span>
              </span>
            </div>

            <div className="loginMailFila4">
              <span className="loginMailText22 BodyRegular·12·16">
                <span className={specialCharFlag + neutral}>abc</span>
              </span>
              <span className="loginMailText24 BodyRegular·12·16">
                <span className={specialCharFlag + neutral}>
                  Una letra minúscula
                </span>
              </span>
            </div>
          </div>
          <div className="loginMailFila5">
            <div className="loginMailFila6">
              <span className="loginMailText26 BodyRegular·12·16">
                <span className={numberFlag + neutral}>123</span>
              </span>
              <span className="loginMailText28 BodyRegular·12·16">
                <span className={numberFlag + neutral}>Un número</span>
              </span>
            </div>
            <div className="loginMailFila7">
              <span className="loginMailText30 BodyRegular·12·16">
                <span className={pwdLengthFlag + neutral}>***</span>
              </span>
              <span className="loginMailText32 BodyRegular·12·16">
                <span className={pwdLengthFlag + neutral}>
                  Mínimo 8 caracteres
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWDrequisite;
