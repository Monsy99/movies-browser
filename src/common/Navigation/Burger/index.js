import React from 'react';
import StyledBurger from './styled';

function Burger({ open, handleClose, handleOpen }) {
  return (
    <StyledBurger
      open={open}
      onClick={() => (open ? handleClose() : handleOpen())}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

export default Burger;
