function Link() {
  return (
    <div className="flex justify-between items-center w-[70vw] mx-auto mt-10">
      <div className="flex items-start">
        <img
          src="https://via.placeholder.com/100"
          alt ="link thumbnail"
          className="w-[500px] h-[350px] object-cover rounded-[50px] mr-5 border-2 border-black"
        />
        <div className="flex flex-col text-lg text-start items-start">
          <div className="text-5xl text-start mt-1">คู่มือเที่ยวเกาะช้าง กับ เที่ยวพักที่ไหน? อ่านบทความที่เดียว!</div>
          <div className="text-md text-start mt-1 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ut. Pariatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ut. Pariatur</div>
          <div className="text-md text-start mt-1  text-blue-400 underline">อ่านต่อ</div>
          <div className="text-md text-start mt-1 text-gray-400">หมวด</div>
          <div className="flex space-x-6 mt-5">
            <img
              src="https://via.placeholder.com/100"
              alt="image 1"
              className="w-[150px] h-[150px] object-cover rounded-md border-2 border-black" 
            />
            <img
              src="https://via.placeholder.com/100"
              alt="image 1"
              className="w-[150px] h-[150px] object-cover rounded-md border-2 border-black"
            />
            <img
              src="https://via.placeholder.com/100"
              alt="image 1"
              className="w-[150px] h-[150px] object-cover rounded-md border-2 border-black"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Link;
