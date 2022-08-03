import { NavLink, Link } from "react-router-dom";
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
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import "./Navbar.css";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";

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
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <nav className="large-navbar">
        <div className="navlinks ">
          <img
            className="logo" alt="T-DOGS"
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1657060337/T-Dogs/Logo_mgx5ax.png"
          />
          <NavLink
            className={({ isActive }) =>
              isActive ? "selected navlink-item" : "navlink-item"
            }
            to="/about"
          >
            <InfoIcon /> About
          </NavLink>

          {isLoggedIn && (
            <>
              <NavLink
              id="profile"
                className={({ isActive }) =>
                  isActive ? "selected navlink-item" : "navlink-item profile"
                }
                to="/profile"
              >
                <PersonIcon /> Profile
              </NavLink>

              {currentUser.hasChildren === undefined ? (
                <NavLink
                id="dogs"
                  className={({ isActive }) =>
                    isActive ? "selected navlink-item dogs" : "navlink-item dogs"
                  }
                  to="/own-list"
                >
                  <PetsIcon /> Dogs
                </NavLink>
              ) : (
                <>
                  <NavLink
                  id="matchlist"
                    className={({ isActive }) =>
                      isActive ? "selected navlink-item" : "navlink-item"
                    }
                    to="/match-list"
                  >
                    <FavoriteIcon /> Match List
                  </NavLink>

                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "selected navlink-item" : "navlink-item"
                    }
                    to="/browse"
                  >
                    <FavoriteBorderIcon /> Browse
                  </NavLink>
                </>
              )}
            </>
          )}
        </div>
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
        {!isLoggedIn && 
          <Button component={Link}
              to={`/signin`} className="button">Sign In </Button>}
      </nav>

      <nav className="small-navbar">
        <img
          className="logo"
          alt="T-DOGS"
          src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1657060337/T-Dogs/Logo_mgx5ax.png"
        />
        <div>
          <IconButton className="menu-button" onClick={handleClick}>
            <MenuRoundedIcon />
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
            <MenuItem  disableRipple>
                <InfoIcon />
                <NavLink className="navlink-item" to="/about">About</NavLink>
            </MenuItem>
            {!isLoggedIn && 
            <>
                <MenuItem disableRipple>
                    <VpnKeyIcon />
                    <NavLink  className="navlink-item" to="/signup">Sign Up</NavLink>
                </MenuItem>
                <MenuItem disableRipple>
                    <LoginIcon />
                    <NavLink  className="navlink-item" to="/login">Log in</NavLink>
                </MenuItem>
            </>}
            {isLoggedIn && (
              <>
                <MenuItem disableRipple>
                    <PersonIcon />
                    <NavLink  className="navlink-item" to="/profile">Profile</NavLink>
                </MenuItem>
                {currentUser.hasChildren === undefined ? (
                  <>
                    <MenuItem disableRipple>
                        <PetsIcon />
                        <NavLink  className= "navlink-item" to="/own-list" >Dogs</NavLink>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem disableRipple>
                        <FavoriteIcon />
                        <NavLink  className="navlink-item" to="/match-list">Match List</NavLink>
                      </MenuItem>
                    <MenuItem disableRipple>
                        <FavoriteBorderIcon />
                        <NavLink className="navlink-item" to="/browse">Browse</NavLink>
                    </MenuItem>
                  </>
                )}
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={removeUser} disableRipple>
                  <LogoutIcon />
                  Sign Out
                </MenuItem>
              </>
            )}
          </StyledMenu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
