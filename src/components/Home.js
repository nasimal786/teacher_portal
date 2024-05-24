import React from "react";
import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import StudentTable from "./StudentTable";

const Home = () => {
  return (
    <Container sx={{ mt: 2, mb: 6, width: "90%" }}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ mb: 1 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "red",
              fontSize: "2rem",
            }}
          >
            tailwebs.
          </Typography>
          <Button color="inherit" sx={{ mr: 2, fontWeight: "bold" }}>
            Home
          </Button>
          <Button color="inherit" sx={{ fontWeight: "bold" }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <StudentTable />
    </Container>
  );
};

export default Home;
