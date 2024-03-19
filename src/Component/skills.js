import { Box, Center, Image } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import html from './image/c1.png';
import html from './image/c2.png';
import html from './image/c3.png';
import html from './image/c4.png';






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
    <Progress className=' p-2 pl-5' percent={75} showInfo={false} />
    <h5 className='text-light mx-5'>Node JS <i class="fa-brands fa-node-js"></i></h5>
    <Progress className=' p-2 pl-5' percent={65} showInfo={false} />
    <h5 className='text-light mx-5'>MySQL <i class="icon-mysql"></i></h5>
    <Progress className=' p-1 pl-5' percent={60} showInfo={false} />
    
 
    
  </div> */}
      <Box bg={"black"}>

        <Carousel interval={1500} >
          <Carousel.Item>
            <Image w={"50%"} h={"50vh"} src={c1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <Image w={"50%"} h={"50vh"} src={c2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <Image w={"50%"} h={"50vh"} src={c3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <Image w={"50%"} h={"50vh"} src={c4} alt="fourth slide" />
          </Carousel.Item>

        </Carousel>

      </Box>


    </div >
  )
}
