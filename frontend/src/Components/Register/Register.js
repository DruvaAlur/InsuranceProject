import "./Register.css";
function Login() {
  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <span className="login100-form-title p-b-48">
              <i className="zmdi zmdi-font">E-Insurance</i>
            </span>
            <br></br>
            <span className="login100-form-title p-b-26">Register</span>
            <form className="login100-form validate-form">
              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" name="Firstname" />
                <span
                  className="focus-input100"
                  data-placeholder="Firstname"
                ></span>
              </div>
              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" name="Lastname" />
                <span
                  className="focus-input100"
                  data-placeholder="Lastname"
                ></span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is: a@b.c"
              >
                <input className="input100" type="text" name="Username" />
                <span
                  className="focus-input100"
                  data-placeholder="Username"
                ></span>
              </div>
              <div className="wrap-input100 validate-input">
                {/* <span className="btn-show-pass">
                  <i className="zmdi zmdi-eye">a</i>
                </span> */}
                <input className="input100" type="password" name="pass" />
                <span
                  className="focus-input100"
                  data-placeholder="Password"
                ></span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is: a@b.c"
              >
                <input className="input100" type="text" name="DOB" />
                <span className="focus-input100" data-placeholder="DOB"></span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is: a@b.c"
              >
                <input className="input100" type="text" name="Address" />
                <span
                  className="focus-input100"
                  data-placeholder="Address"
                ></span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is: a@b.c"
              >
                <input className="input100" type="text" name="Email" />
                <span
                  className="focus-input100"
                  data-placeholder="Email"
                ></span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is: a@b.c"
              >
                <input className="input100" type="text" name="State" />
                <span
                  className="focus-input100"
                  data-placeholder="State"
                ></span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is: a@b.c"
              >
                <input className="input100" type="text" name="City" />
                <span className="focus-input100" data-placeholder="City"></span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is: a@b.c"
              >
                <input className="input100" type="text" name="Pincode" />
                <span
                  className="focus-input100"
                  data-placeholder="Pincode"
                ></span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is: a@b.c"
              >
                <input className="input100" type="text" name="Nominee" />
                <span
                  className="focus-input100"
                  data-placeholder="Nominee"
                ></span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is: a@b.c"
              >
                <input
                  className="input100"
                  type="text"
                  name="Nominee Relation"
                />
                <span
                  className="focus-input100"
                  data-placeholder="Nominee Relation"
                ></span>
              </div>
            </form>
            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn">Register</button>
              </div>
            </div>
            <br></br>
            {/* <div className="text-center">
              <span className="txt1">Don’t have an account?</span>

              <a className="txt2" href="/">
                Sign Up
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
