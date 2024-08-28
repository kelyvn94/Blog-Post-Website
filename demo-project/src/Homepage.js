import { useState } from "react";
const Homepage = () => {
    const [blogs, setBlogs] = useState([
        {title: 'The power of Node.js', body: 'Node.js empowers developers to build scalable, high-performance web applications with JavaScript, enabling efficient server-side scripting and real-time communication.', author: 'Kelvin', id:1},
        {title: 'The Oracle Database', body: 'Oracle Database is a multi-model relational database management system, widely used for data storage, processing, and analytics in enterprise applications.', author: 'James', id:2},
        {title: 'The Transaction Process', body: 'The transaction process involves recording, classifying, and summarizing financial transactions to produce accurate financial statements and ensure proper financial management.', author: 'Peter', id:3}

    ]);
    
    return ( 
        <div class= "homepage">
           {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            </div>
           ))}
        </div>
     );
}
 
export default Homepage;