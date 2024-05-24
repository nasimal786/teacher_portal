import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
} from "@mui/material";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "nasim" && password === "password") {
      onLogin(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          color: "red",
          marginBottom: 2,
          fontSize: "2rem",
        }}
      >
        tailwebs.
      </Typography>
      <Box
        sx={{
          padding: 8,
          backgroundColor: "#fff",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          textAlign: "end",
        }}
      >
        <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
          <TextField
            variant="outlined"
            label="Username"
            fullWidth
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Link sx={{ marginTop: 1, display: "block", textAlign: "end" }}>
            Forgot Password?
          </Link>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            sx={{ display:"flex", justifyContent:"center", margin: "30px auto 0 auto", width:"60%"}}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
