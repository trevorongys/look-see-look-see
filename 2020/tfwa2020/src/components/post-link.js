import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => {
  const { path, title, from, featuredImage } = post
  const { src, width, height } = featuredImage.childImageSharp.resize
  return (
    <div className="w-full p-2 pb-8 sm:w-1/2 sm:px-2 md:w-1/3 md:px-4">
      <Link to={path} className="hover:no-underline">
        <img
          src={src}
          alt={title}
          width={width}
          height={height}
          className="w-full"
        />
        <div className="mt-2 text-center text-black uppercase flex flex-col border-solid border border-black h-18 sm:h-24 md:h-32 lg:h-24 px-2">
          <p className="flex-grow tracking-widest">{title}</p>
          <p>From SGD{from}++</p>
        </div>
      </Link>
    </div>
  )
}
export default PostLink
