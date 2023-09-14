import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

// Define a functional component named StudentForm
  const StudentForm = ({ showModal, handleCloseModal, handleSubmit }) => {
 
  // Define state variables using useState
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    branch: '',
    skills: [], // Initialize skills as an empty array
    address: '',
  });

  //  handleReset function 
  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      branch: '',
      skills: [],
      address: '',
    });
    setNeedHostelFacility(false);
  };

  const [needHostelFacility, setNeedHostelFacility] = useState(false);

 // Handle changes to the skills checkboxes
    const handleSkillsChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prevData) => {
      if (checked) {
        return { ...prevData, skills: [...prevData.skills, value] };
      } else {
        return {
          ...prevData,
          skills: prevData.skills.filter((skill) => skill !== value),
              };
            }
        });
      };

   // Handle changes to the branch selection
    const handleBranchChange = (event) => {
    const { value } = event.target;
    setFormData({ ...formData, branch: value });
  };

  // Render the component
   return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Student Registration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <Form onSubmit={(e) => handleSubmit(e, formData, needHostelFacility)}>
        
          {/* Input fields for student information */}
            <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
          as="textarea"
          rows={3} 
          placeholder="Enter Address"
          value={formData.address}
          onChange={(e) =>
          setFormData({ ...formData, address: e.target.value })
          }
          />
         </Form.Group>
          <Form.Group controlId="dateOfBirth">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) =>
                setFormData({ ...formData, dateOfBirth: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Id</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email Id"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="branch">
            <Form.Label>Select Your Branch</Form.Label>
            <Form.Control
              as="select"
              value={formData.branch}
              onChange={handleBranchChange}
            >
              <option value="" disabled>
                Select your branch
              </option>
              <option value="Computer Science">Computer Science</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Mechanical Engineering">Information Technology</option>
              </Form.Control>
            </Form.Group>

           {/* Skills checkboxes  */}
          <Form.Group>
            <Form.Label>Skills</Form.Label>
            <div className="skills-container">
              <Form.Check
                type="checkbox"
                label="HTML"
                value="HTML"
                checked={formData.skills.includes('HTML')}
                onChange={handleSkillsChange}
              />
              <Form.Check
                type="checkbox"
                label="CSS"
                value="CSS"
                checked={formData.skills.includes('CSS')}
                onChange={handleSkillsChange}
              />
              <Form.Check
                type="checkbox"
                label="PHP"
                value="PHP"
                checked={formData.skills.includes('PHP')}
                onChange={handleSkillsChange}
              />
              <Form.Check
                type="checkbox"
                label="LARAVEL"
                value="LARAVEL"
                checked={formData.skills.includes('LARAVEL')}
                onChange={handleSkillsChange}
              />
              <Form.Check
                type="checkbox"
                label="REACT"
                value="REACT"
                checked={formData.skills.includes('REACT')}
                onChange={handleSkillsChange}
              />
              </div>
              </Form.Group>

         {/* Radio buttons for hostel facility */}
         <Form.Group controlId="hostelFacility">
            <Form.Label>Do you need hostel facility?</Form.Label>
            <div className="hostel-facility-container">
              <Form.Check
                type="radio"
                label="Yes"
                name="hostelFacility"
                value={true}
                checked={needHostelFacility === true}
                onChange={() => setNeedHostelFacility(true)}
              />
              <Form.Check
                type="radio"
                label="No"
                name="hostelFacility"
                value={false}
                checked={needHostelFacility === false}
                onChange={() => setNeedHostelFacility(false)}
              />
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>

        {/* Close button */}
        <Button variant="secondary" onClick={handleReset}>
          Reset
        </Button>

         {/* Save button */}
        <Button variant="primary" onClick={() => handleSubmit(formData)}>
          Save 
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StudentForm;

