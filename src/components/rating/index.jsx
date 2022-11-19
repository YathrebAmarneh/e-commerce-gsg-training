import { Stack, Rating } from "@mui/material";
const RatingStars = ({ rating }) => {
  return (
    <>
      <Stack spacing={2}>
        <Rating value={rating} precision={0.1} />
      </Stack>
    </>
  );
};

export default RatingStars;
