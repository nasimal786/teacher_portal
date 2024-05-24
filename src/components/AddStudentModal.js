import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/actions";
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const AddStudentModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const dispatch = useDispatch();

  const handleAddStudent = () => {
    dispatch(addStudent({ name, subject, marks: parseInt(marks) }));
    setName("");
    setSubject("");
    setMarks("");
    setOpen(false);
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{
          marginTop: 5,
          display: "block",
          backgroundColor: "black",
          padding: "10px 60px",
        }}
      >
        Add
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{color: "blue", fontWeight:"bold"}}>Add Student</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Subject"
            type="text"
            fullWidth
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Marks"
            type="number"
            fullWidth
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{ backgroundColor: "red" }}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAddStudent}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddStudentModal;
