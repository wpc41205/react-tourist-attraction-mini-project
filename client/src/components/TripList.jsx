import React from "react";
import TripCard from "./TripCard";

function TripList({ trips, loading, error, onTagClick }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">กำลังค้นหาทริป...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 text-lg mb-2">เกิดข้อผิดพลาด</div>
        <div className="text-gray-600">{error}</div>
      </div>
    );
  }

  if (!trips || trips.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-600 text-lg mb-2">ไม่พบทริปที่ค้นหา</div>
        <div className="text-gray-500">ลองค้นหาด้วยคำอื่นดูนะครับ</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {trips.map((trip) => (
        <TripCard key={trip.eid} trip={trip} onTagClick={onTagClick} />
      ))}
    </div>
  );
}

export default TripList;
