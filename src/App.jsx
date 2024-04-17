import React from 'react';
import Card from './CardComponent/Cards';
import Sdata from './DataComponent/Sdata';
import { Link }from "react-router-dom";
console.log(Sdata);

const App = () => {
    return (
        // ReactDOM.render(
        <>
            {/* <NextPage /> */}
            <h1 className='heading_style'> Top 5 Netflix  Original Series </h1>
            <Link to="/NextPage">
            <button>Click open</button>
            </Link>
            {/* <FavS /> */}

           

            {/* Map Method use for call Card */}
            {/* function ncard(val) {
                return (
                <Card
                    key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}
                />
            );
            }
            {Sdata.map(ncard)} */}


            {/* second Method MAP Inline call */}
            {/* {Sdata.map(function ncard(val) {
                return (
                    <Card
                        key={val.id}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link}
                    />
                );
            })} */}

            {/*therd Method Fat Arrow */}
            {Sdata.map((val) => {
                return (
                    <Card
                        key={val.id}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link}
                    />
                );
            })}

        </>

    )
}
export default App;