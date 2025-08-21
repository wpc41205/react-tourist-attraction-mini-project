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
    <div className="w-[95vw] md:w-[80vw] lg:w-[70vw] mx-auto mt-10 relative">
      <div className="flex flex-col lg:flex-row lg:items-start mt-10">
        {/* รูปภาพใหญ่ */}
        <img
          src={trip.photos[0]}
          alt={trip.title}
          className="w-full md:w-[300px] lg:w-[500px] lg:h-[350px] md:h-[300px] object-cover rounded-[20px] md:rounded-[30px] lg:rounded-[50px] lg:mr-5 mb-4 lg:mb-0" 
        />
        
        <div className="flex flex-col text-base md:text-lg text-start items-start">
          {/* Title */}
          <div className="text-2xl md:text-3xl lg:text-4xl text-start mt-1 mb-2">{trip.title}</div>
          
          {/* Description */}
          <div className="text-sm md:text-base lg:text-lg text-start mt-1 text-gray-400 mb-2">
            {truncatedDescription}
          </div>
          
          {/* Link */}
          <a
            href={trip.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base lg:text-lg text-start mt-1 text-blue-400 underline mb-2"
          >
            อ่านต่อ
          </a>
          
          {/* Category/Tags */}
          <div className="text-sm md:text-base lg:text-lg text-start mt-1 text-gray-400 mb-4">
             หมวด {" "}
             {trip.tags.slice(0, 4).map((tag, index) => (
               <span key={index}>
                 <span
                   className="cursor-pointer hover:text-blue-600 underline text-sm md:text-base lg:text-lg"
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
                   className="cursor-pointer hover:text-blue-600 underline text-sm md:text-base lg:text-lg"
                   onClick={() => handleTagClick(trip.tags[4])}
                 >
                   {trip.tags[4]}
                 </span>
               </>
             )}
           </div>
          
          {/* รูปภาพเล็ก 3 รูป */}
          <div className="flex space-x-2 md:space-x-4 lg:space-x-6 mt-0 w-full">
            {trip.photos.slice(1, 4).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${trip.title} - รูปที่ ${index + 2}`}
                className="w-[150px] h-[150px] smobject-cover rounded-[10px] md:rounded-[15px] lg:rounded-[20px]"
              />  
            ))}
          </div>
        </div>
      </div>
      
      {/* Link Button - Bottom Right */}
      <a
        href={trip.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 inline-flex items-center justify-center w-[60px] h-[60px] bg-blue-400 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
        title="เปิดลิงก์"
      >
        <svg 
          className="w-6 h-6" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fillRule="evenodd" 
            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" 
            clipRule="evenodd" 
          />
        </svg>
      </a>
    </div>
  );
}

export default TripCard;
