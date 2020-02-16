import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import RootRef from "@material-ui/core/RootRef";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  dropzone: {
    border: "dotted 3px grey",
    height: "3em",
    textAlign: "center",
    padding: "2em",
    cursor: "pointer",
    margin: "1em 0"
  }
}));

const DropZone = ({ files, setFiles }) => {
  const classes = useStyles();

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log("acceptedFiles", acceptedFiles[0]);
    setFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {files.length > 0 &&
        files.map(i => {
          return (
            <>
              <ul>
                <li>
                  <InsertDriveFileIcon />
                  <p key={i.name}>{i.name}</p>
                </li>
              </ul>
            </>
          );
        })}
      <div className={classes.dropzone}>
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

export default DropZone;
