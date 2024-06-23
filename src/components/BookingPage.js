import React, { useState, useEffect } from 'react';
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Button,
    TextareaAutosize,
} from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

function BookingForm() {
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const { service_name } = router.query;
    const [numAdults, setNumAdults] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        state: '',
        requirements: '',
        payment: '',
    });

    // Retrieve username from localStorage
    const username = typeof window !== 'undefined' ? localStorage.getItem('username') : null;

    const handleChangeAdults = (event) => {
        setNumAdults(parseInt(event.target.value));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === 'payment' && value === 'eSewa') {
            handleKhaltiPayment();
        }
    };

//     const esewaCall = (formData) => {
//     console.log('formData:', formData);

//     var path = 'https://rc-epay.esewa.com.np/api/epay/main/v2/form';


//     return (
//         <form action={path} method="POST">

//         </form>
//     )

//     var form = document.createElement('form');
//     form.setAttribute('method', 'POST');
//     form.setAttribute('action', path);

//     for (var key in formData) {
//         var hiddenField = document.createElement('input');
//         hiddenField.setAttribute('type', 'hidden');
//         hiddenField.setAttribute('name', key);
//         hiddenField.setAttribute('value', formData[key]);
//         form.appendChild(hiddenField);
//     }

//     document.body.appendChild(form);
//     form.submit();
// };


    const handleKhaltiPayment = async () => {
        setLoading(true);
        // const uuid = Math.random().toString(36).substring(2, 15);
        // const reqBody = {
        //     amount: 100, // Amount can be set dynamically
        //     tax_amount: 0,
        //     product_code: 'EPAYTEST',
        //     product_service_charge: 0,
        //     product_delivery_charge: 0,
        //     total_amount: 100,
        //     transaction_uuid: uuid,
        //     success_url: 'https://esewa.com.np',
        //     failure_url: 'https://your-domain.com/failure', // Replace with your actual failure URL
        //     signed_field_names: 'total_amount,transaction_uuid,product_code',
        // };
    
        try {
            const response = await fetch('http://localhost:5000/api/payment', {
                method: 'POST',
                // body: JSON.stringify(reqBody),
                headers: { 'Content-Type': 'application/json' },
            });
    
            if (!response.ok) {
                throw new Error('Failed to initiate payment');
            }
    
            const data = await response.json();
            console.log(data);
            const paymentUrl = data.payment_url
            console.log(paymentUrl)
            window.location.href = paymentUrl
            // Log the response for debugging
    
            // Call esewaCall with the response data
           
            // second request to esewa api

       

           if (paymentUrl) {
            toast.success('NiCE JOB')
           }
    
        } catch (error) {
            console.error('Error initiating payment:', error);
            toast.error('Response wasnt made to API');
        } finally {
            setLoading(false);
        }
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    username: username,
                    service_name: service_name,
                    payment: formData.payment,
                    adults: numAdults,
                }),
            });
            if (response.ok) {
                console.log('Booking created successfully');
                toast.success('Booking created successfully');
                router.push('/bookingconfirmation');
            } else {
                console.error('Failed to create booking');
            }
        } catch (error) {
            console.error('Error creating booking:', error);
        }
    };

    return (
        <Box
            className="booking-form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '600px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                padding: '20px',
                margin: '20px auto',
            }}
        >
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                Booking Information
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <Typography variant="h5" sx={{ mt: 2, mb: 1, fontWeight: 'bold', fontSize: 30 }}>{service_name}</Typography>
                {/* Traveler Information Section */}
                <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                    Traveler Information
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                    <Typography variant="body2">Adults (18+):</Typography>
                    <TextField
                        label="How Many?"
                        type="number"
                        name="adults"
                        value={numAdults}
                        onChange={handleChangeAdults}
                        InputLabelProps={{ shrink: true }}
                        min={1}
                        sx={{ ml: 1 }}
                    />
                </Box>
                <hr />

                {/* Payment Information Section */}
                <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                    Payment Information
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                    <Typography variant="body2">I will pay:</Typography>
                    <FormControl sx={{ minWidth: 250, ml: 1.5 }}>
                        <InputLabel id="payment-label">Pay</InputLabel>
                        <Select
                            labelId="deposit-label"
                            id="payment"
                            name="payment"
                            value={formData.payment}
                            onChange={handleChange}
                            label="Deposit"
                        >
                            <MenuItem value="eSewa">Pay via Esewa</MenuItem>
                            <MenuItem value="cashOnArrival">Cash on Arrival</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <hr />

                {/* Contact Information Section */}
                <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                    Contact Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Box display="flex" gap="1rem">
                        <TextField
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            sx={{ flex: 1 }}
                        />
                        <TextField
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            sx={{ flex: 1 }}
                        />
                    </Box>
                    <Box display="flex" gap="1rem">
                        <TextField
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            sx={{ flex: 1 }}
                        />
                        <TextField
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            sx={{ flex: 1 }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1rem', mt: 2 }}>
                        <TextField
                            label="City"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                        <FormControl sx={{ minWidth: 210 }}>
                            <InputLabel id="country-label">Country</InputLabel>
                            <Select
                                labelId="country-label"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                label="Country"
                                required
                            >
                                <MenuItem value="">Select Country</MenuItem>
                                <MenuItem value="Nepal">Nepal</MenuItem>
                                <MenuItem value="USA">USA</MenuItem>
                                <MenuItem value="India">India</MenuItem>
                                <MenuItem value="China">China</MenuItem>
                                <MenuItem value="Japan">Japan</MenuItem>
                                <MenuItem value="Germany">Germany</MenuItem>
                                <MenuItem value="UK">UK</MenuItem>
                                <MenuItem value="Australia">Australia</MenuItem>
                                <MenuItem value="France">France</MenuItem>
                                <MenuItem value="Canada">Canada</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <hr />

                {/* Requirements Section */}
                <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                    Your Requirements
                </Typography>
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <Typography variant="body2">Special Requirements:</Typography>
                    <Box sx={{ width: '100%' }}>
                        <TextareaAutosize
                            minRows={5}
                            placeholder="Enter any special requirements you may have..."
                            name="requirements"
                            value={formData.requirements}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        />
                    </Box>
                </Box>
                <Box sx={{ mt: 3, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <Button type="submit" variant="contained" sx={{ bgcolor: "#596398" }}>
                        Submit Booking
                    </Button>
                </Box>
            </form>
        </Box>
    );
}

export default BookingForm;
