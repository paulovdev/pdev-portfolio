import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Blog.scss';

const miniBlogs = [
  {
    id: 1,
    title: "The Art of User-Centric Design",
    date: "Mar 8, 2024",
  },
  {
    id: 2,
    title: "Maximizing Efficiency with Automation",
    date: "Mar 12, 2024",
  },
  {
    id: 3,
    title: "Building a Strong Brand Identity",
    date: "Mar 18, 2024",
  },
  {
    id: 1,
    title: "The Art of User-Centric Design",
    date: "Mar 8, 2024",
  },
  {
    id: 2,
    title: "Maximizing Efficiency with Automation",
    date: "Mar 12, 2024",
  },
  {
    id: 3,
    title: "Building a Strong Brand Identity",
    date: "Mar 18, 2024",
  }
];

const Blog = () => {
  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1>Blog</h1>
      <p>Unlocking the secrets of success: Stories, strategies, and motivation.</p>

      <div className="blog-container">
        {miniBlogs.map(blog => (
          <Link to={`/blog/${blog.id}`} className="blog" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.date}</p>
          </Link>
        ))}
      </div>
    </motion.section >
  );
};

export default Blog;
