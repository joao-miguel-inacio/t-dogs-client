import React from 'react';
import Popover from "@mui/material/Popover";
import Typography from '@mui/material/Typography';

const PopOver = ({open, popover, handlePopoverClose, popOverMessage}) => {
  return (
    <Popover
    id="mouse-over-popover"
    sx={{
      pointerEvents: "none",
    }}
    open={open}
    anchorEl={popover}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    onClose={handlePopoverClose}
    disableRestoreFocus
  >
    <Typography sx={{ p: 1 }}>{popOverMessage}</Typography>
  </Popover>)
}

export default PopOver