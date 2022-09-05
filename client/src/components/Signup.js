import { useState } from "react";
import { useContext } from "react";
import { Cont } from "../Cont";

import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import { Box } from "@mui/system";
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

function Signup({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setShowLogin, setErrors } = useContext(Cont);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
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
        <h2 className="loginheadings">Create a new account</h2>
        <p className="loginheadings">It's quick and easy</p>
        <FormControl fullWidth>
          <InputLabel htmlFor="component-outlined"> Name</InputLabel>
          <OutlinedInput
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
          />
        </FormControl>

        <FormControl  fullWidth>
          <InputLabel htmlFor="component-outlined"> Email</InputLabel>
          <OutlinedInput
            type="text"
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
        <p className="loginheadings">
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy.
        </p>
        <Stack paddingLeft={15} direction="row" id="loginbutton">
          <ColorButton variant="contained" type="submit">
            {isLoading ? "Loading..." : "Sign Up"}
          </ColorButton>
        </Stack>

        <h3 className="loginheadings">Already have an account? &nbsp;</h3>

        <ColorButton variant="contained" onClick={() => setShowLogin(true)}>
          {" "}
          Log In
        </ColorButton>
      </Box>
    </>
  );
}
export default Signup;
