import React from 'react';
import './style2.css';

export const UsersFour = () => {
  return(
    <div className= "users-four-screen">
      <div className= "overlap-group">
        <img className="vector" alt="Vector" src="image.svg"/>
        <img className="img" alt="Vector" src="vector-2.svg"/>
        <img className="vector-2" alt="Vector" src="vector-5.svg"/>
        <img className="vector-3" alt="Vector" src="vector-6.svg"/>
      </div>
      
      <div className= "overlap">
        <img className="vector" alt="Vector" src="vector-3.svg"/>
        <img className="img" alt="Vector" src="vector-4.svg"/>
        <img className="vector-2" alt="Vector" src="vector-7.svg"/>
        <img className="vector-3" alt="Vector" src="vector-8.svg"/>
      </div>
    </div>
  );
};

// const UsersFour = ({ className }) => (
//   <div className={className}>
//     {
//           <div className= "users-four-screen">
//       <div className= "overlap-group">
//         <img className="vector" alt="Vector" src="image.svg"/>
//         <img className="img" alt="Vector" src="vector-2.svg"/>
//         <img className="vector-2" alt="Vector" src="vector-5.svg"/>
//         <img className="vector-3" alt="Vector" src="vector-6.svg"/>
//       </div>
      
//       <div className= "overlap">
//         <img className="vector" alt="Vector" src="vector-3.svg"/>
//         <img className="img" alt="Vector" src="vector-4.svg"/>
//         <img className="vector-2" alt="Vector" src="vector-7.svg"/>
//         <img className="vector-3" alt="Vector" src="vector-8.svg"/>
//       </div>
//     </div>
//     }
//     UsersThree Icon
//   </div>
// );

// export default UsersFour;