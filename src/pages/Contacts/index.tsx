// CardList.tsx
import React from "react";
import ContactCard from "../../components/common/ContactCard";
import { cardData } from "../../config/constants";

const CardList: React.FC = () => {
  return (
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
  );
};

export default CardList;
