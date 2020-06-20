import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { isEmpty } from 'lodash';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: theme.spacing(0, 2, 0, 2),
    },
    paper: {
      backgroundColor: 'white',
      borderRadius: '5px',
      padding: theme.spacing(2, 4, 2),
    }
  }));

export default function DialogSlide(props) {
    const { onOpen, onClose } = props;
    let robotInfo = props.showRobot || {};
    const classes = useStyles();
    const [open, setOpen] = React.useState(onOpen);

    const {
        id, name, 
        username = 'No username available', 
        email = 'No email available', 
        website = 'No website available', 
        phone = 'No phone available',
        address: { city, zipcode } = { city: 'No city available', zipcode: 'No zipcode available' },
        company: { catchPhrase, name: companyName = 'No company name available' } = { catchPhrase: 'No motto available' }
    } = robotInfo;

    const handleClose = () => {
        setOpen(onClose);
    };

    return isEmpty(robotInfo) ? null : (
        <React.Fragment>
            <Dialog
                open={onOpen}
                TransitionComponent={Transition}
                className={classes.modal}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent className={classes.paper}>
                    <img alt='robot' src={`https://robohash.org//${id}?200x200`}/>
                    <Typography variant="h4">{name}</Typography>
                        <ul style={{listStyle: 'none'}}>
                            <li><strong>Username:</strong> <i>{username}</i></li>
                            <li><strong>Email:</strong> <i>{email}</i></li>
                            <li><strong>Phone:</strong> <i>{phone}</i></li>
                            <li><strong>Website:</strong> <i>{website}</i></li>
                            <li><strong>City:</strong> <i>{city}</i></li>
                            <li><strong>Company:</strong> <i>{companyName}</i></li>
                            <li><strong>Motto:</strong> <i>{catchPhrase}</i></li>
                            <li><strong>Zip Code:</strong> <i>{zipcode}</i></li>
                        </ul>
                </DialogContent>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
            </Dialog>
        </React.Fragment>
    );
}