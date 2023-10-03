import React from 'react';
import { useRouter } from 'next/router';

interface Portfolio {
  id: number;
  heading: string;
  content: string;
  image: string;
}

const PortfolioCard = ({ id, heading, content, image }: Portfolio) => {
  const router = useRouter();

  const handleGoToDetailPage = (id) => {
    router.push(`/portfolio/${id}`);
  };

  return (
    <div
      className="rounded-xl shadow-xl overflow-hidden cursor-pointer group flex flex-col"
      onClick={() => handleGoToDetailPage(id)}
    >
      <img
        className="w-full flex-1 object-cover group-hover:scale-110 transition-all duration-300"
        src={image}
        alt={heading}
      />
      <div className="bg-white p-6 z-10">
        <h5 className="text-5 mb-2 font-bold">{heading}</h5>
        <p className="w-full overflow-hidden overflow-ellipsis text-gray-300 whitespace-nowrap">
          {content}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
