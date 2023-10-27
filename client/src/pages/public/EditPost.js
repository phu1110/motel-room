import React, { useState, useEffect } from "react";
import { detailPost, getCategoryData } from '../../api/api.js';
import Select from "react-select";
import axios from "axios";
const EditPost = ({ data, toggleForm }) => {
    //const [formData, setFormData] = useState(data);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [formData, setFormData] = useState(data, {
        title: '',
        description: '',
        address: '',
        price: 0,
        area: 0,
        //userId: localStorage.getItem("userid"),
        status: "Đang Chờ Duyệt",
        isHire: false,
        fileUri: [],
    });
    const handleSave = async () => {
        const formDataObject = new FormData();
        formDataObject.append('title', formData.title);
        formDataObject.append('address', formData.address);
        formDataObject.append('description', formData.description);
        formDataObject.append('area', formData.area);
        formDataObject.append('price', formData.price);
        formDataObject.append('userId', localStorage.getItem("userid"));
        formDataObject.append('status', 'Đang Chờ Duyệt');
        formDataObject.append('isHire', false);
        // for (let i = 0; i < selectedImages.length; i++) {
        //     formDataObject.append('FileUri', selectedImages[i]);
        // }
        selectedItems.forEach((itemId) => {
            formDataObject.append('categoryids', itemId);
        });
        console.log(formDataObject);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'accept': '*',
            },
        };
        // const response = await axios.post(
        //     'https://localhost:7139/api/Post/add-post',
        //     formDataObject, config
        // );
    }
    useEffect(() => {
        getCategoryData()
            .then(apiData => {
                setCategoryOptions(apiData.data);
            })
    }, [data]);
    const [selectedItems, setSelectedItems] = useState([]);
    const handleCategoryChange = (selectedOptions) => {
        setSelectedItems(selectedOptions);
        setFormData({
            ...formData,
            categoryids: selectedOptions.map((option) => option.id),
        });
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="mx-auto w-full max-w-[1500px] bg-white p-12 rounded-lg shadow-lg">
                <form onSubmit={handleSave}>
                    <div className="grid justify-items-end">
                    </div>
                    <div className="-mx-3 flex flex-rows">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="">
                                <label className=" block text-base font-medium text-[#07074D]">
                                    Tiêu Đề
                                </label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="">
                                <label className=" block text-base font-medium text-[#07074D] ">
                                    Diện Tích
                                </label>
                                <input
                                    type="text"
                                    value={formData.area}
                                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                                    className="w-full  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="-mx-3 flex flex-rows">
                        <div className=" w-full px-3 sm:w-1/2">
                            <label className=" block text-base font-medium text-[#07074D]">
                                Địa chỉ
                            </label>
                            <input
                                type="text"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="">
                                <label className=" block text-base font-medium text-[#07074D] ">
                                    Danh mục
                                </label>
                                <Select
                                    id="categorySelect"
                                    isMulti
                                    name="categoryIds"
                                    className="text-red"
                                    value={categoryOptions.filter((option) => formData.categoryids.includes(option.id))}
                                    onChange={handleCategoryChange}
                                    options={categoryOptions}
                                    getOptionLabel={(option) => option.name}
                                    getOptionValue={(option) => option.id}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-full">
                            <div className="px-3 w-full ">
                                <label className="block text-base font-medium text-[#07074D]">
                                    Mô Tả
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full h-40 resize-none appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>

                            <div className="-mx-3 flex flex-col mb-4">
                                <div className='flex flex-row'>
                                    <div className="w-full px-6 ">
                                        <div className="">
                                            <label className=" block text-base font-medium text-[#07074D]">
                                                Giá
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.price}
                                                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>

                                    </div>

                                </div>
                                {/* <div className='flex flex-row'>
                  <div className='w-full px-3 sw:w-1/2'>
                    <label className=" block text-base font-medium text-[#07074D]">
                      Giới tính
                    </label>
                    <select
                      value={editingUser.gender}
                      onChange={(e) => setEditingUser({ ...editingUser, gender: e.target.value === 'true' })}
                      className="w-max-[50px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value={true}>Nam</option>
                      <option value={false}>Nữ</option>
                    </select>
                  </div>


                </div> */}


                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 border border-black h-[200px]">
                            <label className=" block text-base font-medium text-[#07074D] ">
                                Diện Tích
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <button className="hover:shadow-form rounded-md bg-[#3eb15b] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            onClick={handleSave}
                        >
                            Lưu
                        </button>
                        <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            onClick={toggleForm}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditPost;