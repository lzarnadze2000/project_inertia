import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ email, password }) => {
    const user = {
     
      email,
      password
    };
    fetch("http://localhost:8080/user/checkEmail",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
      }).then(()=>{
      console.log("User Logged Successfully");
      })
    console.log(user);
  };

  const navigate = useNavigate();

  return (
    <div className="grid justify-items-center p-8  ml-[500px] mt-[200px]">
      <div   className="bg-white p-8 rounded shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center text-primary">Sign In</h2>
        <form
          className="flex flex-col space-y-3 text-black" 
          onSubmit={handleSubmit(submitHandler)}
        >
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
      inputProps={{ type: "email" }}
      error={Boolean(errors.email)}
      helperText={errors.email ? "Please enter a valid email address" : ""}
      {...field}
    />
  )}
/>
          {/*password*/}
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
                inputProps={{ type: "password" }}
                error={Boolean(errors.password)}
                helperText={
                  errors.password
                    ? errors.password.type === "maxLength" ||
                      errors.password.type === "minLength"
                      ? "password must contain between 6 and 12 letters or numbers."
                      : "password is required"
                    : ""
                }
                {...field}
              ></TextField>
            )}
          ></Controller>
          <p className="text-secondary text-center mt-8">
            Dont Have A Account?{" "}
            <span
             className="text-primary font-bold cursor-pointer"
              role="button"
              onClick={() => {
                navigate("/SignUp");
              }}
            >
              Sign Up
            </span>
          </p>
          <button className='bg-[#7D3B52] hover:bg-rose-200 text-white font-bold py-2 px-4 rounded' type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;