import React, { useState } from "react";
import Title from "../shared/Title";
import Header from "../shared/Header";
import Typography from "@mui/material/Typography";
import { Drawer, Grid, Stack, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobile } from "../../redux/reducer/misc";
import { Dashboard } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";

const tabs = [
  {
    name: "Overview",
    path: "/",
  },
  {
    name: "People Directory",
    path: "/people",
  },
];

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isMobile } = useSelector((state) => state.misc);
    const handleMobileClose = () => {
      dispatch(setIsMobile(false));
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
            }}
            height={"100%"}
          ></Grid>
          <Grid
            item
            xs={12}
            // sx={{ backgroundColor: "pink" }}
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
