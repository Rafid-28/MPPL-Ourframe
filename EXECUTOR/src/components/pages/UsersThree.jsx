// import React from 'react';
// import './style1.css';

// const UsersThree = ({ className }) => (
//   <div className={className}>
//     {/* SVG or icon code */}
//     UsersThree Icon
//   </div>
// );

// export default UsersThree;

import React from 'react';
import './style2.css';

export const UsersThree = () => {
  return(
    <div className= "users-three-screen">
      <div className= "overlap-group">
        <img className="vector" alt="Vector" src="image.svg"/>
        <img className="img" alt="Vector" src="vector-2.svg"/>
        <img className="vector-2" alt="Vector" src="./images/UsersFour.png"/>
        <img className="vector-3" alt="Vector" src="vector-4.svg"/>
        <img className="vector-4" alt="Vector" src="vector-5.svg"/>
        <img className="vector-5" alt="Vector" src="vector-6.svg"/>
      </div>
    </div>
  );
};