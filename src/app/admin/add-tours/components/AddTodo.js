"use client"
import {
    TextField,
    Button,
    Typography,
    Box,
    Container,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Card,
    CardContent,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
  } from '@mui/material';import React, { useEffect, useState } from 'react'

const AddTodo = () => {
    const [tours, setTours] = useState([]);
    const [formData, setFormData] = useState({
      name: '',
      description: '',
      price: '',
      elevation: '',
      duration: '',
      image: null,
    });
    const [editMode, setEditMode] = useState(false);
    const [editTourId, setEditTourId] = useState(null);
  
    useEffect(() => {
      fetchTours();
    }, []);
  
    const fetchTours = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/services');
        if (response.ok) {
          const toursData = await response.json();
          setTours(toursData);
        } else {
          console.error('Failed to fetch tours');
        }
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleImageChange = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        image: e.target.files[0],
      }));
    };
  
    const handleAddTour = async (e) => {
      e.preventDefault();
      const form = new FormData();
      form.append('name', formData.name);
      form.append('description', formData.description);
      form.append('price', formData.price);
      form.append('elevation', formData.elevation);
      form.append('duration', formData.duration);
      form.append('image', formData.image);
  
      try {
        const response = await fetch('http://localhost:5000/api/services', {
          method: 'POST',
          body: form,
        });
  
        if (response.ok) {
          const newTour = await response.json();
          setTours([...tours, newTour]);
          setFormData({
            name: '',
            description: '',
            price: '',
            elevation: '',
            duration: '',
            image: null,
          });
          alert('Tour added successfully!');
        } else {
          alert('Failed to add tour');
        }
      } catch (error) {
        console.error('Error adding tour:', error);
        alert('Failed to add tour');
      }
    };
  
    
  
    const handleEditTour = async () => {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('description', formData.description);
      form.append('price', formData.price);
      form.append('elevation', formData.elevation);
      form.append('duration', formData.duration);
      form.append('image', formData.image);
  
      try {
        const response = await fetch(`http://localhost:5000/api/services/${editTourId}`, {
          method: 'PUT',
          body: form,
        });
  
        if (response.ok) {
          const updatedTour = await response.json();
          const updatedTours = tours.map((tour) =>
            tour.id === updatedTour.id ? updatedTour : tour
          );
          setTours(updatedTours);
          setFormData({
            name: '',
            description: '',
            price: '',
            elevation: '',
            duration: '',
            image: null,
          });
          setEditMode(false);
          setOpenEditDialog(false);
          alert('Tour updated successfully!');
        } else {
          alert('Failed to update tour');
        }
      } catch (error) {
        console.error('Error updating tour:', error);
        alert('Failed to update tour');
      }
    };
  
  
  
  
  return (
    <div>
        <Typography variant="h4" component="h1" gutterBottom>
        Manage Tours
      </Typography>
      <form onSubmit={editMode ? handleEditTour : handleAddTour} style={{ width: '100%', color: 'white' }}>
        <TextField
          label="Tours Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          
          required
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={4}
          required
          margin="normal"
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleInputChange}
          fullWidth
          required
          margin="normal"
        />
        <FormControl fullWidth required margin="normal">
          <InputLabel id="elevation-label">Elevation</InputLabel>
          <Select
            labelId="elevation-label"
            name="elevation"
            value={formData.elevation}
            onChange={handleInputChange}
          >
            <MenuItem value="1000-2000m">1000-2000m</MenuItem>
            <MenuItem value="2000-3000m">2000-3000m</MenuItem>
            <MenuItem value="3000-4000m">3000-4000m</MenuItem>
            <MenuItem value="4000-5000m">4000-5000m</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Duration"
          name="duration"
          value={formData.duration}
          onChange={handleInputChange}
          fullWidth
          required
          margin="normal"
        />
        <Button
          variant="contained"
          component="label"
          fullWidth
          sx={{ mt: 2, mb: 2 }}
        >
          Upload Image
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            hidden
            required
          />
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ bgcolor: '#596398' }}
        >
          {editMode ? 'Update Tour' : 'Add Tour'}
        </Button>
      </form>
      
      
    </div>
  )
}

export default AddTodo