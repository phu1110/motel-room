import React from 'react'
import { Slide } from 'react-slideshow-image';
import anhtro from '../../assets/images/nhanobita.jpg'
import nha from '../../assets/images/nha.jpg'
import icons from "../../ultils/icons";
import 'react-slideshow-image/dist/styles.css'
import '../../assets/css/slider.css'
import { TiemKiemGia,TinMoi ,SanPham1} from "../../components";
const { BsChevronRight } = icons;
const Productdetails = () => {
    const images = [anhtro,nha,anhtro];
    return (
        <div className='w-1100 flex justify-between gap-2'>
          <div>
          <div className='left w-[750px] h-[1000px] border border-black rounded-lg overflow-auto'>
            <Slide >
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
          </Slide>
          <div className='ml-[15px]'>
          <p className='text-pink-400 text-3xl cursor-pointer'>nhà trọ nhưng không phải là nhà trọ aaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaa</p>
          <div className='flex items-center gap-2'>
          <p className='text-gray-400 text-sm'>chuyên mục :</p>
          <a href='/Product' className='text-blue-500 hover:text-pink-500'> trọ dỏm</a>
          </div>
          <div className='flex items-center gap-2'>
            <p>Địa chỉ : </p>
            <p>Nhà Cầu Giấy Phường Chưa Rõ</p>
          </div>
          <div className='flex items-center gap-6'>
            <p className='text-xl text-green-300'>3Triệu7 Tháng</p>
            <p>25 Mét Vuông</p>
            <p>Hôm Nay</p>
          </div>
          </div>
          <div className='mt-[10px]'>
            <p className='text-2xl ml-[5px]'> Thông Tin Mô Tả</p>
            <div className='ml-[25px]'>
            <p className='text-violet-400 py-[4px] ' >PHÒNG TRỌ MỚI, ĐẸP SỐ 373/1/2a LÝ THƯỜNG KIỆT, GẦN ĐH BÁCH KHOA</p>
            <p className='text-violet-400 py-[4px] ' >- Phòng nằm ngay trung tâm quận Tân Bình (xem hình thật). HẼM THÔNG, HẼM TO cách ĐƯỜNG LÝ THƯỜNG KIỆT 30m.</p>
            <p className='text-violet-400 py-[4px] ' >- Nằm cách Trường Đại Học BÁCH KHOA 700m, cách chợ Ông Địa 100m, Nằm sau lưng trường THPT Nguyễn Thái Bình, cách chợ Tân Bình 800m</p>
            <p className='text-violet-400 py-[4px] ' >- Phòng được ốp lát gạch sạch sẽ , tất cả các phòng đều có Máy lạnh, Quạt hút nhưng Cửa sổ vẫn bao la… nhiều phòng có BAN CÔNG rất thoáng mát.</p>
            <p className='text-violet-400 py-[4px] ' >- Phòng có Gác lững đẹp nằm ngủ, có kệ Bếp nấu ăn, Toilet đầy đủ thiết bị vệ sinh, nước nóng năng lượng mặt trời</p>
            <p className='text-violet-400 py-[4px] ' >- Thang máy chất lượng thuận tiện đi lại, Có Camera an ninh quan sát các tầng, khóa vân tay, Sân thượng phơi quần áo có mái che.</p>
            <p className='text-violet-400 py-[4px] ' >- Internet cáp quang Wifi được lắp đặt từng phòng rất mạnh, cáp Tivi, Pccc tự động</p>
            <p className='text-violet-400 py-[4px] ' >- Bỏ xe dưới tầng hầm bảo vệ trong coi, rất an ninh không chung chủ.</p>
            <p className='text-violet-400 py-[4px] ' >- Bảo vệ trong coi 24/24 giúp Bạn có cảm giác an toàn, khóa vân tay giờ giấc tự do.</p>
            </div>
          </div>
            </div>
            <div className="border border-black rounded-lg mt-[15px]">
        <SanPham1 images={anhtro} link={'/Product'} content={'Chưa Biết Gì Hết'}
            address={'Chưa Có Nhà Lấy đâu ra địa chỉ'} price={'1 triệu 5'} acreage={'300 m2'}
            description={'PHÙ HỢP VỚI SINH VIÊN VÀ NGƯỜI ĐI LÀMĐANG SETUP – 28/08/2023 KHAI TRƯƠNGNgày 15/08 đã bắt đầu nhận khách (khuyến mãi 20%/tháng đầu).- Phong cách thiết…'}
            phone={'0797878315'} time={'chưa bik'}>
          </SanPham1>
        <SanPham1 images={anhtro} link={'/Product'} content={'Chưa Biết Gì Hết'}
            address={'Chưa Có Nhà Lấy đâu ra địa chỉ'} price={'1 triệu 5'} acreage={'300 m2'}
            description={'PHÙ HỢP VỚI SINH VIÊN VÀ NGƯỜI ĐI LÀMĐANG SETUP – 28/08/2023 KHAI TRƯƠNGNgày 15/08 đã bắt đầu nhận khách (khuyến mãi 20%/tháng đầu).- Phong cách thiết…'}
            phone={'0797878315'} time={'chưa bik'}>
          </SanPham1>
        <SanPham1 images={anhtro} link={'/Product'} content={'Chưa Biết Gì Hết'}
            address={'Chưa Có Nhà Lấy đâu ra địa chỉ'} price={'1 triệu 5'} acreage={'300 m2'}
            description={'PHÙ HỢP VỚI SINH VIÊN VÀ NGƯỜI ĐI LÀMĐANG SETUP – 28/08/2023 KHAI TRƯƠNGNgày 15/08 đã bắt đầu nhận khách (khuyến mãi 20%/tháng đầu).- Phong cách thiết…'}
            phone={'0797878315'} time={'chưa bik'}>
          </SanPham1>
        <SanPham1 images={anhtro} link={'/Product'} content={'Chưa Biết Gì Hết'}
            address={'Chưa Có Nhà Lấy đâu ra địa chỉ'} price={'1 triệu 5'} acreage={'300 m2'}
            description={'PHÙ HỢP VỚI SINH VIÊN VÀ NGƯỜI ĐI LÀMĐANG SETUP – 28/08/2023 KHAI TRƯƠNGNgày 15/08 đã bắt đầu nhận khách (khuyến mãi 20%/tháng đầu).- Phong cách thiết…'}
            phone={'0797878315'} time={'chưa bik'}>
          </SanPham1>
        </div>
          </div>
            <div className='right'>
            <div className="right w-[340px] flex flex-col gap-4">
        <div className="border border-black h-[380px] rounded-lg">
          <h2 className="text-center text-xl font-bold my-4">Tìm theo giá</h2>
          <div className="grid grid-cols-2 gap-4">
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'1 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'2 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'3 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'4 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'5 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'6 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'7 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'8 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'9 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'10 Triệu'}></TiemKiemGia>
          </div>
        </div>
        <div className="border border-black h-[340px] rounded-lg">
          <h2 className="text-center text-xl font-bold my-4">Tìm Trọ Theo Giá</h2>
          <div className="grid grid-cols-1 gap-2">
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Thuê Nhà Giá Rẻ'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Thuê Nhà Giá Rẻ'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Thuê Nhà Giá Rẻ'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Thuê Nhà Giá Rẻ'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Thuê Nhà Giá Rẻ'}></TiemKiemGia>
          </div>
        </div>
        <div className="border border-black h-[220px] rounded-lg">
          <h2 className="text-center text-xl font-bold my-4">Tìm Theo Diện Tích</h2>
          <div className="grid grid-cols-2 gap-2">
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Bao Nhiêu Mét ?'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Bao Nhiêu Mét ?'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Bao Nhiêu Mét ?'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Bao Nhiêu Mét ?'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Bao Nhiêu Mét ?'}></TiemKiemGia>
          </div>
        </div>
        <div className="border border-black rounded-lg ">
          <TinMoi images={anhtro} title={'Nhà Của thằng này lạ quá ta'} price={'5 triệu'} date={'11/10/2003'}></TinMoi>
          <TinMoi images={anhtro} title={'Nhà Của thằng này lạ quá ta'} price={'5 triệu'} date={'11/10/2003'}></TinMoi>
          <TinMoi images={anhtro} title={'Nhà Của thằng này lạ quá ta'} price={'5 triệu'} date={'11/10/2003'}></TinMoi>
          <TinMoi images={anhtro} title={'Nhà Của thằng này lạ quá ta'} price={'5 triệu'} date={'11/10/2003'}></TinMoi>
        </div>
            </div>
      </div>
        </div>
    )
}

export default Productdetails