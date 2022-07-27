import * as React from 'react';
import Box from '@mui/material/Box';
import Item from "./style";
import Carousel from "react-elastic-carousel";
import one from '/home/amrutanejkar/Desktop/React/my-app/src/images/one.jpeg';
import two from '/home/amrutanejkar/Desktop/React/my-app/src/images/two.jpeg';
import three from '/home/amrutanejkar/Desktop/React/my-app/src/images/three.jpeg'

const Slider = () => {
  return (

    <Box sx={{ width: 600, paddingTop: '200px',marginLeft:'40px'}}>
      <Carousel>
        <Item> <img src={one} alt="img" height="500px"/></Item>
        <Item><img src={two} alt="img" height="500px" /></Item>
        <Item><img src={three} alt="img" height="500px"/></Item>
        <Item><img src={one} alt="img" height="500px"/></Item>
        <Item><img src={two} alt="img"height="500px" /></Item>
        <Item><img src={three} alt="img" height="500px"/></Item>
        <Item><img src={one} alt="img" height="500px"/></Item>
        <Item><img src={two} alt="img" height="500px"/></Item>
        <Item><img src={three} alt="img" height="500px"/></Item>
      </Carousel>
    </Box>

  );
}

export default Slider;



