import React, { useState, useEffect, useContext } from "react";
import { getCategory, newPost } from "../../api/api";
import { UserContext } from "../../context/UserContext";
function CheckBoxList({ data, selectedItems, setSelectedItems }) {
    const handleCheckBoxChange = (e) => {
        const itemId = e.target.value; // Use the ID as the value
        if (e.target.checked) {
            setSelectedItems((prevSelectedItems) => ({
                ...prevSelectedItems,
                [itemId]: data.find((item) => item.id === parseInt(itemId)).name,
            }));
        } else {
            const updatedSelectedItems = { ...selectedItems };
            delete updatedSelectedItems[itemId];
            setSelectedItems(updatedSelectedItems);
        }
    };

    return (
        <div>
            {data.map((item) => (
                <label key={item.id} className="flex items-center">
                    <input
                        type="checkbox"
                        value={item.id} // Use the ID as the value
                        onChange={handleCheckBoxChange}
                        checked={selectedItems.hasOwnProperty(item.id)}
                        className="mr-2"
                    />
                    {item.name} {/* Display the name */}
                </label>
            ))}
        </div>
    );
}
const PostNew = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]); 
    const { user } = useContext(UserContext);
    const [formData, setFormData] = useState({

     });
    
    const [selectedName, setSelectedName] = useState(""); // Lưu trữ tên được chọn
    const User = 'Nguyễn Hồng Phú';
    const Phone = '0797878315';
    const names = ["Tên 1", "Tên 2", "Tên 3", "Tên 4"]; // Danh sách tên

    const handleNameChange = (event) => {
        setSelectedName(event.target.value);
    };
    const [category, setCategoryData] = useState([]);
    const loadCate = async () => {
        await getCategory()
            .then(apiData => {
                setCategoryData(apiData.data);
                console.log(apiData);
            })
    }
    const handleFileChange = (e) => {
        const files = e.target.files;
        const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    
        const selectedValidImages = [];
    
        for (let i = 0; i < files.length; i++) {
          if (validImageTypes.includes(files[i].type)) {
            selectedValidImages.push(files[i]);
          }
        }
    
        setSelectedImages(selectedImages.concat(selectedValidImages));
      };
    
      const removeImage = (index) => {
        const newSelectedImages = [...selectedImages];
        newSelectedImages.splice(index, 1);
        setSelectedImages(newSelectedImages);
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedItemIds = Object.keys(selectedItems);
        const formDataToSend = new FormData();
        selectedItemIds.forEach((itemId) => {
            formDataToSend.append('categoryids', itemId);
            console.log(itemId);
        });
        for (let i = 0; i < selectedImages.length; i++) {
            formDataToSend.append('FileUri', selectedImages[i]);
        }
        formDataToSend.append('title', 'test1');
        formDataToSend.append('address', 'test2');
        formDataToSend.append('description', 'test3');
        formDataToSend.append('area', 36);
        formDataToSend.append('price', 1800000);
        formDataToSend.append('userId', 16);
        formDataToSend.append('status', 'Đang Chờ Duyệt');
        formDataToSend.append('categoryids', 1);
        formDataToSend.append('isHire', false);
        newPost(formDataToSend).then((response) => {
            console.log(response);
          })
          .catch((error) => {
            // Handle errors
            console.error('Error posting data: ', error);
          });;
    }
    useEffect(() => {
        loadCate();
    }, []);
    return (
        <div className="w-full">
            <div className="w-full flex gap-5">
                <div className="w-full  h-full flex flex-col space-y-4  ">
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
                        <form onSubmit={handleSubmit}>
                            <div><div className="ml-[50px] flex flex-col space-y-4 w-3/4">
                                <p className="font-semibold text-xl"> Địa Chỉ Cho Thuê</p>
                                <input
                                    value={formData.postAdress}
                                    type="text"
                                    name="postAddress"
                                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-[1000px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                    placeholder="Nhập Tiêu Đề"
                                    onChange={(e) => setFormData({ ...formData, postAddress: e.target.value })}
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
                                            {/* <select
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
                                </select> */}
                                            <CheckBoxList data={category} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-[50px] flex  flex-col space-y-4 ">
                                    <p className="font-semibold text-xl"> Tiêu Đề</p>
                                    <input
                                    value={formData.postTitile}
                                        name="postTitile"
                                        type="text"
                                        onChange={(e) => setFormData({ ...formData, postTitile: e.target.value })}
                                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-[1000px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                        placeholder="Nhập Tiêu Đề"
                                    ></input>
                                </div>

                                <div className=" ml-[50px] mt-4">
                                    <label htmlFor="description" className="block font-medium text-gray-700">Mô Tả:</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                                        placeholder={user.firstname + " " + user.lastname}
                                        readOnly={true}
                                    ></input>
                                </div>
                                <div className="ml-[50px] flex  flex-col space-y-4 ">
                                    <p className="font-semibold text-xl"> Số Điện Thoại</p>
                                    <input
                                        type="text"
                                        className="placeholder:italic placeholder:text-black block bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                        placeholder={user.userphone}
                                        readOnly={true}
                                    ></input>
                                </div>
                                <div className="ml-[50px] flex  flex-col space-y-4 ">
                                    <p className="font-semibold text-xl"> Diện Tích</p>
                                    <div className="flex items-center">
                                        <input
                                            name="postArea"
                                            value={formData.postArea}
                                            onChange={(e) => setFormData({ ...formData, postArea: e.target.value })}
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
                                            name="postPrice"
                                            value={formData.postPrice}
                                            onChange={(e) => setFormData({ ...formData, postPrice: e.target.value })}
                                            type="text"
                                            className="placeholder:italic placeholder:text-black block bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"

                                        ></input>
                                        <p className="border border-gray-400 bg-gray-200 p-2 rounded-md">Triệu đồng/Tháng</p>
                                    </div>
                                </div>
                                <div className="ml-[50px] mb-4">
                                    <label htmlFor="image" className="block font-medium text-gray-700">Hình ảnh:</label>
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        className="w-full mt-1"
                                        multiple
                                        accept="image/jpeg,image/png,image/jpg"
                                        onChange={handleFileChange}
                                    />{selectedImages.map((file, index) => (
                                        <div key={index}>
                                          <p>{file.name}</p>
                                          <button onClick={() => removeImage(index)}>Remove</button>
                                        </div>
                                      ))}
                                </div>
                                <button type="submit" className="ml-[50px]  bg-sky-500 text-white py-2 px-4 w-[100px] rounded-md hover:bg-sky-600">
                                    Gửi
                                </button></div>
                        </form>
                        <div className=" bg-yellow-200 w-full max-w-[400px] h-full mr-[200px]">
                            <div className="card-body ml-[15px] md:w-full">
                                <p className="card-title text-xl">Lưu ý khi đăng tin</p>
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
