import React, { useState, useEffect } from "react";
import { getUserData,deletePost } from '../../api/api.js';
import moment from 'moment';
import Pagination from "./Pagination.js";
import notfound from '../../assets/images/not_found.png'
import EditPost from "./EditPost.js";
import { deletePost, getUserData } from '../../api/api.js';
import moment from 'moment';
import Pagination from "./Pagination.js";
import notfound from '../../assets/images/not_found.png'
import { toast } from 'react-toastify';
import ConfirmationModal from '../../components/ConfirmationModal'
import { Link } from "react-router-dom";
function TruncatedText({ text, maxLength }) {
  if (text.length <= maxLength) {
    return (
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {text}
      </td>
    );
  } else {
    const truncatedText = text.slice(0, maxLength) + "...";
    return (
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {truncatedText}
      </td>
    );
  }
}

const NewsManager = () => {
  const [showForm, setShowForm] = useState(false);
  const [detailuser, setDetailUser] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImages, setSelectedImages] = useState([]);
  const postsPerPage = 5;
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData();
        setDetailUser(userData);
      } catch (error) {
        // Handle errors if needed
      }
    };

    fetchData();
  }, [showForm,detailuser]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleDelete = async (id) => {
      await deletePost(id);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = detailuser.posts ? detailuser.posts.slice(indexOfFirstPost, indexOfLastPost) : [];

  const paginate = (pageNumber) => {
    if (detailuser && detailuser.posts) {
      setCurrentPage(pageNumber);
    }
  };
  const calculateElapsedTime = (post) => {
    if (post && post.dateCreated) {
      const postDate = moment(post.dateCreated);
      const currentDate = moment();

      const hoursDiff = currentDate.diff(postDate, 'hours');
      const minutesDiff = currentDate.diff(postDate, 'minutes') % 60;
      const dateDiff = currentDate.diff(postDate, 'hours') % 24;

      if (hoursDiff >= 24) {
        // Nếu thời gian trôi qua lớn hơn hoặc bằng 24 giờ, hiển thị ngày đăng
        return `${dateDiff} ngày trước`;
      } else if (hoursDiff > 0) {
        // Nếu thời gian trôi qua dưới 24 giờ, hiển thị số giờ và phút trước đó
        return `${hoursDiff} giờ ${minutesDiff} phút trước`;
      } else {
        // Nếu thời gian trôi qua dưới 1 giờ, chỉ hiển thị số phút trước đó
        return `${minutesDiff} phút trước`;
      }
    }

    return 'Không xác định';
  };
  const getImageUrl = (actualFile) => {
    // Check if actualFile is not null before splitting
    if (actualFile && typeof actualFile === 'string') {
      // Xử lý actualFile để đảm bảo định dạng đúng
      const cleanedUrl = actualFile.split(';')[0];
      return `https://localhost:7139/${cleanedUrl}`;
    } else {
      // Handle the case where actualFile is null or not a string
      console.error("Invalid actualFile:", actualFile);
      return ""; // or return a default image URL
    }
  };





  const [editingPost, setEditingPost] = useState(null);
    setSelectedImages(selectedImages.concat(selectedValidImages));
  };
  const handleDelete = (postid) => {
        // Hiển thị toast để xác nhận trước khi xóa
        toast.info(
            <ConfirmationModal
            handleDeleteConfirmed={() => handleDeleteConfirmed(postid)}
            hideToast={hideToast}
        />,
        {
            position: 'top-right',
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
             // Đóng toast khi nó được đóng
        }
        );
    };
  //...

const handleDeleteConfirmed = async (postid) => {
  try {
    await deletePost(postid);
    const updatedUsers = detailuser.posts.filter((post) => post.id !== postid);

    if (detailuser) {
      setDetailUser({ ...detailuser, posts: updatedUsers });
    }

    // Kiểm tra xem trang hiện tại có còn chứa bài đăng không
    const newTotalPosts = updatedUsers.length;
    const newTotalPages = Math.ceil(newTotalPosts / postsPerPage);

    // Nếu trang hiện tại lớn hơn tổng số trang mới, điều chỉnh currentPage
    if (currentPage > newTotalPages) {
      setCurrentPage(newTotalPages);
    }

    toast.success('Xóa dữ liệu thành công', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
    });
  } catch (error) {
    // Xử lý lỗi
    toast.error('Xóa dữ liệu không thành công', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
    });
  }
  hideToast();
};

//...

const hideToast = () => {
    // Ẩn toast nếu người dùng hủy bỏ
    toast.dismiss();
};
  return (
    <div className="">
      {detailuser ? (
        <div className="text-gray-900 bg-gray-200">
          <div className="p-4 flex">
            <h1 className="text-3xl ml-[50px]">Tin Đã Đăng </h1>
          </div>
          <div className="px-3 py-4 flex justify-center ">
            <div className="flex flex-col w-full">
              <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block w-full max-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    {detailuser.posts && detailuser.posts.length > 0 ? (
                      <table className="min-w-full">
                        <thead className="bg-white border-b">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              ID
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Ảnh Trọ
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Tiêu Đề
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Giá
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Ngày Đăng
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Ngày Hết Hạn
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Trạng Thái
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Chỉnh Sửa
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentPosts.map((post) => (
                            <tr className="bg-gray-100 border-b" key={post.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {post.id}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <div className="w-[80px] h-[60px] border border-gray-300">
                                  {post.actualFile ? (
                                    <img
                                      src={getImageUrl(post.actualFile)}
                                      className="w-full h-full object-cover"
                                      alt="not found"
                                    />
                                  ) : (
                                    <img
                                      src={notfound}
                                      className="w-full h-full object-cover"
                                      alt="not found"
                                    />
                                  )}
                                </div>

                              </td>

                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                
                                <TruncatedText text={post.title} maxLength={60}/>
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {post.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {calculateElapsedTime(post)}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {post.expireDate}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {post.status === 'Đang Chờ Duyệt' ? (
                                  <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
                                    Chờ duyệt
                                  </span>
                                ) : post.status === 'Đã Duyệt' ? (
                                  <span className="bg-green-600 text-white py-1 px-3 rounded-full text-xs">
                                    Đã duyệt
                                  </span>
                                ) : post.status === 'Không Chấp Nhận Duyệt' ? (
                                  <span className="bg-rose-600 text-white py-1 px-3 rounded-full text-xs">
                                    Không được duyệt
                                  </span>
                                ) : post.status === 'Đã Ẩn' ? (
                                  <span className="bg-rose-600 text-white py-1 px-3 rounded-full text-xs">
                                    Đã Ẩn
                                  </span>
                                ) : null}
                              </td>
                              <td className="px-6 py-2 ">
                                <span className="text-yellow-500 flex">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-green-700 mx-2 cursor-pointer"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    onClick={() => {
                                      const postToEdit = detailuser.posts.find((p) => p.id === post.id);
                                      setEditingPost(postToEdit);
                                      toggleForm();
                                    }}
                                  >
                                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                    <path
                                      fillRule="evenodd"
                                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-red-700 cursor-pointer"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    onClick={() => {
                                      const postIdToEdit = detailuser.posts.find((p) => p.id === post.id)?.id;
                                      handleDelete(postIdToEdit);
                                    }}
                                    onClick={() => handleDelete(post.id)}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                    <div  className="h-5 w-5 text-red-700 cursor-pointer px-2">
                                    <Link to={`/Product/${post.id}`}>
                                    <i class="fa-solid fa-eye"></i>
                                    </Link>
                                    </div>
                                </span>
                              </td>

                            </tr>

                          ))}

                        </tbody>

                      </table>
                    ) : (
                      <p>Không có bài đăng </p>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={detailuser.posts.length}
              paginate={paginate}
            />
          </div>
        </div>
      ) : (
        <p>Đang lấy thông tin đợi chút nha </p>
      )}
      {showForm && (
        <EditPost data={editingPost} toggleForm={toggleForm}/>
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="mx-auto w-full max-w-[1000px] bg-white p-12 rounded-lg shadow-lg">
            <form action="https://formbold.com/s/FORM_ID" method="PUT">
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
                      value={editingPost.title}
                      onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 ">
                  <div className="">
                    <label className=" block text-base font-medium text-[#07074D] ">
                      Diện Tích
                    </label>
                    <input
                      type="text"
                      value={editingPost.area}
                      onChange={(e) => setEditingPost({ ...editingPost, area: e.target.value })}
                      className="w-full  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className=" px-1">
                <label className=" block text-base font-medium text-[#07074D]">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  value={editingPost.address}
                  onChange={(e) => setEditingPost({ ...editingPost, address: e.target.value })}
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="flex justify-between">
                <div className="w-full">
                  <div className="px-3 w-full ">
                    <label className="block text-base font-medium text-[#07074D]">
                      Mô Tả
                    </label>
                    <textarea
                      value={editingPost.description}
                      onChange={(e) => setEditingPost({ ...editingPost, description: e.target.value })}
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
                            value={editingPost.price}
                            onChange={(e) => setEditingPost({ ...editingPost, price: e.target.value })}
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
                // onClick={handleSave}
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
      )}
    </div>
  );

};

export default NewsManager;
