import React from "react";

const UserPosts = ({ posts }) => {
  return (
    <div style={{ width: "100%", maxWidth: "400px", textAlign: "center" }}>
      <h3 style={{ marginBottom: "10px" }}>User Posts</h3>
      {posts.map((post, index) => (
        <div 
          key={index} 
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: "#f9f9f9",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)"
          }}
        >
          {post}
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
