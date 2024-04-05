import { Bell, Plus, Search } from 'lucide-react'
import book from '../../assets/icons/book.svg'
import file from '../../assets/icons/file.svg'
import dummyUser from '../../assets/images/dummy-user.png'

const UserManagement = () => {
  return (
    <div className='ml-[63px] md:ml-[217px] mb-8 px-4 pb-10'>
      {/* header */}
      <div className='py-8 border-b border-borderColor'>
        <div className='flex justify-between items-center gap-x-4'>
          {/* search */}
          <div className='ml-[15%] relative'>
            <input type="text" name="search"
              className=' bg-[#F1F5F9] rounded-[16px] outline-none px-6 py-2 max-w-[520px] lg:w-[520px]'
            />
            <div className='absolute top-2 left-3 text-[#94A3B8]'><Search color='#94A3B8' className='inline'/> Search</div>
          </div>
          {/* User information */}
          <div className='flex items-center gap-x-4'>
            <div className='relative bg-[#F3F8F8] rounded-[16px] p-2 '>
              <div className='absolute right-0 top-0 rounded-[50%] bg-red-600 w-2 h-2 '></div>
              <Bell />
            </div>

            <div className='flex gap-x-2'>
              <img src={dummyUser} alt="user" className='w-[46px] h-[46px] '/>
              <div>
                <p className='text-base text-[#0E1919] font-bold '>Soji Olaiya</p>
                <p className='text-faintText text-[12px] '>College of Medicine</p>
              </div>          
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between mb-4 mt-[50px]'>
        <h2 className='font-semibold text-[28px] leading-[44px] text-[#0E1F1D] '>Instructor's Management</h2>
        <button className='text-[#F3F4F6] text-[20px] font-bold leading-[24px] bg-[#008688] rounded-[16px] px-[28px] py-[20px] '><Plus className='inline'/> Add Instructor</button>
      </div>
    </div>
  )
}

export default UserManagement