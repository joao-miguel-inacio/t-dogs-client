import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
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
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

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
  "& .css-1drgtl0-MuiButtonBase-root-MuiIconButton-root": {
    fill: "#c4c4c4",
  },
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
const Navbar = ({ themeMode, setThemeMode }) => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
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
  };

  return (
    <div>
      <nav className={isHomePage ? "large-navbar transparent" : "large-navbar"}>
        <div className="navlinks ">
          <NavLink to="./">
            <img
              className={isHomePage ? "animated-logo logo" : "logo"}
              alt="T-DOGS"
              src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1657060337/T-Dogs/Logo_mgx5ax.png"
            />
          </NavLink>
          <Link
            id="about"
            className={
              isHomePage ? "animated-navlink-item navlink-item" : "navlink-item"
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

              {currentUser.userType === "isOwner" ? (
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
        <div className="right-navbar-container">
          {!isHomePage ? 
          <IconButton
            onClick={() => changeTheme()}
            sx={{ ml: 1 }}
            color="inherit"
          >
            {themeMode ? (
              <Brightness4Icon  style={{ color: "#000" }} />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
          :
          ""
          }

          {isLoggedIn && (
            <Button
              className="button"
              variant="contained"
              endIcon={<LogoutIcon />}
              onClick={removeUser}
            >     Sign Out
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
        </div>
      </nav>

      <nav className={isHomePage ? "small-navbar transparent" : "small-navbar"}>
        <NavLink to="./">
          <img
            className={isHomePage ? "animated-logo logo" : "logo"}
            alt="T-DOGS"
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1657060337/T-Dogs/Logo_mgx5ax.png"
          />
        </NavLink>
        <div className="right-navbar-container">
          <IconButton
            onClick={() => changeTheme()}
            sx={{ ml: 1 }}
            color="inherit"
          >
            {themeMode ? (
              <Brightness4Icon style={{ color: "#000" }} />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
          <div>
            <IconButton
              className={isHomePage ? "animated-menu-button" : ""}
              onClick={handleClick}
            >
              <MenuRoundedIcon fontSize="large" style={{ color: "black" }} />
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
                  className={themeMode ? "navlink-item-white" : "navlink-item"}
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
                    className={
                      themeMode ? "navlink-item-white" : "navlink-item"
                    }
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
                      className={
                        themeMode ? "navlink-item-white" : "navlink-item"
                      }
                      to="/signin"
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
                      className={
                        themeMode ? "navlink-item-white" : "navlink-item"
                      }
                      to="/profile"
                      onClick={handleClose}
                    >
                      Profile
                    </Link>
                  </MenuItem>
                  {currentUser.userType === "isOwner" ? (
                    <>
                      <MenuItem disableRipple>
                        <PetsIcon />
                        <Link
                          className={
                            themeMode ? "navlink-item-white" : "navlink-item"
                          }
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
                          className={
                            themeMode ? "navlink-item-white" : "navlink-item"
                          }
                          to="/match-list"
                          onClick={handleClose}
                        >
                          Match List
                        </Link>
                      </MenuItem>
                      <MenuItem disableRipple>
                        <FavoriteBorderIcon />
                        <Link
                          className={
                            themeMode ? "navlink-item-white" : "navlink-item"
                          }
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
		                  handleClose();
                      removeUser();
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
