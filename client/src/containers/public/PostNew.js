import React, { useState } from "react";

const PostNew = () => {
    const [selectedName, setSelectedName] = useState(""); // Lưu trữ tên được chọn
    const User = 'Nguyễn Hồng Phú';
    const Phone = '0797878315';
    const names = ["Tên 1", "Tên 2", "Tên 3", "Tên 4"]; // Danh sách tên

    const handleNameChange = (event) => {
        setSelectedName(event.target.value);
    };
    return (
        <div className="w-full">
            <div className="w-full flex gap-5">
                <div className="w-full border border-cyan-500 h-full flex flex-col space-y-4  ">
                    <div className="ml-[50px]">
                        <p className="text-4xl font-semibold"> Đăng tin mới </p>
                    </div>
                    <div
                        style={{ width: "94%", height: "2px", backgroundColor: "gray" }}
                        className="my-4 mx-auto"
                    ></div>
                    <div className="bg-red-200 p-4 rounded-lg mx-[5px]">
                        <p className="text-base">
                            Nếu bạn đã từng đăng tin trên Phongtro123.com, hãy sử dụng chức
                            năng ĐẨY TIN / GIA HẠN / NÂNG CẤP VIP trong mục QUẢN LÝ TIN ĐĂNG
                            để làm mới, đẩy tin lên cao thay vì đăng tin mới. Tin đăng trùng
                            nhau sẽ không được duyệt.
                        </p>
                    </div>
                    <div className="flex justify-between">
                        
                     <div><div className="ml-[50px] flex flex-col space-y-4 w-3/4">
                        <p className="font-semibold text-xl"> Địa Chỉ Cho Thuê</p>
                        <input
                            type="text"
                            className="placeholder:italic placeholder:text-slate-400 block bg-white w-[1000px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Nhập Tiêu Đề"
                        ></input>
                    </div>
                    <div className="ml-[50px]">
                        <p className="text-2xl font-semibold"> Thông Tin Mô Tả</p>
                        <div className="flex flex-col space-y-2 w-[200px]">
                            <label htmlFor="nameSelect" className="text-xl font-semibold">
                                {" "}
                                Chuyên Mục:
                            </label>
                            <div className="border border-black rounded-md">
                                <select
                                    id="nameSelect"
                                    value={selectedName}
                                    onChange={handleNameChange}
                                    className=" w-[190px] "
                                >
                                    <option value=""  >
                                        -- Chọn Loại Tin --
                                    </option>
                                    {names.map((name, index) => (
                                        <option key={index} value={name}>
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[50px] flex  flex-col space-y-4 ">
                        <p className="font-semibold text-xl"> Tiêu Đề</p>
                        <input
                            type="text"
                            className="placeholder:italic placeholder:text-slate-400 block bg-white w-[1000px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Nhập Tiêu Đề"
                        ></input>
                    </div>

                    <div className=" ml-[50px] mt-4">
                        <label htmlFor="description" className="block font-medium text-gray-700">Mô Tả:</label>
                        <textarea
                            id="description"
                            rows="4"
                            className="placeholder:italic placeholder:text-slate-400 block bg-white w-[1000px] h-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Nhập mô tả"
                        ></textarea>
                    </div>
                    <div className="ml-[50px] flex  flex-col space-y-4 ">
                        <p className="font-semibold text-xl"> Tên Người Đăng</p>
                        <input
                            type="text"
                            className="placeholder:italic placeholder:text-bla block bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder={User}
                            readOnly="true"
                        ></input>
                    </div>
                    <div className="ml-[50px] flex  flex-col space-y-4 ">
                        <p className="font-semibold text-xl"> Số Điện Thoại</p>
                        <input
                            type="text"
                            className="placeholder:italic placeholder:text-black block bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder={Phone}
                            readOnly="true"
                        ></input>
                    </div>
                    <div className="ml-[50px] flex  flex-col space-y-4 ">
                        <p className="font-semibold text-xl"> Diện Tích</p>
                        <div className="flex items-center">
                        <input
                            type="text"
                            className="placeholder:italic placeholder:text-black block bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            
                        ></input>
                        <p className="border border-gray-400 bg-gray-200 p-2 rounded-md">m<sup>2</sup></p>
                        </div>
                    </div>
                    <div className="ml-[50px] flex  flex-col space-y-4 ">
                        <p className="font-semibold text-xl"> Giá Cả</p>
                        <div className="flex items-center">
                        <input
                            type="text"
                            className="placeholder:italic placeholder:text-black block bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            
                        ></input>
                        <p className="border border-gray-400 bg-gray-200 p-2 rounded-md">Triệu đồng</p>
                        </div>
                    </div>    
                <div className="ml-[50px] mb-4">
                    <label htmlFor="image" className="block font-medium text-gray-700">Hình ảnh:</label>
                    <input
                        type="file"
                        id="image"
                        className="w-full mt-1"
                    />
                </div>
                <button type="submit" className="ml-[50px]  bg-sky-500 text-white py-2 px-4 w-[100px] rounded-md hover:bg-sky-600">
                    Gửi
                </button></div>
                <div className=" bg-yellow-200 w-1/4 h-[500px] mr-[200px]">
                <div class="card-body ml-[15px] ">
                        <p class="card-title text-xl">Lưu ý khi đăng tin</p>
                        <ul>
                            <li className="text-base p-2">Nội dung phải viết bằng tiếng Việt có dấu</li>
                            <li className="text-base p-2">Tiêu đề tin không dài quá 100 kí tự</li>
                            <li className="text-base p-2">Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có hiệu quả hơn.</li>
                            <li className="text-base p-2">Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy sửa vị trí tin rao của bạn trên bản đồ bằng cách kéo icon tới đúng vị trí của tin rao.</li>
                            <li className="text-base p-2">Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần so với tin rao không có ảnh. Hãy đăng ảnh để được giao dịch nhanh chóng!</li>
                        </ul>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostNew;
