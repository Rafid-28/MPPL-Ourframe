import React from 'react';
import UsersFour from './UsersFour';
import './style3.css';

const UsersFive = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <div className="overlap">
            <UsersFour className="users-four" />
            <UsersFour className="users-four-instance" />
          </div>
          <div className="text-wrapper">7 - 10 People</div>
        </div>
      </div>
    </div>
  );
};

export default UsersFive;