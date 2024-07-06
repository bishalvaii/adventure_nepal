"use client"
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box } from '@mui/material';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchAdminBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/admin/bookings'); // Adjust the API endpoint URL accordingly
      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    fetchAdminBookings()
  }, [])

  

  return (
    <Box sx={{display: 'flex', gap: 3}} >

   
        <>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{backgroundColor: 'gray'}}>
                <TableCell>Booking ID</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Service Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Adults</TableCell>
                <TableCell>Payment</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>{booking.username}</TableCell>
                  <TableCell>{booking.service_name}</TableCell>
                  <TableCell>{booking.email}</TableCell>
                  <TableCell>{booking.phone}</TableCell>
                  <TableCell>{booking.country}</TableCell>
                  <TableCell>{booking.adults}</TableCell>
                  <TableCell>{booking.payment}</TableCell>
                  <TableCell>{booking.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </>
    

    </Box>
  );
};

export default Bookings;
