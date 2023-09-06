import Main from "../layouts/Main";
import React, { Component } from 'react';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountList: [
        {
          accountNumber: '123456789',
          accountType: 'Savings',
          balance: '$5,000',
          isOpen: 'Yes',
        },
        {
          accountNumber: '987654321',
          accountType: 'Checking',
          balance: '$2,500',
          isOpen: 'No',
        },
        {
          accountNumber: '555555555',
          accountType: 'CD',
          balance: '$10,000',
          isOpen: 'Yes',
        },
      ],
      loading: true,
    };
  }

  componentDidMount() {
    // Simulate a delay with setTimeout to load the account data
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000); // Adjust the delay time as needed (e.g., 2000 milliseconds = 2 seconds)
  }

  render() {
    return (
        <>
        <Main>
      <div className="account-info">
        <h1>Account Information</h1>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Account Number</th>
                <th>Account Type</th>
                <th>Balance</th>
                <th>Is Open</th>
              </tr>
            </thead>
            <tbody>
              {this.state.accountList.map((account, index) => (
                <tr key={index}>
                  <td>{account.accountNumber}</td>
                  <td>{account.accountType}</td>
                  <td>{account.balance}</td>
                  <td>{account.isOpen}</td>
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

export default Account;
