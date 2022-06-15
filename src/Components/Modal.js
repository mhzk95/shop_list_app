import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '../validation/Input';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({edit,data}) =>  {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  return (
    <div >
     {edit ? 
      <Button onClick={handleOpen}>Edit</Button> :
      <Button onClick={handleOpen} variant='contained' color='secondary' >Add Shop</Button>
     }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {edit ? 'Update Shop Details' : "Enter Shop Details"}
          </Typography>
          <Input setOpen={setOpen} data={data}/>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal
