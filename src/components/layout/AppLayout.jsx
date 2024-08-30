import React, { useState } from "react";
import Title from "../shared/Title";
import Header from "../shared/Header";
import Typography from "@mui/material/Typography";
import { Drawer, Grid } from "@mui/material";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const [isMobile, setIsMobile] = useState(true);
    const handleMobileClose = () => {
      setIsMobile(false);
    };
    return (
      <>
        <Title />
        <Header />
        <Drawer open={isMobile} onClose={handleMobileClose}>
          <Typography variant="h1" color="initial">
            Hi
          </Typography>
        </Drawer>
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
              backgroundColor: "red",
            }}
            height={"100%"}
          >
            <Typography variant="h1" color="initial">
              list
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ backgroundColor: "pink" }}
            sm={8}
            md={9}
            lg={9}
            height={"100%"}
          >
            <WrappedComponent {...props} />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
