import React from "react";
import TripCard from "./TripCard";

function TripList({ trips, loading, error, onTagClick }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-8 md:py-12 px-4">
        <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600 text-sm md:text-base">กำลังค้นหาทริป...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 md:py-12 px-4">
        <div className="text-red-600 text-base md:text-lg mb-2">เกิดข้อผิดพลาด</div>
        <div className="text-gray-600 text-sm md:text-base">{error}</div>
      </div>
    );
  }

  if (!trips || trips.length === 0) {
    return (
      <div className="text-center py-8 md:py-12 px-4">
        <div className="text-gray-600 text-base md:text-lg mb-2">ไม่พบทริปที่ค้นหา</div>
        <div className="text-gray-500 text-sm md:text-base">ลองค้นหาด้วยคำอื่นดูนะครับ</div>
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-8 px-4">
      {trips.map((trip) => (
        <TripCard key={trip.eid} trip={trip} onTagClick={onTagClick} />
      ))}
    </div>
  );
}

export default TripList;
