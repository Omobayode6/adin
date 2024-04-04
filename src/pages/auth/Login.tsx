import authImage from '../../assets/images/authImage.png'
import adinLogo from '../../assets/icons/logo.png'
import { TextField } from '../../components/reusable/InputForm'
import { useForm } from "react-hook-form";
import { useState } from 'react';

const Login = () => {
  const { handleSubmit, control, setValue } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='paddingX pt-[100px] '>
      <img width={280} src={adinLogo} alt="Adin University Logo " className='mb-8'/>
      <div className='flex'>
        <div>
          <h2 className="font-bold text-3xl leading-4 text-[#0E1F1D] mb-2">Welcome back !</h2>
          <p className='text-[12px] text-[#4f5662]'>Enter your email address and password to login.</p>
          <form >
            <TextField
              name='matric'
              label='Matric Number'
              placeholder='Enter your matric number'
              control={control}
            /> 
            <TextField
              name='password'
              label='Password'
              placeholder='Enter your password'
              type={showPassword ? "text" : "password"}
              control={control}
              rules={{
                required: "This field is required",
                minLength: 6,
                pattern: {
                  message:
                    "Password must contain at least one special character, one Upper case, and one number,",
                  value:
                    /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~\\-])(?=.*[A-Z])(?=.*\d)(?!.*(\d)\1)[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]{6,}$/, //eslint-disable-line
                },
              }}
            />
            <div className="flex items-center cursor-pointer gap-2">
              <input type="checkbox" name="" id="rememberMe" />
              <label
                htmlFor="rememberMe"
                className="cursor-pointer"
              >
                Remember me
              </label>
            </div>

          </form>

        </div>
        <div >
          <img src={authImage} alt="LMS" className='max-w-[400px]'/>

        </div>

      </div>
      
    </div>
  )
}

export default Login