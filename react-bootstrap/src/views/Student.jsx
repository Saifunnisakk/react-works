import React, { useState, useEffect } from "react";
import Main from "../layouts/Main";
import { Row, Table, Col, Button } from "react-bootstrap";
import StudentForm from "../components/StudentForm";
import { Person } from 'react-bootstrap-icons';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (formData, needHostelFacility) => {
  const newStudent = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dateOfBirth: formData.dateOfBirth,
      email: formData.email,
      course: formData.branch,
      skills: formData.skills,
      address: formData.address,
      hostelFacility: needHostelFacility,
    };

    // Log the new student data to the console
  console.log("New Student Data:", newStudent);

    setStudents([...students, newStudent]);
    handleCloseModal();
  };

  useEffect(() => {
    fetch("http://localhost:4000/student")
    .then((res) => res.json()).then((data) => setStudents(data.data))
    .catch((err) => console.log(err));
  }, []);

  return (
    <Main>
      <Row className="mt-5">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <h2>Students</h2>
            <Button variant="success" size="lg" onClick={handleShowModal} style={{ marginBottom: '15px' }} className="add-student-button">
              <Person /> Add Student
            </Button>
          </div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th>Full Name</th>
                <th>Date of Birth</th>
                <th>Email</th>
                <th>Branch</th>
                <th>Skills</th>
                <th>Address</th>
                <th>Hostel Facility</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr className="text-center">
                  <td colSpan="8">NO RECORDS FOUND</td>
                </tr>
              ) : (
                students.map((student, index) => (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td>{`${student.firstName} ${student.lastName}`}</td>
                    <td>{student.dateOfBirth}</td>
                    <td>{student.email}</td>
                    <td>{student.branch}</td>
                    <td>{student.skills.join(", ")}</td>
                    <td>{student.address}</td>
                    <td>{student.hostelFacility ? "Yes" : "No"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
      <StudentForm
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
      />
    </Main>
  );
};

export default Student;
