import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppModal from "./AppModal";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  selectedApp: {
    backgroundColor: "#ccc"
  }
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openedId, setOpenedId] = React.useState(null);

  const handleClick = id => {
    setOpen(!open);
    console.log("id", id);
    setOpenedId(openedId !== id ? id : null);
  };
  const appsList = useSelector(({ apps }) => apps.appsList);
  const files = useSelector(({ apps }) => apps.files);
  console.log("files", files);

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <AppModal />
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Apps Items
                  </ListSubheader>
                }
                className={classes.root}
              >
                {Object.keys(appsList).length > 0 &&
                  Object.keys(appsList).map(i => (
                    <ListItem
                      button
                      key={i}
                      onClick={() => handleClick(i)}
                      className={openedId === i ? classes.selectedApp : ""}
                    >
                      <ListItemIcon>
                        {openedId === i ? <FolderOpenIcon /> : <FolderIcon />}
                      </ListItemIcon>
                      <ListItemText primary={i} />
                    </ListItem>
                  ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Versions Items
                  </ListSubheader>
                }
                className={classes.root}
              >
                {openedId &&
                  appsList[openedId].length > 0 &&
                  appsList[openedId].map(i => (
                    <ListItem button key={i}>
                      <ListItemIcon>
                        <InsertDriveFileIcon />
                      </ListItemIcon>
                      <ListItemText primary={i} />
                      {/* <p>{files[`${appsList[openedId]}v${i}`]}</p> */}
                      <ListItemText secondary={files[`${openedId}v${i}`]} />
                    </ListItem>
                  ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
