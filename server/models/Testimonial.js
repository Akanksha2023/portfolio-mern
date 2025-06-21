import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mentions: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    imgPath: {
      type: String,
      default: "/images/default-user.png", // fallback image
    },
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt fields
  }
);

const Testimonial = mongoose.model("Testimonial", TestimonialSchema);
export default Testimonial;
