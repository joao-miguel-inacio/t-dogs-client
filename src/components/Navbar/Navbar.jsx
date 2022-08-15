import { Link, useLocation } from "react-router-dom";
import useAuth from "../../context/auth/useAuth";
import { Menu, MenuItem, Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import PetsIcon from "@mui/icons-material/Pets";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Divider from "@mui/material/Divider";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import "./Navbar.css";
import { useState, useMemo } from "react";
import { styled, alpha } from "@mui/material/styles";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const light = createTheme({
  palette: {
    mode: "light",
  },
});

const dark = {
  palette: {
    mode: "dark",
  },
};

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const Navbar = () => {
  const [themeMode, setThemeMode] = useState(false);

  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const { pathname } = useLocation();
  let isHomePage = null;
  if (pathname === "/") {
    isHomePage = true;
  }
  let isSignInPage = null;
  if (pathname === "/signin") {
    isSignInPage = true;
  }
  let isSignUpPage = null;
  if (pathname === "/signup") {
    isSignUpPage = true;
  }
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeTheme = () => {
    setThemeMode(!themeMode);
    console.log(themeMode);
  };
  return (
    <ThemeProvider theme={themeMode ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <div>
        <nav
          className={isHomePage ? "large-navbar transparent" : "large-navbar"}
        >
          <div className="navlinks ">
            <img
              className={isHomePage ? "animated-logo logo" : "logo"}
              alt="T-DOGS"
              src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1657060337/T-Dogs/Logo_mgx5ax.png"
            />
            <Link
              id="about"
              className={
                isHomePage
                  ? "animated-navlink-item navlink-item"
                  : "navlink-item"
              }
              to="/about"
            >
              <InfoIcon /> About
            </Link>

            {isLoggedIn && (
              <>
                <Link
                  id="profile"
                  className={
                    isHomePage
                      ? "animated-navlink-item navlink-item"
                      : "navlink-item"
                  }
                  to="/profile"
                >
                  <PersonIcon /> Profile
                </Link>

                {currentUser.hasChildren === undefined ? (
                  <Link
                    id="dogs"
                    className={
                      isHomePage
                        ? "animated-navlink-item navlink-item"
                        : "navlink-item"
                    }
                    to="/own-list"
                  >
                    <PetsIcon /> Dogs
                  </Link>
                ) : (
                  <>
                    <Link
                      id="matchlist"
                      className={
                        isHomePage
                          ? "animated-navlink-item navlink-item"
                          : "navlink-item"
                      }
                      to="/match-list"
                    >
                      <FavoriteIcon /> Match List
                    </Link>
                    <Link
                      id="browse"
                      className={
                        isHomePage
                          ? "animated-navlink-item navlink-item"
                          : "navlink-item"
                      }
                      to="/browse"
                    >
                      <FavoriteBorderIcon /> Browse
                    </Link>
                  </>
                )}
              </>
            )}
          </div>

          <IconButton
            onClick={() => changeTheme()}
            sx={{ ml: 1 }}
            color="inherit"
          >
            {themeMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>

          {isLoggedIn && (
            <Button
              className="button"
              variant="contained"
              endIcon={<LogoutIcon />}
              onClick={removeUser}
            >
              Sign Out
            </Button>
          )}
          {!isLoggedIn && isSignInPage ? (
            <Button component={Link} to={`/signup`} className="button">
              Sign Up{" "}
            </Button>
          ) : (
            ""
          )}
          {!isLoggedIn && !isSignInPage ? (
            <Button component={Link} to={`/signin`} className="button">
              Sign In{" "}
            </Button>
          ) : (
            ""
          )}
        </nav>

        <nav
          className={isHomePage ? "small-navbar transparent" : "small-navbar"}
        >
          <img
            className={isHomePage ? "animated-logo logo" : "logo"}
            alt="T-DOGS"
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1657060337/T-Dogs/Logo_mgx5ax.png"
          />
          <IconButton
            onClick={() => changeTheme()}
            sx={{ ml: 1 }}
            color="inherit"
          >
            {themeMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <div>
            <IconButton
              className={isHomePage ? "animated-menu-button" : ""}
              onClick={handleClick}
            >
              <MenuRoundedIcon fontSize="large" />
            </IconButton>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem disableRipple>
                <InfoIcon />
                <Link
                  className="navlink-item"
                  to="/about"
                  onClick={handleClose}
                >
                  About
                </Link>
              </MenuItem>
              {!isLoggedIn && !isSignUpPage ? (
                <MenuItem disableRipple>
                  <VpnKeyIcon />
                  <Link
                    className="navlink-item"
                    to="/signup"
                    onClick={handleClose}
                  >
                    Sign Up
                  </Link>
                </MenuItem>
              ) : (
                ""
              )}
              {!isLoggedIn && !isSignInPage ? (
                <div>
                  <MenuItem disableRipple>
                    <LoginIcon />
                    <Link
                      className="navlink-item"
                      to="/login"
                      onClick={handleClose}
                    >
                      Log in
                    </Link>
                  </MenuItem>
                </div>
              ) : (
                ""
              )}
              {isLoggedIn && (
                <div>
                  <MenuItem disableRipple>
                    <PersonIcon />
                    <Link
                      className="navlink-item"
                      to="/profile"
                      onClick={handleClose}
                    >
                      Profile
                    </Link>
                  </MenuItem>
                  {currentUser.hasChildren === undefined ? (
                    <>
                      <MenuItem disableRipple>
                        <PetsIcon />
                        <Link
                          className="navlink-item"
                          to="/own-list"
                          onClick={handleClose}
                        >
                          Dogs
                        </Link>
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem disableRipple>
                        <FavoriteIcon />
                        <Link
                          className="navlink-item"
                          to="/match-list"
                          onClick={handleClose}
                        >
                          Match List
                        </Link>
                      </MenuItem>
                      <MenuItem disableRipple>
                        <FavoriteBorderIcon />
                        <Link
                          className="navlink-item"
                          to="/browse"
                          onClick={handleClose}
                        >
                          Browse
                        </Link>
                      </MenuItem>
                    </>
                  )}
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem
                    onClick={() => {
                      removeUser();
                      handleClose();
                    }}
                    disableRipple
                  >
                    <LogoutIcon />
                    Sign Out
                  </MenuItem>
                </div>
              )}
            </StyledMenu>
          </div>
        </nav>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
