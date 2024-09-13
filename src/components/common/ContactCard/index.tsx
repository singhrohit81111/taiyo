// Card.tsx
import React from "react";

interface CardProps {
  firstName:string,
  lastName:string,
  status:string
}

const Card: React.FC<CardProps> = ({ firstName, lastName, status }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-scroll">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 !flex justify-between">
          <div>First Name :</div>
          <div>{firstName}</div>
        </h2>
        <h2 className="text-xl font-semibold mb-2 !flex justify-between">
          <div>Last Name :</div>
          <div>{lastName}</div>
        </h2>
        <p className="text-gray-700 !flex justify-between">
          <div>Status :</div>
          <div>{status}</div>
        </p>
        <div className="flex justify-between">
          <button style={{backgroundColor:'red',borderRadius:'8px',padding:'5px'}}>Delete</button>
          <button style={{backgroundColor:'green',borderRadius:'8px',padding:'5px'}}>  Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
