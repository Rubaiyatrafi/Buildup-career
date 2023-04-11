import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <h1 className="blog-title">Answer some required Question</h1>
      <div className="blog-body">
        <h1 className="blog-q">1. When should Context API used ?</h1>
        <h2 className="blog-a">
          Ans: Context API is a (kind of) new feature added in version 16.3 of
          React that allows one to share state across the entire app (or part of
          it) lightly and with ease.
        </h2>
        <h1 className="blog-q">2. What is Custom hook ?</h1>
        <h2 className="blog-a">
          Ans: Custom React JS hooks are reusable functions that a React JS
          software developer can use to add special and unique functionality to
          the React applications.
        </h2>
        <h1 className="blog-q">3. What is useRef ?</h1>
        <h2 className="blog-a">
          Ans: useRef(initialValue) is a built-in React hook that accepts one
          argument as the initial value and returns a reference.
        </h2>
        <h1 className="blog-q">4. What is useMemo ?</h1>
        <h2 className="blog-a">
          Ans: useMemo() is a function that returns a memoized value of a passed
          in resource-intensive function.
        </h2>
      </div>
    </div>
  );
};

export default Blog;
