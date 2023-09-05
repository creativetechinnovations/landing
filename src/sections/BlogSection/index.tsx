import React, { FC } from 'react';
import { data } from '@sections/BlogSection/data';

interface BlogCardProps {
  content: string;
  author: string;
  image: string;
}

const BlogCard: FC<BlogCardProps> = ({ content, author, image }) => {
  return (
    <div className="w-[280px] h-[400px] border-2 rounded-xl border-black flex flex-col">
      <div className="blog-card-header h-10 bg-yellow rounded-t-xl border-b-2 border-black flex items-center px-5">
        <span className="block w-2 h-2 rounded-full bg-black"></span>
        <span className="block w-2 h-2 rounded-full bg-black ml-2"></span>
        <span className="block w-2 h-2 rounded-full bg-black ml-2"></span>
      </div>
      <div className="blog-card-body flex-1 flex flex-col">
        <div className="p-9">
          <p className="leading-normal">{content}</p>
        </div>
        <div className="grid grid-cols-12 flex-1">
          <div className="col-span-5 relative">
            <img className="absolute -left-5 -bottom-5" src={image} alt={content} />
          </div>
          <div className="col-span-7 flex items-center">
            <p className="whitespace-break-spaces leading-normal font-semibold text-lg">{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogSection: FC = () => {
  return (
    <section className="section-container">
      <div className="section-content py-32">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="flex justify-between mt-20">
          {data.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};
