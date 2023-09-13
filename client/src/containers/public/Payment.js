import React from 'react'
import momo from '../../assets/images/logo_MoMo.png'
import visa from '../../assets/images/Visa.png'
import MasterCard from '../../assets/images/mastercard.png'
import QR from '../../assets/images/QR.png'
import bank from '../../assets/images/bank.png'
const Payment = () => {

  return (
    <div className='w-full'>
      <div className='flex min-h-screen flex-col  bg-white p-16'>
        <div>
          <h1 className="text-3xl  text-black"> Nạp Tiền Vào Tài Khoản</h1>
          <div className="w-full rounded-xl bg-white p-4 shadow-2xl shadow-white/40">
            <div>
              <div style={{ width: '100%', height: '5px', backgroundColor: 'pink' }} className="mb-2 mx-auto"></div>

              <div class="w-full max-w-[1000px] my-auto">


                <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 mr-2 mb-2">
                  <img src={momo} className='mr-2 -ml-1 w-12 h-12 ' alt='not found'></img>
                  Nạp Tiền Bằng MoMo
                </button>
                <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2">
                  <img src={visa} className='mr-2 -ml-1 w-14 h-12' alt='not found'></img>
                  Nạp Tiền Bằng Visa
                </button>
                <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 mr-2 mb-2">
                 <img src={MasterCard} className='mr-2 -ml-1 w-12 h-12' alt='not found'></img>
                  Nạp Tiền Bằng MasterCard
                </button>
                <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 mr-2 mb-2">
                 <img src={QR} className='mr-2 -ml-1 w-12 h-12' alt='not found'></img>
                  Nạp Tiền Bằng QR Code
                </button>
                <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 mr-2 mb-2">
                 <img src={bank} className='mr-2 -ml-1 w-32 h-12' alt='not found'></img>
                  Chuyển Khoản
                </button>
              </div>
              <div className='w-[400px] h-[400px] bg-gray-[#faf8f9] rounded-lg'>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment