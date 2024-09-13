// CardList.tsx
import React from "react";
import ContactCard from "../../components/common/ContactCard";
import { cardData } from "../../config/constants";
import { useNavigate } from "react-router-dom";
import { CRAETE_CONTACT } from "../../config/pathName";

const CardList: React.FC = () => {
  const navigate=useNavigate();
  return (
    <div className="flex-1">
        <div className="flex justify-center mt-4">
        <button className="bg-blue-500 text-white text-lg md:text-xl lg:text-2xl p-3 md:p-4 rounded-md border-2 border-transparent hover:bg-blue-600 transition-colors duration-300"
        onClick={()=>navigate(`${CRAETE_CONTACT}`)}
        >
          Create Contact
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 flex-1">
        {cardData.map((card) => (
          <ContactCard
            key={card.id}
            firstName={card.firstName}
            lastName={card.lastName}
            status={card.status}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
