import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const formStyles = {
  width: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#FFFFFF',
};

const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [smsNumber, setSmsNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const navigate = useNavigate();

  const submitHandler = async ({
    firstName,
    lastName,
    smsNumber,
    birthdate,
    email,
    password,
  }) => {
    try {
      const user = {
        firstName,
        lastName,
        smsNumber,
        birthdate,
        email,
        password,
      };
  console.log(user.email);
  const emailValue = user.email;
const headers = new Headers();
headers.append('email', emailValue);
  const emailResponse = await fetch('http://localhost:8080/user/checkEmail', { headers })
  .then(res => res.json());
  console.log(user)
      if (emailResponse.data !=null) {
        throw new Error('Email is already used');
      }
  console.log(emailResponse.data)
   if(emailResponse.data==null){
     
      const registrationResponse = await fetch('http://localhost:8080/user/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

     
  
      if (!registrationResponse.ok) {
        throw new Error('Error registering user');
      }
  
      console.log('New User Added');
      navigate('/resendCode');
    } }catch (error) {
      console.error('Error registering user:', error);
    }
  }

  

  return (
    <div className="grid justify-items-center p-8 ml-[300px]">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-primary">Sign Up</h2>

        <div style={formStyles}>
          <form className="flex flex-col space-y-3 text-black" onSubmit={handleSubmit(submitHandler)}>
            {/* firstName */}
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                maxLength: 20,
                minLength: 4,
              }}
              render={({ field }) => (
                <TextField
                  id="firstName"
                  label="firstName"
                  variant="outlined"
                  inputProps={{ type: 'text' }}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName ? 'firstName is required' : ''}
                  {...field}
                />
              )}
            />

            {/* lastName */}
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                maxLength: 20,
                minLength: 4,
              }}
              render={({ field }) => (
                <TextField
                  id="lastName"
                  label="lastName"
                  variant="outlined"
                  inputProps={{ type: 'text' }}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName ? 'lastName is required' : ''}
                  {...field}
                />
              )}
            />

            {/* smsNumber */}
            <Controller
              name="smsNumber"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                maxLength: 9,
                pattern: /^[0-9]+$/i, // ensure only numbers are allowed
                minLength: 9,
              }}
              render={({ field }) => (
                <TextField
                  id="number"
                  label="Number"
                  variant="outlined"
                  inputProps={{ type: 'number' }}
                  error={Boolean(errors.smsNumber)}
                  helperText={errors.smsNumber ? 'Phone number is required' : ''}
                  onBlur={(event) => setSmsNumber(event.target.value)}
                  {...field}
                />
              )}
            />

            {/* birthdate */}
            <Controller
              name="birthdate"
              control={control}
              defaultValue=""
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <TextField
                  id="birthdate"
                  variant="outlined"
                  inputProps={{ type: 'date' }}
                  error={Boolean(errors.birthdate)}
                  helperText={errors.birthdate ? 'Birthdate is required' : ''}
                  onBlur={(event) => setBirthdate(event.target.value)}
                  {...field}
                />
              )}
            />

            {/* email */}
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              }}
              render={({ field }) => (
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  inputProps={{ type: 'email' }}
                  error={Boolean(errors.email)}
                  helperText={errors.email ? 'Please enter a valid email address' : ''}
                  {...field}
                />
              )}
            />

            {/* password */}
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                maxLength: 12,
                minLength: 6,
              }}
              render={({ field }) => (
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  inputProps={{ type: 'password' }}
                  error={Boolean(errors.password)}
                  helperText={
                    errors.password
                      ? errors.password.type === 'maxLength' || errors.password.type === 'minLength'
                        ? 'password must contain between 6 and 12 letters or numbers.'
                        : 'password is required'
                      : ''
                  }
                  {...field}
                />
              )}
            />

            {/* confirmpassword */}
            <Controller
              name="confirmpassword"
              control={control}
              defaultValue=""
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <TextField
                  id="confirmpassword"
                  label="Confirm Password"
                  variant="outlined"
                  inputProps={{ type: 'password' }}
                  error={Boolean(errors.confirmpassword)}
                  helperText={
                    errors.confirmpassword
                      ? errors.confirmpassword.type === 'maxLength' ||
                        errors.confirmpassword.type === 'minLength'
                        ? 'password must contain between 6 and 12 letters or numbers.'
                        : 'password is required'
                      : ''
                  }
                  {...field}
                />
              )}
            />

            <p className="text-secondary text-center mt-8">
              Already Have Account?{' '}
              <span
                className="text-primary font-bold cursor-pointer"
                role="button"
                onClick={() => {
                  navigate('/Signin');
                }}
              >
                Sing In
              </span>
            </p>

            <button
              className="bg-[#7D3B52] hover:bg-rose-200 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
