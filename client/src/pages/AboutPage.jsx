import { useState } from 'react';

export default function AboutPage() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="simple-page">
      <h2>👋 About</h2>
      <p>Made by YOUR NAME</p>
      <button onClick={() => setLikes(likes + 1)}>❤️ {likes}</button>
    </div>
  );
}