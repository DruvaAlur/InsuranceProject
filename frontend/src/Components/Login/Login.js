import "./Login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigation = new useNavigate();
  const registerUser = () => {
    navigation("/Register");
  };
  return (
    <>
      <div className="limiter1">
        <div className="container-login1001">
          <div className="wrap-login1001">
            <form className="login100-form1 validate-form">
              <span className="login100-form-title1 p-b-48">
                <i className="zmdi zmdi-font">E-Insurance</i>
              </span>
              <br></br>
              <span className="login100-form-title1">Login</span>

              <br></br>
              <div
                className="wrap-input1001 validate-input"
                data-validate="Valid email is: a@b.c"
              >
                <input className="input100" type="text" name="email" />
                <span
                  className="focus-input100"
                  data-placeholder="Email"
                ></span>
              </div>

              <div
                className="wrap-input1001 validate-input"
                data-validate="Enter password"
              >
                <span className="btn-show-pass">
                  <i className="zmdi zmdi-eye"></i>
                </span>
                <input className="input100" type="password" name="pass" />
                <span
                  className="focus-input100"
                  data-placeholder="Password"
                ></span>
              </div>

              <div className="container-login100-form-btn1">
                <div className="wrap-login100-form-btn1">
                  <div className="login100-form-bgbtn1"></div>
                  <button className="login100-form-btn1">Login</button>
                </div>
              </div>

              <div>
                <br></br>
                <br></br>
                <span className="txt1">Don’t have an account?</span>

                <a className="txt2" href="!#" onClick={registerUser}>
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
