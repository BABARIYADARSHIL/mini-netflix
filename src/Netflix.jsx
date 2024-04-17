import React from 'react'
import Card from './CardComponent/Cards'
import Sdata from './DataComponent/Sdata';
// console.log(Sdata[0]);

const Netflix = () => {
  console.log("Card Data:", Sdata);
  return (
    <>
      <Card
        key={Sdata[0].id}
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].link}
      />
     
    </>

  );
  // </>
};


export default Netflix;