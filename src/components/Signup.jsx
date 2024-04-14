import React from 'react'
import { Logo, Button, Input, GetImagePreview } from "./index";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../store/slices/authSlice"
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function Signup() {

  const { handleSubmit, register, control, formState: { errors },} = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  //const loading = useSelector((state) => state.auth?.loading);

  const submit = async (user) => {
    console.log(user);
    const response = await dispatch(createAccount(user));
    console.log(response)
  }
  return (
    <>
        <div className="h-screen overflow-y-auto bg-[#121212] text-white">
            <div className="mx-auto my-8 flex w-full max-w-sm flex-col px-4">
                <div className="mx-auto inline-block w-16">
                    <Logo />
                </div>
                <form
                    onSubmit={handleSubmit(submit)}
                    className="space-y-4 p-2 text-sm sm:w-96 w-full"
                >
                    <div className="w-full relative h-28">
                        <div className="w-full h-full">
                            <GetImagePreview
                                name="coverImage"
                                control={control}
                                className="w-full h-28 object-cover border-none border-slate-900"
                                cameraIcon
                            />
                            <div className="text-sm absolute right-2 bottom-2 hover:text-purple-500 cursor-default">
                                Cover Image
                            </div>
                        </div>
                        <div className="absolute left-2 bottom-2 rounded-full border-2">
                            <GetImagePreview
                                name="avatar"
                                control={control}
                                className="object-cover rounded-full h-20 w-20 outline-none"
                                cameraIcon={true}
                                cameraSize={20}
                            />
                        </div>
                    </div>

                    {errors.avatar && (
                        <div className="text-red-500">
                            {errors.avatar.message}
                        </div>
                    )}
                    <Input
                        label="Username: "
                        type="text"
                        placeholder="Enter your username"
                        {...register("username", {
                            required: "username is required",
                        })}
                        className="rounded-lg border bg-transparent px-2 py-2"
                    />
                    {errors.username && (
                        <span className="text-red-500">
                            {errors.username.message}
                        </span>
                    )}
                    <Input
                        label="Fullname: "
                        type="text"
                        placeholder="Enter your fullname"
                        {...register("fullName", {
                            required: "fullName is required",
                        })}
                        className="rounded-lg border bg-transparent px-2 py-2"
                    />
                    {errors.fullName && (
                        <span className="text-red-500">
                            {errors.fullName.message}
                        </span>
                    )}
                     <Input
                        label="Email: "
                        type="email"
                        placeholder="Enter your email address"
                        {...register("email", {
                            required: "email is required",
                        })}
                        className="rounded-lg border bg-transparent px-2 py-2"
                    />
                    {errors.email && (
                        <span className="text-red-500">
                            {errors.email.message}
                        </span>
                    )}
                    <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: "password is required",
                        })}
                        className="rounded-lg border bg-transparent px-2 py-2"
                    />
                    {errors.password && (
                        <span className="text-red-500">
                            {errors.password.message}
                        </span>
                    )}

                    <Button
                        type="submit"
                        bgColor="bg-purple-500"
                        className="w-full sm:py-3 py-2 hover:bg-purple-700 text-lg"
                    >
                        Signup
                    </Button>
                    
                    <p className="text-center text-sm">
                        Already have an account?{" "}
                        <Link
                            to={"/login"}
                            className="text-purple-600 cursor-pointer hover:opacity-70"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    </> 
  )
}

export default Signup