import React,{memo} from 'react'


const List2 = ({images,link,content,description,price,acreage,address,time,phone}) => {
  return (
    <div>
        <div className="Product static flex gap-4 my-4">
            <div className="images w-[170px] pl-[5px] relative">
            <a href={link}> {/* Sử dụng thẻ <a> để tạo liên kết */}
          <img
            src={images}
            className="border border-black object-cover rounded-lg h-[160px] "
            alt="Biểu trưng ABC Corp"
          />
        </a>
              <span className="group absolute bottom-0 right-0 p-2 transition-colors duration-300"></span>
            </div>
            <div className="w-[550px] ">
              <div className=" w-full pr-[15px]">
                <div className="flex items-center justify-center h-full">
                  <a
                    href={link}
                    className="text-pink-400 decoration-black-600 hover:decoration-blue-400  cursor-pointer"
                  >
                    {content}
                  </a>
                </div>
                <div className="flex items-center justify-between gap-2 pl-[2px]">
                  <p className="price text-sky-400 "> {price}</p>
                  <p className="acreage"> {acreage} </p>
                  <p className="address  decoration-black-600 hover:decoration-blue-400 cursor-ponter">
                    {address}
                  </p>
                </div>
                <div className="flex">
                  <p className="Time ml-auto">{time}</p>
                </div>
                <p className="text-gray-400">
                  {description}
                </p>
                <div className="flex">
                  <a className="mr-auto text-blue-400" href="/Login">Thông tin user</a>
                  {/* <div className="text-right">
                    <p>{phone}</p>
                    <button> Nhắn tin </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '96%', height: '1px', backgroundColor: 'pink' }} className="mb-2 mx-auto"></div>
    </div>
    
          
  )
}

export default memo(List2)