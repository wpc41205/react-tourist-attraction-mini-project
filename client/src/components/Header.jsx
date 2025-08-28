function Header() {
  return (
    <div className="mt-8 md:mt-20 px-4">
      {/* Header Title */}
      <div className="flex justify-center items-center h-10 mb-8">
        <div className="text-4xl md:text-6xl lg:text-8xl text-center text-blue-400">เที่ยวไหนดี</div>
      </div>
      
      {/* Navigation Section */}
      <div className="flex justify-start items-center h-10 w-[90vw] md:w-[80vw] lg:w-[60vw] mx-auto">
        <div className="text-xl md:text-2xl lg:text-3xl text-start">ค้นหาที่เที่ยว</div>
      </div>
    </div>
  );
}

export default Header;