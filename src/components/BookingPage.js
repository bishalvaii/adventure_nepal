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
import { v4 as uuidv4 } from 'uuid'; // Import uuid


function BookingForm() {
    const [loading, setLoading] = useState(false)
    const router = useRouter();
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
    const { service_name, duration, description, price, imageUrl, imageWidth, imageHeight } = router.query;
    console.log(service_name, price)
    const purchaseOrderId = uuidv4(); // Generate a unique purchase order ID

    // Retrieve username from localStorage
    const username = typeof window !== 'undefined' ? localStorage.getItem('username') : null;

    const handleChangeAdults = (event) => {
        setNumAdults(parseInt(event.target.value));
        console.log(numAdults)
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));


    };




    const handleSubmit = async (event) => {
        event.preventDefault();

        // Basic validation example (you can expand this as needed)
        if (!formData.firstName || !formData.lastName || !formData.phone || !formData.address || !formData.city || !formData.country) {
            toast.error('Please fill out all required fields.');
            return;
        }

        try {
            setLoading(true);

            // Initiate payment
            const paymentResponse = await fetch('http://localhost:5000/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: price * numAdults,
                    purchaseOrderId: purchaseOrderId,
                    purchaseOrderName: service_name,
                    customerInfo: {
                        name: `${formData.firstName} ${formData.lastName}`,
                        email: formData.email,
                        phone: formData.phone,
                    },
                }),
            });

            if (!paymentResponse.ok) {
                throw new Error('Failed to initiate payment');
            }

            const paymentData = await paymentResponse.json();
            console.log(paymentData)
            const paymentUrl = paymentData.payment_url;
            console.log(paymentUrl);

            // Redirect user to payment gateway
            window.location.href = paymentUrl;

            // Assuming payment is confirmed by the gateway and callback handled separately

            // Proceed to submit booking after payment success (simplified assumption)
            const bookingResponse = await fetch('http://localhost:5000/api/bookings', {
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

            if (bookingResponse.ok) {
                console.log('Booking created successfully');
                toast.success('Booking created successfully');
            } else {
                console.error('Failed to create booking');
                toast.error('Failed to create booking');
            }
        } catch (error) {
            console.error('Error handling booking and payment:', error);
            toast.error('Error handling booking and payment');
        } finally {
            setLoading(false);
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
                            <MenuItem value="eSewa">Pay via Khalti</MenuItem>
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
                    <Button type="submit"
                        variant="contained"
                        sx={{ bgcolor: "#596398" }}
                        disabled={loading}
                        onClick={handleSubmit}
                    >
                        {loading ? "Submitting.." : "Submit"}
                    </Button>
                </Box>
            </form>
        </Box>
    );
}

export default BookingForm;
