import "./Register.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
function Login() {
  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <span className="login100-form-title p-b-48">
              <i className="zmdi zmdi-font" style={{ color: "#AE2CFF" }}>
                E-Insurance
              </i>
            </span>
            <br></br>
            <span
              className="login100-form-title p-b-26"
              style={{ color: "#27CCFD" }}
            >
              Register
            </span>
            <br />
            <br />

            <form className="login100-form validate-form">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Firstname"
                  variant="standard"
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Lastname"
                  variant="standard"
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Username"
                  variant="standard"
                />
              </Box>

              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="standard-basic" label="DOB" variant="standard" />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Address"
                  variant="standard"
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="State"
                  variant="standard"
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="City"
                  variant="standard"
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Pincode"
                  variant="standard"
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Nominee"
                  variant="standard"
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                {" "}
                <TextField
                  id="standard-basic"
                  label="Nominee Relation"
                  variant="standard"
                />
              </Box>
            </form>
            <br />
            <br />

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
