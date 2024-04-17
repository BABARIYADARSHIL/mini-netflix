import React from "react";
import Amazon from "../Amazon";
import Netflix from "../Netflix";

const favSeries = "Amazon";

// const FavS = () => {

//     if (favSeries === "netflix") {
//         return (
//             <Netflix />
//         );
//     } else if (favSeries === "Amazon") {
//         return (
//             <Amazon />
//         );

//     } else {
//         return (
//             console.log("no data")
//         )
//     };
// }

const NextPage = () => {
    return (
        <>
            {favSeries === "Amazon" ? <Amazon /> : <Netflix />}

        </>
    )
}
export default NextPage;