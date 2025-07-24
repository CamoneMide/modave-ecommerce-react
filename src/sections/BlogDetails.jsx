import React from "react";
import { Link, useParams } from "react-router-dom";
import { newsSects, socsIcons } from "../constants";
import { useState, useEffect } from "react";
import {
  Calendar,
  User,
  Facebook,
  Twitter,
  Instagram,
  Share2,
} from "lucide-react";
import { Container } from "../components";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = React.useState(null);
  const [comment, setComment] = useState({
    name: "",
    email: "",
    message: "",
  });

  React.useEffect(() => {
    const foundBlog = newsSects.find((b) => b.id === Number(blogId));
    setBlog(foundBlog);
  }, [blogId]);

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    // In a real app, this would send the comment to an API
    console.log("Comment submitted:", comment);
    // Reset form
    setComment({
      name: "",
      email: "",
      message: "",
    });
    alert("Comment submitted successfully!");
  };

  if (!blog) {
    return (
      <div className="max-w-4xl px-4 py-12 mx-auto text-center">
        <h1 className="mb-4 text-2xl font-bold">Blog Post Not Found</h1>
        <p className="mb-4">The blog post you're looking for doesn't exist.</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Return to homepage
        </Link>
      </div>
    );
  }

  // if (!blog) {
  //   return <div>Blog not found</div>;
  // }

  return (
    <>
      <div className="bg-white">
        <div className="relative w-full h-64 md:h-80 lg:h-[568px]">
          <img
            src={blog.src || "/placeholder.svg"}
            alt={blog.title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <Container className={"max-w-[970px]"}>
        <div className="relative px-4 py-8 -mt-[135px] bg-white md:px-8 rounded-t-3xl">
          <div className="mb-8 text-center">
            <div className="mb-4 text-[16px] text-[var(--text-color)] cursor-pointer">
              <span className="py-[4px] px-[16px] bg-[#f7f7f7] rounded-[40px] hover:text-[var(--text-color-active)] navTrans">
                {blog.category}
              </span>
            </div>
            <h1 className="mb-4 text-2xl font-[500] md:text-3xl lg:text-[40px] text-[var(--text-color)]">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-[18px] text-[var(--text-color)]">
              <div className="flex items-center gap-1 ">
                <Calendar size={20} />
                <span className="uppercase">
                  {blog.month},{blog.day}, 2024
                </span>
              </div>
              <div className="flex items-center gap-1">
                <User size={20} />
                <span>by {blog.author}</span>
              </div>
            </div>
          </div>

          <div className="mb-8 space-y-4 text-[var(--text-color)] text-[18px]">
            {blog.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Fashion Images */}
          <div className="grid grid-cols-2 gap-5 mb-8 md:grid-cols-2">
            {blog.images.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Fashion image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Second Article Section */}
          <div className="mb-8">
            <h2 className="mb-4 text-[28px] font-[500] md:text-3xl lg:text-[40px] text-[var(--text-color)]">
              {blog.secondaryTitle}
            </h2>
            {blog.secondaryContent.map((paragraph, index) => (
              <p
                key={index}
                className="mb-4 text-[18px] font-[400] text-[var(--text-color)]"
              >
                {paragraph}
              </p>
            ))}

            <ul className="mb-8 space-y-3 text-[18px] font-[400] text-[var(--text-color)]">
              {blog.bulletPoints.map((point, index) => (
                <li key={index} className="flex gap-2">
                  <span>•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-[18px] font-[400] text-[var(--text-color)]">
              {blog.conclusion}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-col items-start justify-between py-4 mb-8 border-t border-b md:items-center md:flex-row gap-[16px]">
            <div className="flex items-center gap-[11px]">
              <span className="text-sm">Tag:</span>
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="py-[4px] px-[16px] bg-[#f7f7f7] rounded-[40px] hover:text-[var(--text-color-active)] navTrans cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-row items-center gap-4 ">
              <span className="mr-2 text-sm">Share this post:</span>
              <ul className="flex flex-row gap-[8px] footerSocIcons">
                {socsIcons.slice(0, 4).map((socsIcon) => (
                  <li key={socsIcon.id}>
                    <a
                      href={socsIcon.href}
                      className={`text-[16px] flex items-center justify-center w-[40px] h-[40px] border-[var(--text-color)] border-[1px] cursor-pointer rounded-full navTrans ${socsIcon.color}`}
                    >
                      <i className={socsIcon.iconClass}></i>
                    </a>
                  </li>
                ))}
              </ul>
              {/* <div className="inline-flex gap-2">
                <Facebook className="w-4 h-4 cursor-pointer" />
                <Twitter className="w-4 h-4 cursor-pointer" />
                <Share2 className="w-4 h-4 cursor-pointer" />
                <Instagram className="w-4 h-4 cursor-pointer" />
              </div> */}
            </div>
          </div>

          {/* Previous/Next Navigation */}
          <div className="flex flex-row items-center justify-between py-[24px] mb-12">
            <div>
              <div className="text-xs text-[var(--text-color-active)] hover:text-[var(--text-color)] navTrans cursor-pointer mb-1">
                PREVIOUS
              </div>
              <Link
                to={`/blog/${blog.id - 1}`}
                className="text-sm font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[var(--text-color)] hover:text-[var(--text-color-active)] navTrans cursor-pointer"
              >
                {blog.prevPost.title}
              </Link>
            </div>
            {/* <div className="h-[100%] w-[2px] bg-[#E9E9E9] -my-[10px]">pp</div> */}
            <div className="text-right">
              <div className="text-xs text-[var(--text-color-active)] hover:text-[var(--text-color)] navTrans cursor-pointer mb-1">
                NEXT
              </div>
              <Link
                to={`/blog/${blog.id + 1}`}
                className="text-sm font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[var(--text-color)] hover:text-[var(--text-color-active)] navTrans cursor-pointer"
              >
                {blog.nextPost.title}
              </Link>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mb-12">
            <h3 className="mb-6 text-xl font-bold">
              {blog.comments.length} Comments
            </h3>

            <div className="space-y-6">
              {blog.comments.map((comment) => (
                <div
                  key={comment.id}
                  className={`flex gap-4 ${comment.id !== 1 ? "pl-12" : ""}`}
                >
                  <div className="w-10 h-10 overflow-hidden rounded-full">
                    <img
                      src={comment.avatar || "/placeholder.svg"}
                      alt={comment.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{comment.name}</span>
                      {comment.verified && (
                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                      )}
                    </div>
                    <div className="mb-2 text-xs text-gray-500">
                      {comment.date}
                    </div>
                    <p className="mb-2 text-sm text-gray-700">
                      {comment.content}
                    </p>
                    {comment.id === 1 && (
                      <button className="text-xs font-medium text-red-500">
                        Reply
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comment Form */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Leave A Comment</h3>
            <form className="space-y-4" onSubmit={handleSubmitComment}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={comment.name}
                  onChange={handleCommentChange}
                  placeholder="Your Name*"
                  className="w-full p-3 border-[#E9E9E9] border rounded-md hover:border-[var(--text-color)] hover:ring-[var(--text-color)] hover:ring-[1px] focus:ring-[var(--text-color)] focus:border-[var(--text-color)] navTrans"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={comment.email}
                  onChange={handleCommentChange}
                  placeholder="Your Email*"
                  className="w-full p-3 border-[#E9E9E9] border rounded-md hover:border-[var(--text-color)] hover:ring-[var(--text-color)] hover:ring-[1px] focus:ring-[var(--text-color)] focus:border-[var(--text-color)] navTrans"
                  required
                />
              </div>
              <textarea
                name="message"
                value={comment.message}
                onChange={handleCommentChange}
                placeholder="Your Message*"
                className="w-full h-32 p-3 border-[#E9E9E9] border rounded-md hover:border-[var(--text-color)] hover:ring-[var(--text-color)] hover:ring-[1px] focus:ring-[var(--text-color)] focus:border-[var(--text-color)] navTrans"
                required
              ></textarea>
              <div>
                <button
                  type="submit"
                  className="px-5 py-3 font-[600] text-[14px] lg:text-[16px] text-white bg-[var(--text-color)] rounded-full hover:bg-[var(--text-color-white)] hover:text-[var(--text-color)] navTrans border-[var(--text-color)] border-[1px]"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogDetails;
