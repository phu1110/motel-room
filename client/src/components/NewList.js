import React,{memo} from 'react'

export const NewList = ({images,title,price,date}) => {
  return (
    <div>
        <h2 className="text-center text-xl font-bold my-4">Tin mới đăng</h2>
          <div className="grid grid-cols gap-2 mx-2">
            <div className="flex items-center rounded-lg justify-center gap-2">
              <img src={images} alt="prasetamon" className="w-[65px] h-[65px] rounded-lg" />
              <div className="Content p-2">
                <a href="/Product" className=" text-blue-400 hover:text-pink-500">
                  {title}
                </a>
                <div className="flex grid grid-cols items-center">
                  <p className="text-black-500 text-sm">Giá: {price}</p>
                  <p className="text-black-500 text-sm">Ngày đăng: {date}</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '88%', height: '1px', backgroundColor: 'black' }} className="mb-2 mx-auto"></div>
    </div>
  )
}
export default memo(NewList)