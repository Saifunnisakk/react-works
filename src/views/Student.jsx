import { useState } from "react";
import Main from "../layouts/Main";
import { Row, Table ,Col} from "react-bootstrap";
const Student = () => {
    
const [student,setStudents]= useState([]);
setTimeout(() => {
    setStudents([{firstname:"saifunnisa",lastname:"kk",mobile:"9876543210",email:"saifunnisa@gmail.com",city:"Wayanad",degree:"yes",skill:["html",",", "php"]},
    {firstname:"zaad",lastname:"Aman",mobile:"9087564321",email:"zaad@gmail.com",city:"calicut",skill:"react",degree:"yes"},
    {firstname:"Fahina",lastname:"RP",mobile:"9086543321",email:"fahina@gmail.com",city:"calicut",skill:["react",",","Laravel"],degree:"yes"}
])
}, 5000);
    return(<>
    <Main>
    <Row className="mt-5">
      <Col> 
        <h2>Students</h2>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Address</th>
          <th>Degree</th>
          <th>Skills</th>
        </tr>
      </thead>
      <tbody>
      {student.length===0?(<tr className="text-center"><td colSpan="8">NO RECORDS FOUND</td></tr>):

        (student.map((student,key)=>(
        <tr key={key}>
          <td>{key+1}</td>
          <td>{student.firstname}</td>
          <td>{student.lastname}</td>
          <td>{student.mobile}</td>
          <td>{student.email}</td>
          <td>{student.city}</td>
          <td>{student.degree}</td>
          <td>{student.skill}</td>
          
        </tr>
        )))}
      </tbody>
    </Table>
    </Col>
    </Row>
    </Main>
    </>);
};
export default Student;