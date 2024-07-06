"use client"
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box } from '@mui/material';

const Payments = () => {
  const [payments, setPayments] = useState([]);

  const fetchAdminPayments = async () => {
    try {
      const response = await fetch('http://localhost:5000/admin/payments'); // Adjust the API endpoint URL accordingly
      if (!response.ok) {
        throw new Error('Failed to fetch Payments');
      }
      const data = await response.json();
      setPayments(data);
    } catch (error) {
      console.error('Error fetching Payments:', error);
    }
  };

  useEffect(() => {
    fetchAdminPayments()
  }, [])

  

  return (
    <Box sx={{display: 'flex', gap: 3}} >

   
        <>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{backgroundColor: 'gray'}}>
                <TableCell>Payment ID</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Transaction ID</TableCell>
                <TableCell>Total amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Service Name</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Purchase ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.id}</TableCell>
                  <TableCell>{payment.username}</TableCell>


                  <TableCell>{payment.transaction_id}</TableCell>
                  <TableCell>{payment.total_amount}</TableCell>
                  <TableCell>{payment.status}</TableCell>
                  <TableCell>{payment.purchase_order_name}</TableCell>
                  <TableCell>{payment.mobile}</TableCell>
                  <TableCell>{payment.purchase_order_id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </>
    

    </Box>
  );
};

export default Payments;
