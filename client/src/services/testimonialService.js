import axios from "axios";

const API_URL = "http://localhost:5000/api/testimonials"; // Use your deployed URL in production

export const getTestimonials = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const postTestimonial = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};
