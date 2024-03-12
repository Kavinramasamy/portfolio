import { Box, Center, Image } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import html from './image/html.png';
import css from './image/css.png';
import bootstrap from './image/bootstrap.png';
import reactjs from './image/reactjs.png';
import useformik from './image/useformik.png';
import materialui from './image/materialui.png';
import mongodb from './image/mongodb.png';
import nodejs from './image/nodejs.png';
import js from './image/js.png';
import redux from './image/redux.png';
import mysql from './image/mysql.png';





export default function skills() {
  return (
    <div className="skill" ><h2 className='active text-light'>Skills:</h2>

      {/* <div className=''>
    <h5 className='text-light mx-5'>HTML <i class="fa-brands fa-html5"></i></h5> 
    <Progress className=' p-2 pl-5' percent={90} showInfo={false}/>
    <h5 className='text-light mx-5'>CSS <i class="fa-brands fa-css3-alt"></i></h5>
    <Progress className=' p-2 pl-5' percent={90} showInfo={false} />
    <h5 className='text-light mx-5'>Bootstrap <i class="fa-brands fa-bootstrap"></i></h5>
    <Progress className=' p-2 pl-5' percent={85} showInfo={false} />
    <h5 className='text-light mx-5'>Javascript <i class="fa-brands fa-js"></i></h5>
    <Progress className=' p-2 pl-5' percent={80} showInfo={false}/>
    <h5 className='text-light mx-5'>React <i class="fa-brands fa-react"></i></h5>
    <Progress className=' p-2 pl-5' percent={80} showInfo={false} />
    <h5 className='text-light mx-5'>Mongodb <i class="icon-mongodb"></i></h5>
    <Progress className='p-2 pl-5' percent={75} showInfo={false} />
    <h5 className='text-light mx-5'>Node JS <i class="fa-brands fa-node-js"></i></h5>
    <Progress className=' p-2 pl-5' percent={65} showInfo={false} />
    <h5 className='text-light mx-5'>MySQL <i class="icon-mysql"></i></h5>
    <Progress className=' p-1 pl-5' percent={60} showInfo={false} />
    
 
    
  </div> */}
      <Box bg={"black"}>

        <Carousel interval={1500} >
          <Carousel.Item>
            <Image w={"50%"} h={"50vh"} src={html} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <Image w={"50%"} h={"50vh"} src={css} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <Image w={"50%"} h={"50vh"} src={bootstrap} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <Image w={"50%"} h={"50vh"} src={materialui} alt="fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <Image w={"50%"} h={"50vh"} src={reactjs} alt="fivth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <Image w={"50%"} h={"50vh"} src={useformik} alt="sixth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <Image w={"50%"} h={"50vh"} src={mongodb} alt="seventh slide" />
          </Carousel.Item>
          <Carousel.Item>
            <Image w={"50%"} h={"50vh"} src={mysql} alt="eighth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <Image w={"50%"} h={"50vh"} src={nodejs} alt="nineth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <Image w={"50%"} h={"50vh"} src={js} alt="tenth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <Image w={"50%"} h={"50vh"} src={redux} alt="eleventh slide" />
          </Carousel.Item>
        </Carousel>

      </Box>


    </div >
  )
}
