import React from 'react'
import Card from './CardComponent/Cards'
import Sdata from './DataComponent/Sdata';
// console.log(Sdata[0]);
function Amazon() {
  console.log("Card Data:", Sdata[1]);
  return (
    <>
      <Card
        key={Sdata[1].id}
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].link}
      />

    </>
  );
};


export default Amazon;