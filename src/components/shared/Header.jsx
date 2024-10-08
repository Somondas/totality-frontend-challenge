import { Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobile } from "../../redux/reducer/misc";

const Header = () => {
  const dispatch = useDispatch();

  const handleMobile = () => dispatch(setIsMobile(true));
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: "#fff9f9",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block", color: "#000" },
              }}
            >
              Rent Property
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="orange" onClick={handleMobile}>
                <Menu />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
