import Main from "../layouts/Main";

import React, { Component } from 'react';

class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: [
        {
          name: 'Johnson',
          position: 'Staff Member',
          department: 'Finance',
          salary: '$60,000',
        },
        {
          name: 'James',
          position: 'Senior Staff Member',
          department: 'HR',
          salary: '$75,000',
        },
        {
          name: 'Vivek',
          position: 'Manager',
          department: 'Marketing',
          salary: '$90,000',
        },
      ],
      loading: true,
    };
  }

  componentDidMount() {
    // Simulate a delay with setTimeout to load the data
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000); // Adjust the delay time as needed (e.g., 2000 milliseconds = 2 seconds)
  }

  render() {
    return (
        <>
        <Main>
      <div className="staff-info">
        <h1>Staff Information</h1>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Department</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {this.state.staffList.map((staff, index) => (
                <tr key={index}>
                  <td>{staff.name}</td>
                  <td>{staff.position}</td>
                  <td>{staff.department}</td>
                  <td>{staff.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      </Main>
      </>
    );
  }
}

export default Staff;
