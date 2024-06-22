import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        full_name: '',
        email: '',
        contact: '',
        address: ''
    });

    // Input Change Handler
    const changeHandler = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    // Submit Form
    const submitForm = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await fetch(`http://127.0.0.1:8000/employee/${id}/`, {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const data = await response.json();
            console.log(data);
            navigate('/'); // Navigate to another page after successful update (optional)
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    // Fetch Data
    const fetchData = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/employee/${id}/`);
            const data = await response.json();
            setUser({
                full_name: data.full_name,
                email: data.email,
                contact: data.contact,
                address: data.address
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]); // Fetch data when the component mounts and when `id` changes

    return (
        <form onSubmit={submitForm}>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Full Name</th>
                        <td>
                            <input value={user.full_name} name="full_name" onChange={changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                            <input value={user.email} name="email" onChange={changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Contact</th>
                        <td>
                            <input value={user.contact} name="contact" onChange={changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>
                            <input value={user.address} name="address" onChange={changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default Update;
