// src/app/[slug]/DynamicBlogComponent.jsx
"use client";

import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "@firebase"; // Assuming db is imported from your Firebase configuration
import BlogPage from "@components/blog-page/blog-single/BlogSingle";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton styles

export default function DynamicBlogComponent({ slug }) {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        // Fetch all documents from the blogs collection
        const blogsCollection = collection(db, "blogs");
        const blogsSnapshot = await getDocs(blogsCollection);

        // Map over the documents to create a list of blog objects
        const blogsList = blogsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Find the blog with the matching id (slug)
        const foundBlog = blogsList.find((blog) => blog.id === slug);

        if (foundBlog) {
          setBlogData(foundBlog);
        } else {
          console.log("Blog not found with id:", slug);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-loading" style={{width:"85%",height:"100vh"}}>
        {/* <div className="blog-loading-container">
          <Skeleton height={40} width={`60%`} style={{ marginBottom: "1rem" }} />
          <Skeleton count={3} style={{ marginBottom: "0.5rem" }} />
          <Skeleton height={200} style={{ marginBottom: "1rem" }} />
        </div> */}
      </div>
    );
  }

  if (!blogData) return <div>Not Found</div>;

  return <BlogPage {...blogData} />;
}
