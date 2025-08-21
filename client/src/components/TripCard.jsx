import React from "react";

function TripCard({ trip, onTagClick }) {
  // จำกัด description ไม่เกิน 100 ตัวอักษร
  const truncatedDescription = trip.description.length > 100 
    ? trip.description.substring(0, 100) + "..."
    : trip.description;

  const handleTagClick = (tag) => {
    if (onTagClick) {
      onTagClick(tag);
    }
  };

  return (
    <div className="flex justify-between items-center w-[70vw] mx-auto mt-10">
      <div className="flex items-start">
        {/* รูปภาพใหญ่ */}
        <img
          src={trip.photos[0]}
          alt={trip.title}
          className="w-[500px] h-[350px] object-cover rounded-[50px] mr-5 "
        />
        
        <div className="flex flex-col text-lg text-start items-start">
          {/* Title */}
          <div className="text-4xl text-start mt-1 ">{trip.title}</div>
          
          {/* Description */}
          <div className="text-lg text-start mt-1 text-gray-400">
            {truncatedDescription}
          </div>
          
          {/* Link */}
          <a
            href={trip.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-start mt-1 text-blue-400 underline"
          >
            อ่านต่อ
          </a>
          
                     {/* Category/Tags */}
           <div className="text-lg text-start mt-1 text-gray-400">
             หมวด {" "}
             {trip.tags.slice(0, 4).map((tag, index) => (
               <span key={index}>
                 <span
                   className="cursor-pointer hover:text-blue-600 underline text-lg"
                   onClick={() => handleTagClick(tag)}
                 >
                   {tag}
                 </span>
                 {index < 3 && " "}
               </span>
             ))}
             {trip.tags.length > 4 && (
               <>
                 {" และ "}
                 <span
                   className="cursor-pointer hover:text-blue-600 underline text-lg"
                   onClick={() => handleTagClick(trip.tags[4])}
                 >
                   {trip.tags[4]}
                 </span>
               </>
             )}
           </div>
          
          {/* รูปภาพเล็ก 3 รูป */}
          <div className="flex space-x-6 mt-5">
            {trip.photos.slice(1, 4).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${trip.title} - รูปที่ ${index + 2}`}
                className="w-[150px] h-[150px] object-cover rounded-[20px] "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripCard;
