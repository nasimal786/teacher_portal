import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deleteStudent, editStudent } from "../redux/actions";
import AddStudentModal from "./AddStudentModal";

const StudentTable = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({
    id: null,
    name: "",
    subject: "",
    marks: "",
  });

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    dispatch(deleteStudent(currentIndex));
    handleClose();
  };

  const handleEditOpen = (index) => {
    console.log(index);
    setCurrentIndex(index);
    setCurrentStudent(students[index]);
    setEditOpen(true);
    handleClose();
  };

  const handleEditClose = () => {
    setEditOpen(false);
    setCurrentIndex(null);
    setCurrentStudent({ id: null, name: "", subject: "", marks: "" });
  };

  const handleEditSave = () => {
    console.log(currentIndex);
    console.log(currentStudent);

    dispatch(editStudent(currentStudent.id, currentStudent));
    handleEditClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        overflowX: "auto",
      }}
    >
      <TableContainer component={Paper}>
        <Table aria-label="student table">
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", color: "gray" }}
              >
                Name
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", color: "gray" }}
              >
                Subject
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", color: "gray" }}
              >
                Mark
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", color: "gray" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell align="left">
                  <Box display="flex" alignItems="center">
                    <Avatar sx={{ mr: 2, backgroundColor: "blue" }}>
                      {student.name.charAt(0)}
                    </Avatar>
                    {student.name}
                  </Box>
                </TableCell>
                <TableCell align="left">{student.subject}</TableCell>
                <TableCell align="left">{student.marks}</TableCell>
                <TableCell align="left">
                  <IconButton onClick={(e) => handleClick(e, index)}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl) && currentIndex === index}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => handleEditOpen(index)}>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Student</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            name="name"
            value={currentStudent.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Subject"
            type="text"
            fullWidth
            name="subject"
            value={currentStudent.subject}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Marks"
            type="number"
            fullWidth
            name="marks"
            value={currentStudent.marks}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <AddStudentModal />
    </Box>
  );
};

export default StudentTable;
