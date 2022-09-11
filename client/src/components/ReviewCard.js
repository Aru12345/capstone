import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Cont } from "../Cont";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { Box } from "@mui/system";
import Stack from "@mui/system/Stack";
import "./stylingfolder/EditReservation.css";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
  width:200,
 
 
}));

function ReviewCard({review,handleDelete}){
  const {user}=useContext(Cont);
    const{id,img,r,picture,user:reviewuser}=review
    function handleDeleteClick() {
        fetch(`/reviews/${review.id}`, {
          method: "DELETE",
        })
          handleDelete(review.id)
      }
    return(
        <>
        <Card sx={{ maxWidth: 425 }} >
        <CardMedia
        component="img"
        height="260"
        src={img}
        alt="pic"
      />
      <CardContent> 
        <Typography variant="body2" color="text.secondary">
          {r}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        By {review.user.name}
        </Typography>
      </CardContent>
      
        {/* <Button size="small">Share</Button> */}
        {/* <Stack margin={2} marginRight={4}> */}
        <Box textAlign='center' marginBottom={2}>
        {user.id===reviewuser.id&&
        <ColorButton className="extraf" variant="contained"  onClick={handleDeleteClick} >
          
            Delete
          </ColorButton>
         }
         </Box>
          {/* </Stack>
    */}
        {/* <img src={img}/>
      <img src={picture} /> */}
        {/* <p></p>
        <p>{r}</p>
        <h6>By {review.user.name}</h6> */}
                
        {/* {user.id===reviewuser.id&&<button  onClick={handleDeleteClick}  >Delete</button>} */}
        </Card>
        </>
    )
}
export default ReviewCard;