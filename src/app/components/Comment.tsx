import React, { useEffect, useState } from 'react'
export default function Comment() {
interface Comment {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
}
} 

const [comments, setComments] = useState<Comment[]>([]);
  
  
  const fetchComments = async (): Promise<Comment[]> => {
    const response = await fetch('https://dummyjson.com/comments');
    const data = await response.json();
    return data.comments;
  };

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, []);
  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName('input');
    const textAreaElements = document.getElementsByTagName('textarea');
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();
      
      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ''; // Clear input
        textAreaElements[0].value = ''; // Clear textarea
       

      } else {
        alert('Please enter both a name and a comment.');
      }
    }
  };

  return (
    <div className="mt-8">
    <h2 className="text-2xl font-bold">Comments</h2>
    {comments.length > 0 ? (
comments.slice(0, 4).map((comment, index) => (
<div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md my-4">
  <p className="text-gray-800">
    <b>{comment.user.username}</b>: {comment.body}
  </p>
</div>
      ))
    ) : (
      <p className="text-gray-600">No comments yet.</p>
    )}

<div className="mt-4">
      <h3 className="text-lg font-bold">Add a Comment</h3>
      <input
        type="text"
        placeholder="Your Name"
        className="border border-gray-300 p-2 rounded-md w-full mb-2"
      />
      <textarea
        placeholder="Write your comment here..."
        className="border border-gray-300 p-2 rounded-md w-full"
        rows={2}
      ></textarea>
      <button
        onClick={handleAddComment}
        className="bg-blue-500 text-white p-2 rounded-md mt-2"
      >
        Submit Comment
      </button>
    </div>
    </div>
  )
}
