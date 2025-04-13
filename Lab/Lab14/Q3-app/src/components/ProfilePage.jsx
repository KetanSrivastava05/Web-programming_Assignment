import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const ProfilePage = () => {
  const user = {
    imageUrl: "/Ketan_Photo.jpg", 
    name: "Ketan Srivastava - 23BCE1216",
    email: "abc@gmail.com",
    bio: "Software Developer & Tech Enthusiast",
    posts: [
      "Web Dev and AI/ML project - Weather predictor Just completed an exciting project where I combined Web Development and AI/ML to build a Weather Predictor App! 🌦️ The model analyzes historical weather data using Machine Learning and provides accurate forecasts for different locations. Integrated the frontend with React.js and used Flask for the backend. Proud of how it turned out! 🚀",
      "Just built my first React App! Finally built my first React App! 🎉Explored components, state management, and hooks. The experience of structuring a web app with reusable components was amazing. Can't wait to dive deeper into React Router, Context API, and Redux next! 🔥"
    ]
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
      fontFamily: "Arial"
    }}>
      <ProfileImage imageUrl={user.imageUrl} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;
