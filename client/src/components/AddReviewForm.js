import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Cont } from "../Cont";
import "./stylingfolder/EditReservation.css";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

/*Imported from Mui */
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
  width: 200,
  marginRight: 100,
}));

function AddReviewForm({ handleAddReviews }) {
  const { user } = useContext(Cont);
  const params = useParams();
  const [img, setImg] = useState("");
  const [r, setR] = useState("");

  const newReview = {
    img,
    r,
    restaurant_id: params.id,
    user_id: user.id,
  };
  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newReview),
  };

  function handleReviewSubmit(event) {
    event.preventDefault();
    fetch(`/reviews`, configObj)
      .then((r) => r.json())
      .then((review) => {
        handleAddReviews(review);
        setR("");
        setImg("");
      });
  }

  return (
    <>
      <div className="overlay5">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleReviewSubmit}
        >
          <h1 className="editheadings1">Write a Review</h1>

          <FormControl className="inputstyle">
            <InputLabel htmlFor="component-outlined">Image Url</InputLabel>
            <OutlinedInput
              type="text"
              name="img"
              id="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              label="Name"
            />
          </FormControl>

          <FormControl className="inputstyle">
            <InputLabel htmlFor="component-outlined">Review</InputLabel>
            <OutlinedInput
              type="text"
              name="r"
              id="r"
              value={r}
              onChange={(e) => setR(e.target.value)}
              label="r"
            />
          </FormControl>
          <Box marginRight={2}>
            <ColorButton variant="contained" type="submit">
              Add a Review
            </ColorButton>
          </Box>
        </Box>
      </div>
    </>
  );
}
export default AddReviewForm;
