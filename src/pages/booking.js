
import BookingForm from '@/components/BookingPage';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer component
import 'react-toastify/dist/ReactToastify.css'; // Import ToastContainer CSS

function BookingPage() {
  return (
    <>
      <ToastContainer /> {/* Render ToastContainer component */}
      <BookingForm /> {/* Render your BookingForm component */}
    </>
  );
}

export default BookingPage;
