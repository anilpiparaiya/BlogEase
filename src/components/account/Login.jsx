import React from "react";
import { Box, TextField, Button, styled, Typography } from "@mui/material";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 25px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #FB6411B;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #287f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%)
`;

const Text = styled(Typography)`
color: #878787;
font-size: 16px;
`
const Login = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        <Wrapper>
          <TextField variant="standard" label="Enter username"/>
          <TextField variant="standard" label="Enter password"/>
          <LoginButton variant="contained">Login</LoginButton>
          <Text style={{ textAlign: "center" }}>Or</Text>
          <SignupButton>Create an account</SignupButton>
        </Wrapper>
      </Box>
    </Component>
  );
};

export default Login;
