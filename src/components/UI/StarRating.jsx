import React, { useState } from "react";
import Rating from "react-rating";

function StarRating() {
  const [value, setValue] = useState(0);

  return (
    <div className="">
      {/* <h3>Rate this:</h3> */}
      <Rating
        initialRating={value}
        onChange={(rate) => setValue(rate)}
        emptySymbol={
            <span style={{ color: "black", fontSize: "4rem"}}>☆</span>
        }
        fullSymbol={
            <span style={{color: "yellow", fontSize: "4rem"}}>★</span>
        }
      />
    </div>
  );
}
 export default StarRating;












// import React, { useState } from "react";
// import StarRatingComponent from "react-star-rating-component";

// function StarRating() {
//   const [rating, setRating] = useState(3);

//   return (
//     <div>
//       <h3>Rate this:</h3>
//       <StarRatingComponent
//         name="rating"
//         starCount={5}
//         value={rating}
//         onStarClick={(nextValue) => setRating(nextValue)}
//       />
//     </div>
//   );
// }

// export default StarRating;
