import React from 'react';
// import ReactDOM from 'react-dom'; 
import Images from './Images';
import Heading from './Heading';
import Title from './Title';
import Link from './Link';

function Card(props) {
  // console.log(props);
  return (
    <>
      <div className='cards'>
        <div className='card'>
          <Images imgsrc={props.imgsrc} />
          <div className='card__info'>
            <Title title={props.title} />
            <Heading sname={props.sname} />
            <Link link={props.link} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Card;