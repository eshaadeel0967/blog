'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const SwipeableCards = () => {
  const cards = [
    {
        _id: "1",
        title: "Jack the Ripper: The Unsolved Case of London's Infamous Killer",
        link:"components/1",
        mainImage: {
          url: "/images/id1.png",
        },
        publishedAt: "2024-12-29",
        author: { name: "History Enthusiast" },
        body: "Jack the Ripper terrorized London in 1888, murdering at least five women in gruesome ways. Despite numerous suspects and theories, his identity remains a mystery to this day.",
      },
      {
        _id: "2",
        title: "The Zodiac Killer: A Cryptic Journey into Unsolved Crimes",
        link:"components/2",
        mainImage: {
          url: "/images/id2.png",
        },
        publishedAt: "2024-12-28",
        author: { name: "Crime Analyst" },
        body: "Operating in Northern California during the 1960s and 1970s, the Zodiac Killer taunted authorities with cryptic letters and ciphers. Despite extensive investigations, the case remains unsolved.",
      },
      {
        _id: "3",
        title: "The Dyatlov Pass Incident: An Unexplained Hiking Mystery",
        link:"components/3",
        mainImage: {
          url: "/images/id3.png",
        },
        publishedAt: "2024-12-27",
        author: { name: "Mystery Explorer" },
        body: "In 1959, nine hikers died under mysterious circumstances in the Ural Mountains. Their bizarre injuries have fueled decades of theories, from avalanches to extraterrestrial encounters.",
     
      },
      {
        _id: "4",
        link:"components/4",
        title: "The Disappearance of Madeleine McCann: A Global Mystery",
        mainImage: {
          url: "/images/id4.png",
        },
        publishedAt: "2024-12-26",
        author: { name: "Investigative Journalist" },
        body: "Madeleine McCann vanished from her family's holiday apartment in Portugal in 2007. Despite worldwide attention and efforts, her case remains unsolved.",
      },
      {
        _id: "5",
        link:"components/5",
        title: "The Black Dahlia: Hollywood's Most Notorious Unsolved Murder",
        mainImage: {
          url: "/images/id5.png",
        },
        publishedAt: "2024-12-25",
        author: { name: "Crime Historian" },
        body: "Elizabeth Short, nicknamed the Black Dahlia, was found brutally murdered in Los Angeles in 1947. The case remains unsolved and continues to captivate criminologists and the public.",
      },
      {
        _id: "6",
        link:"components/6",
        title: "The Sodder Children: A Family Mystery That Defies Explanation",
        mainImage: {
          url: "/images/id6.png",
        },
        publishedAt: "2024-12-24",
        author: { name: "True Crime Enthusiast" },
        body: "After a fire destroyed the Sodder family home in 1945, five children went missing without a trace. The case raises questions of abduction, cover-up, and unresolved grief.",
      },
  ];

  return (
    <div className="flex flex-col justify-start text-center p-5 items-center min-h-screen bg-gray-100 pt-8">
      <h1 className="text-4xl font-bold text-center pt-20 text-grey-400">
      Welcome to the Ultimate Lifestyle Blog
      </h1>
      <p className="pb-10 pt-4 text-black ">
        This blog brings together styling advice, healthy diet tips, travel adventures, and the latest trends to help you live your best life.</p>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        speed={500} // Adjust the speed for smoother transitions
        className="w-full px-4"
      >
        {cards.map((card) => (
          <SwiperSlide key={card._id}>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={card.mainImage.url}
                alt={card.title}
                width={600}
                height={900}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
               <Link className="text-black" href={card.link}><h2 className="text-xl font-semibold">{card.title}</h2></Link>
                <p className="text-gray-600 text-sm">{card.body}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
  );
};

export default SwipeableCards;
