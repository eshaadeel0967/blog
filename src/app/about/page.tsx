'use client';
import React, { useState } from 'react';
import Image from 'next/image';
export default function AboutUs () {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleContent = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
        <div className="min-h-screen py-10 px-4">
            <div className="mt-8">
                <Image 
                    src="https://blog.feedspot.com/wp-content/uploads/2017/07/Crime-Blogs.jpg" 
                    alt="About Us" 
                    width={600} 
                    height={400} 
                    className="rounded-lg mb-6 mx-auto"
                />
            </div>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-center">
            <section className="about-us bg-gray-50 py-12 px-6 md:px-20">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to our crime blog, a digital space where fascination with mystery and the pursuit of truth converge. Our blog is a passion project created by a team of researchers, writers, and crime enthusiasts, united by a deep interest in exploring the dark and enigmatic stories that have shaped history and continue to baffle minds today.
        </p>
        {isExpanded && (
          <>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In this realm of crime and criminology, we strive to present a unique perspective on some of the most perplexing mysteries. From infamous cases like Jack the Ripper and the Zodiac Killer to lesser-known yet equally intriguing tales of disappearances, criminal psychology, and forensic breakthroughs, we aim to bring you engaging, insightful, and well-researched content.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At the heart of our mission is the desire to delve deeper than the headlines. We analyze the circumstances, theories, and historical contexts that surround these cases, offering readers an opportunity to connect with the complexities of human behavior and the intricacies of crime-solving. Beyond recounting the facts, we explore the emotions, motivations, and unanswered questions that leave these mysteries lingering in the public consciousness.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This platform isn’t just for seasoned true-crime aficionados but for anyone curious about the stories that shape our understanding of justice, morality, and human nature. Whether you’re a criminology student, an amateur detective, or simply someone who loves a good mystery, you’ll find our content informative, thought-provoking, and captivating.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We also believe in fostering a community of like-minded individuals. Through thoughtful discussions, shared theories, and collaborative exploration, we aim to create a space where curiosity thrives. Your perspectives, questions, and insights are invaluable in helping us uncover new angles and possibilities in the stories we explore.
            </p>
          </>
        )}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Thank you for being part of this journey with us. As we unravel the stories behind history’s most infamous crimes and mysterious cases, we invite you to join us in seeking the truth and understanding the forces that shape our world.
        </p>
        
        <button 
          onClick={toggleContent}
          className="mt-4 text-blue-600 hover:text-blue-800 font-semibold"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </section>
            </div>
          
        </div>
    );
};