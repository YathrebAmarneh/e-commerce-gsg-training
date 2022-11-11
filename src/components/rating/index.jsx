import { Stack, Rating } from "@mui/material";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
const RatingStars = ({ rating }) => {
  const [value, setValue] = useState(0);
  // console.log("type", typeof null);
  console.log("rating", rating);
  const handleChange = (e) => {
    let newValue = e.target.value;
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <>
      <Stack spacing={2}>
        <Rating
          value={rating}
          icon={<AiFillStar color="#FF6008" />}
          precision={0.1}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
};

export default RatingStars;
