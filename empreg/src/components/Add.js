import React, { useState } from 'react'; // Import useState for state management

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      full_name: '',
      email: '',
      contact: '',
      address: '',
    };
  }

  changeHandler = (event) => { // Use arrow function for cleaner syntax (optional)
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = async (event) => { // Use async/await for cleaner asynchronous handling
    event.preventDefault(); // Prevent default form submission behavior

    const { full_name, email, contact, address } = this.state; // Destructure state for readability

    const response = await fetch('http://127.0.0.1:8000/employee/', {
      method: 'POST', // Use POST for creating new data
      headers: {
        'Content-Type': 'application/json', // Set content type for JSON data
      },
      body: JSON.stringify({ full_name, email, contact, address }), // Stringify data object
    });

    if (response.ok) { // Check for successful response
      console.log('Data submitted successfully!');
      // Handle success scenario (e.g., clear form, display success message)
    } else {
      console.error('Error submitting data:', response.statusText);
      // Handle error scenario (e.g., display error message)
    }
  };
  
    render(){
        return(
            <table className='table table-bordered'>
                <tbody>
                    <tr>
                        <th>Full name</th>
                        <td>
                            <input name='full_name' onChange={this.changeHandler} type='text' className='form-control' placeholder='Enter your name'/>
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                            <input name='email' onChange={this.changeHandler} type='email' className='form-control' placeholder='Enter email'/>
                        </td>
                    </tr>
                    <tr>
                        <th>Contact</th>
                        <td>
                            <input name='contact' onChange={this.changeHandler} type='text' className='form-control' placeholder='Enter contact'/>
                        </td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>
                            <input name='address' onChange={this.changeHandler} type='text' className='form-control' placeholder='Enter Address'/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type='submit' onClick={this.submitForm} className='btn btn-dark'/>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Add;