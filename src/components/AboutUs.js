//this is what Im implementing here: https://next.material-ui.com/components/popover/
import * as React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';

function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover1' : undefined;

  return (
    <div>      
      <InfoIcon aria-describedby={id} variant="contained" onClick={handleClick} />
    
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',    
        }} 
        transformOrigin= {{

            vertical: 'top',
            horizontal: 'right'

        }}
      >
        <Typography sx={{ p: 2 }}>Recyclup is dedicated to make your neighbourhood a more sustainable and kind place. <br></br>
        It does not only allow you to easily get rid of things you might no longer need, but also find nice affordable items nearby.
        </Typography>
      </Popover>
    </div>
  );
}



export default BasicPopover;