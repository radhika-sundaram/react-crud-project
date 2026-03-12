// src/pages/Blogs.js
import React from "react";
import R1 from './Router-Images/blogs1.jpeg';
import R2 from './Router-Images/blogs2.jpeg';
import R3 from './Router-Images/blogs3.jpeg';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Healthy Juices",
      image: R1,
      content: "Discover the top 5 juices that are not only delicious but packed with vitamins..."
    },
    {
      id: 2,
      title: "Juice Recipes at Home",
      image: R2,
      content: "Learn simple and tasty juice recipes you can make at home in just a few minutes..."
    },
    {
      id: 3,
      title: "Benefits of Fresh Juices",
      image: R3,
      content: "Fresh juices can boost your immunity, improve digestion, and make you feel energetic..."
    },
   

  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{color: "darkorange"}}>Juice Corner Blog</h2>
      <div className="row">
        {blogPosts.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div
              className="card h-100 shadow-sm"
              style={{
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
                borderRadius: "15px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
              }}
            >
              <img 
                src={post.image} 
                className="card-img-top" 
                alt={post.title} 
                style={{ height: "300px", objectFit: "cover", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <button
                  className="btn btn-warning mt-auto"
                  onClick={() => alert(`Read more about: ${post.title}`)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
