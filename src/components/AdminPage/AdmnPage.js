import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customers data from the backend API
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/api/customers', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}` // Send JWT token for authorization
          }
        });
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Admin Page - List of Customers</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
