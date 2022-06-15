import {Typography,AppBar,Button,Toolbar} from '@mui/material'
import BasicModal from './Modal'

const Navbar = () => {
    
  return (
    <div >
      <AppBar color='primary' position='static'>
      <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
        <Typography variant='h6'>
            Shop List
        </Typography>
        <BasicModal />
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar