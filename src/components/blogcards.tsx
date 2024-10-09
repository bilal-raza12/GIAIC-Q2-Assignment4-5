import React from "react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  blogImage: string;
}
const BlogCards = ({ title, description, slug, blogImage }: BlogCardProps) => {
  return (
    <div className= "cards bg-white shadow-md rounded-lg overflow-hidden ;">
      <img src={blogImage} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 ">{description}</p>
        <Link href={`/blogs/${slug}`}>
          <button className="text-blue-500  border-2 ">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCards;
