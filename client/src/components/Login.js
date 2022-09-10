import "./stylingfolder/Login.css";
import "./stylingfolder/TimesSquare.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Cont } from "../Cont";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setShowLogin, setErrors } = useContext(Cont);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    navigate("/about");
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1 className="loginheadings">Big Apple Explorer 🍎</h1>
        <h2 className="loginheadings">Get Started</h2>

        <FormControl fullWidth >
          <InputLabel htmlFor="component-outlined">Email</InputLabel>
          <OutlinedInput
            type="text"
            // id="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Name"
          />
        </FormControl>

        <FormControl fullWidth >
          <InputLabel htmlFor="component-outlined">Password</InputLabel>
          <OutlinedInput
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Name"
          />
        </FormControl>
        <Stack paddingLeft={15} direction="row" id="loginbutton">
          <ColorButton variant="contained" type="submit">
            {" "}
            {isLoading ? "Loading..." : "Login"}
          </ColorButton>
        </Stack>

        <h3 className="loginheadings">Don't have an account? </h3>

        <Stack paddingLeft={15} direction="row" id="loginbutton">
          <ColorButton
            variant="contained"
            type="submit"
            onClick={() => setShowLogin(false)}
          >
            {" "}
            Sign Up
          </ColorButton>

        
        </Stack>
      </Box>
    </>
  );
}
export default Login;
