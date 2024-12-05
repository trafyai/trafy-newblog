// 'use client'
// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import db from "@firebase"; // Assuming you have this Firebase configuration file
// import '@styles/blog/BlogLanding.css';
// import Link from "next/link";
// import Image from "next/image";

// export default function BlogLanding() {
//     const [blogs, setBlogs] = useState([]);

//     useEffect(() => {
//         // Fetch blogs from Firestore
//         const fetchBlogs = async () => {
//             try {
//                 const blogsCollection = collection(db, "blogs");
//                 const blogsSnapshot = await getDocs(blogsCollection);
//                 const blogsList = blogsSnapshot.docs.map(doc => ({
//                     id: doc.id,
//                     ...doc.data()
//                 }));
//                 setBlogs(blogsList);
//                 setLoading(false);

//             } catch (err) {
//                 console.error("Error fetching blogs:", err);
//                 setError("Failed to load blogs. Please try again.");
//                 setLoading(false);
//             }
//         };

//         fetchBlogs();
//     }, []);


//     return (
//         <main>
//             <div className="blog-landing-page">
//                 <div className="blog-landing-container">

//                     {/* Render the first blog as a banner */}
//                     {blogs.slice(0, 1).map((item) => (
//                         <Link key={item.id} href={`/${item.id}`} className="blog-landing-banner">
//                             <div className="blog-landing-banner-image">
//                                 <Image src={item.metaImage} alt="blog image" width={600} height={400} />
//                             </div>
//                             <div className="blog-landing-banner-content">
//                                 <h1>{item.title}</h1>
//                                 <p>{item.metaDescription}</p>
//                                 <div className="blog-landing-banner-author">
//                                     <p>By <strong>{item.author}</strong></p>
//                                     <span>|</span>
//                                     <p>{item.date}</p>
//                                 </div>
//                             </div>
//                         </Link>
//                     ))}

//                     {/* Render the rest of the blogs as cards */}
//                     <div className="blog-landing-content">
//                         {blogs.slice(1, 5).map((item) => (
//                             <div className="blog-landing-card" key={item.id}>
//                                 <Link href={`/${item.id}`} className="blog-landing-card-inner">
//                                     <div className="blog-landing-card-image">
//                                         <Image src={item.metaImage} alt="blog image" width={300} height={200} />
//                                     </div>
//                                     <div className="blog-landing-card-content">
//                                         <div className="blog-landing-card-heading">
//                                             <h1>{item.title}</h1>
//                                         </div>
//                                         <div className="blog-landing-card-description">
//                                             <p>
//                                                 {String(item.description)
//                                                     .split(' ') // Split the description into an array of words
//                                                     .slice(0, 20) // Display the first 20 words
//                                                     .join(' ')}{" "}
//                                                 ...
//                                             </p>
//                                         </div>
//                                         <div className="blog-landing-card-author">
//                                             <p>{item.author}</p>
//                                             <p>{item.date}</p>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }


'use client'
import React, { useEffect, useState } from "react";
import { collection, getDocs,query, orderBy } from "firebase/firestore";
import db from "@firebase"; // Assuming you have this Firebase configuration file
import '@styles/blog/BlogLanding.css';
import Link from "next/link";
import Image from "next/image";

export default function BlogLanding() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch blogs from Firestore
        const fetchBlogs = async () => {
            try {
                // Fetch blogs ordered by 'Date' in descending order
                const blogsCollection = collection(db, "blogs");
                const blogsQuery = query(blogsCollection, orderBy("Date", "desc")); 
                const blogsSnapshot = await getDocs(blogsQuery);
        
                // Map the data into a usable array
                const blogsList = blogsSnapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }));
        
                setBlogs(blogsList);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError("Failed to load blogs. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <main>
            <div className="blog-landing-page">
                <div className="blog-landing-container">

                    {/* Render the first blog as a banner */}
                    {loading ? (
                        <div className="blog-landing-banner skeleton">
                            <div className="skeleton-banner-image"></div>
                            <div className="skeleton-banner-content">
                                <div className="skeleton-text skeleton-title"></div>
                                <div className="skeleton-text skeleton-description"></div>
                                <div className="skeleton-author">
                                    <div className="skeleton-text"></div>
                                    <div className="skeleton-text"></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        blogs.slice(0, 1).map((item) => (
                            <Link key={item.id} href={`/${item.id}`} className="blog-landing-banner">
                                <div className="blog-landing-banner-image">
                                    <Image src={item.metaImage} alt="blog image" width={600} height={400} />
                                </div>
                                <div className="blog-landing-banner-content">
                                    <h1>{item.title}</h1>
                                    <p>{item.metaDescription}</p>
                                    <div className="blog-landing-banner-author">
                                        <p>By <strong>{item.author}</strong></p>
                                        <span>|</span>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}

                    {/* Render the rest of the blogs as cards */}
                    <div className="blog-landing-content">
                        {loading ? (
                            Array(4).fill(0).map((_, index) => (
                                <div key={index} className="blog-landing-card skeleton">
                                    <div className="skeleton-card-image"></div>
                                    <div className="skeleton-card-content">
                                        <div className="skeleton-text skeleton-title"></div>
                                        <div className="skeleton-text skeleton-description"></div>
                                        <div className="skeleton-author">
                                            <div className="skeleton-text"></div>
                                            <div className="skeleton-text"></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            blogs.slice(1, 5).map((item) => (
                                <div className="blog-landing-card" key={item.id}>
                                    <Link href={`/${item.id}`} className="blog-landing-card-inner">
                                        <div className="blog-landing-card-image">
                                            <Image src={item.metaImage} alt="blog image" width={300} height={200} />
                                        </div>
                                        <div className="blog-landing-card-content">
                                            <div className="blog-landing-card-heading">
                                                <h1>{item.title}</h1>
                                            </div>
                                            <div className="blog-landing-card-description">
                                                <p>
                                                    {String(item.description)
                                                        .split(' ')
                                                        .slice(0, 20)
                                                        .join(' ')}{" "}
                                                    ...
                                                </p>
                                            </div>
                                            <div className="blog-landing-card-author">
                                                <p>{item.author}</p>
                                                <p>{item.date}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
