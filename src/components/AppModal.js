import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { useDispatch } from 'react-redux'
import AddIcon from '@material-ui/icons/Add';
import DropZone from "./DropZone";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  addBtn:{
    width:'80%',
    padding:'1em',
    margin:'1em',
  },
  submitBtn:{
    width:'100%',
    padding:'1em',
    margin:'1em',
  }
}));

export default function AppModal(props) {
  const { modalOpen } = props;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(modalOpen);
  const [text, setText] = React.useState('');
  const [version, setVersion] = React.useState('0-0-1');
  const [files, setFiles] = React.useState([])

  // const inputRef = React.useRef('')
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleText = (event) => {
    console.log('event.target.value', event.target.value)
  };
  const handleSubmit= (type) => {
    console.log('files', files)
    dispatch({ type: 'ADDAPP', payload : {text, version, files} })
    // setOpen(false);

  }

  return (
    <div>
      <Button  className={classes.addBtn} type="button"  variant="contained"  color="primary"  onClick={handleOpen}>
        add app
        <AddIcon />
      </Button>
      {/* <button type="button" onClick={handleOpen}>
        add version
      </button> */}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          {/* <SimpleModal /> */}
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue={text}
            variant="outlined"
            onChange={(event)=> {setText(event.target.value);setVersion('0-0-1')}}
          />
           <TextField
            required
            id="outlined-required"
            // label="Required"
            defaultValue={text}
            variant="outlined"
            value={version}
            onChange={(event)=> setVersion(event.target.value)}
          />
          <DropZone files={files} setFiles={setFiles}/>
          <Button className={classes.submitBtn} variant="contained" color="secondary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
}
