import React,{memo} from 'react'

const List = ({images,link,content,description,price,acreage,address,time,phone}) => {
 
  return (
    <div className="Product static flex justify-between my-8 border border-gray-400 rounded-lg">
            <div className="images w-[280px] h-[220px] relative">
            <p onClick={link}>
          <img
            src={images}
            className="w-full h-full border border-black object-cover"
            alt="Biểu trưng ABC Corp"
          />
        </p>
              <span className="group absolute bottom-0 right-0 p-2 transition-colors duration-300"></span>
            </div>
            <div className="w-[400px] ">
              <div className=" w-[400px] pr-[15px]">
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
                  <p className="address decoration-black-600 hover:decoration-blue-400 cursor-ponter">
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
                  <div className="text-right">
                    <p>{phone}</p>
                    <button> Nhắn tin </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default memo(List)