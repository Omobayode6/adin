import { Bell, Plus, Search, X } from 'lucide-react'
import book from '../../assets/icons/book.svg'
import file from '../../assets/icons/file.svg'
import dummyUser from '../../assets/images/dummy-user.png'
import UserInstructorsTable from '../../components/userManagement/UserInstructorTable'
import { useDepartments, useInstructors } from '../../hooks/query'
import { useEffect, useState } from 'react'
import { TextField } from '../../components/reusable/InputForm'
import { useForm } from 'react-hook-form'
import { useAddLecturer } from '../../hooks/mutate'

const UserManagement = () => {
  const {data:instructors}  = useInstructors()
  const {data:departments, isPending:departmentIsPending} = useDepartments()
  const [departmentId, setDepartmentId] = useState(0)
  const [instructor, setInstructor] = useState(false)
  const {mutate, isPending} = useAddLecturer()
  const {control, handleSubmit, reset, formState: {isSubmitSuccessful}} = useForm()
  /* eslint-disable no-useless-escape */

  const addLecturer = async(data:any) => {
    mutate({
      ...data,
      departmentId: departmentId
    })
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: '',
        midleName: '',
        lastName: '',
        phonenumber: '',
      });
      setDepartmentId(0)
      setInstructor(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

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
        <button className='text-[#F3F4F6] text-[20px] font-bold leading-[24px] bg-[#008688] rounded-[16px] px-[28px] py-[15px] '
          onClick={()=> setInstructor(true)}
        >
          <Plus className='inline'/> Add Instructor
        </button>
      </div>

      <div>
        <UserInstructorsTable instructors = {instructors} />
      </div>
      {instructor && (
        <div className="animate-jump fixed top-0 left-0 z-50 w-full h-full bg-[#3a3a3a]/30 backdrop-blur-[8px] overflow-y-auto no-scrollbar py-8">
        <div className="py-4 min-h-[246px] rounded-[16px] absolute bg-white top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-50">
          <div className='px-8 flex items-center gap-x-4 justify-between border-b border-borderColor '>
            <h2 className="text-[#374151] text-[24px] font-bold">
              Add Lecturer
            </h2>
            <X className="ml-auto w-fit text-[#1D2026]" onClick={()=>setInstructor(!instructor)} />
          </div>
          {/* Search */}
          <div className='py-4 px-8'>
            <form className='w-fit mx-auto' onSubmit={handleSubmit(addLecturer)}>
              <TextField
                name='firstName'
                label='First Name'
                placeholder='Enter the first name'
                control={control}
                rules={{
                  required: "This field is required",
                }}
              />
              <TextField
                name='middleName'
                label='Midle Name'
                placeholder='Enter the middle name'
                control={control}
                rules={{
                  required: "This field is required",
                }}
              />
              <TextField
                name='lastName'
                label='Last Name'
                placeholder='Enter the last name'
                control={control}
                rules={{
                  required: "This field is required",
                }}
              />
              <div className="w-full -mt-1 mb-2">
                <label htmlFor={"selectDepartment"} className="block font-semibold text-[#4f5662] text-sm  mb-[6px] leading-tight">
                  Select Department
                </label>
                <select
                  className=" inline-flex justify-start items-center px-4 py-2 text-base outline-none rounded-lg text-[#4f5662] border border-[#afa2c3]  gap-2 w-full h-12 font-normal leading-normal bg-white appearance-none disabled:opacity-50 disabled:hover:cursor-not-allowed"
                  value={departmentId}
                  onChange={(e) => {
                    setDepartmentId(Number(e.target.value));
                  }}
                >
                  <option value={0}>Select your department</option>
                  {departments?.map((country: any) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                  {departmentIsPending && <option value="">loading...</option>}
                </select>
              </div>
              <TextField
                name='email'
                label='Email Address'
                placeholder='Enter the email address'
                type='email'
                control={control}
                rules={{
                  required: "This field is required",
                  pattern: {
                    message: "Enter a valid email",
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  },
                }}
              />
              <TextField
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter the phone number"
                // helperText="Include country code"
                control={control}
                rules={{
                  required: "This field is required",
                  pattern: {
                    message: "Phone number must be 11 digits",
                    value: /^\d{11}$/,
                  },
                }}
              />
              <div className='flex items-center gap-x-4 w-fit ml-auto'>
                <button type='button' className='w-[154px] px-[32px] py-[16px] font-bold border border-primary rounded-[16px] '
                  onClick={()=>setInstructor(!instructor)} 
                >
                  Cancel
                </button>
                <button type='submit' className='w-[154px] px-[32px] py-[16px] text-white font-bold bg-primary rounded-[16px] '>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default UserManagement