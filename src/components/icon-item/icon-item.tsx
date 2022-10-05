import React from 'react';
import { Icon } from "../../types/common.types";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import "./icon-item.scss";


export type ItemsProps = { icon: Icon, index:number};


export const IconItem: React.FC<ItemsProps> = ({ icon, index }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <div 
        className="iconBox" 
        onClick={handleClickOpen}
        >
        <img
          className="iconBox__img"
          src={icon.path}
          alt=''
        />
        <p>
          {icon.name}</p>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <img className="imgPopap" src={icon.path} alt='' />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};





