"use client"
import React, { useState, useEffect } from 'react';
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
} from '@mui/material';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddTodo from './components/AddTodo';
import Image from 'next/image';

const FormContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '600px',
  marginTop: '2rem',
  padding: '2rem',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
});

const AdminTourForm = () => {
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
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [currentImage, setCurrentImage] = useState(''); // State to hold current image for edit

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

  const handleDeleteTour = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/services/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTours(tours.filter((tour) => tour.id !== id));
        alert('Tour deleted successfully!');
      } else {
        alert('Failed to delete tour');
      }
    } catch (error) {
      console.error('Error deleting tour:', error);
      alert('Failed to delete tour');
    }
  };

  const handleEditTour = async () => {
    const form = new FormData();
    form.append('name', formData.name);
    form.append('description', formData.description);
    form.append('price', formData.price);
    form.append('elevation', formData.elevation);
    form.append('duration', formData.duration);

    // Append image only if formData.image exists
    if (formData.image) {
      form.append('image', formData.image);
    } else {
      // Append currentImage if no new image selected
      form.append('image', currentImage || ''); // Use currentImage or an empty string
    }

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

  const handleOpenEditDialog = (tour) => {
    setFormData({
      name: tour.name,
      description: tour.description,
      price: tour.price,
      elevation: tour.elevation,
      duration: tour.duration,
    });
    setEditTourId(tour.id);
    setEditMode(true);
    setOpenEditDialog(true);
    setCurrentImage(tour.image_url || ''); // Set current image for edit mode, use tour.image_url or an empty string
  };

  const handleCloseEditDialog = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      elevation: '',
      duration: '',
      image: null,
    });
    setEditTourId(null);
    setEditMode(false);
    setOpenEditDialog(false);
  };

  const backendBaseUrl = 'http://localhost:5000'; // Base URL for the backend

  return (
    <FormContainer>
      <AddTodo />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 4 }}>
        {tours.map((tour) => {
          console.log(`${backendBaseUrl}${tour.image_url}`)
          return (
          <Card key={tour.id} sx={{ maxWidth: 400, margin: '0.5rem' }}>
            <CardContent>
              <div style={{ position: 'relative', width: '100%', height: 200 }}>
                <Image
                  src={`${backendBaseUrl}${tour.image_url}`} // Use the full URL for the image
                  alt={tour.name}
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: '12px' }}
                />
              </div>
              <Typography variant="h5" component="div">
                {tour.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {tour.description}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
                Rs {tour.price} per person
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
                Elevation: {tour.elevation}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
                Duration: {tour.duration}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <IconButton color="primary" onClick={() => handleOpenEditDialog(tour)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="error" onClick={() => handleDeleteTour(tour.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
          ) 
})}
      </Box>

      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Tour</DialogTitle>
        <DialogContent>
          {currentImage && (
            <div style={{ position: 'relative', width: '100%', height: 200, marginBottom: '1rem' }}>
              <Image
                src={`${backendBaseUrl}${currentImage}`} // Use the full URL for the current image
                alt={formData.name}
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: '12px' }}
              />
            </div>
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <TextField
            margin="dense"
            label="Tour Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            margin="dense"
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            required
          />
          <TextField
            margin="dense"
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <FormControl fullWidth required margin="normal">
            <InputLabel id="edit-elevation-label">Elevation</InputLabel>
            <Select
              labelId="edit-elevation-label"
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
            margin="dense"
            label="Duration"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button onClick={editMode ? handleEditTour : handleAddTour} variant="contained" color="primary">
            {editMode ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </FormContainer>
  );
};

export default AdminTourForm;
