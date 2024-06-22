import React from 'react';
import { Link } from "react-router-dom";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    fetchData() {
        fetch('http://127.0.0.1:8000/employee/')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    data: data
                });
            });
    }

    deleteEmployee(id) {
        fetch(`http://127.0.0.1:8000/employee/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            if (response.ok) {
                this.setState((prevState) => ({
                    data: prevState.data.filter(emp => emp.id !== id)
                }));
            } else {
                console.error('Failed to delete employee');
            }
        })
        .catch(error => {
            console.error('Error deleting employee:', error);
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const empData = this.state.data;
        const rows = empData.map((emp) =>
            <tr key={emp.id}>
                <td>{emp.full_name}</td>
                <td>{emp.email}</td>
                <td>{emp.contact}</td>
                <td>{emp.address}</td>
                <td>
                    <Link to={`update/${emp.id}`} className="btn btn-info mr-5">Update</Link>
                    <button className="btn btn-danger" onClick={() => this.deleteEmployee(emp.id)}>Delete</button>
                </td>
            </tr>
        );
        return (
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Full name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default List;
