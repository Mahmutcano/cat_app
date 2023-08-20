"use client";

import React, { useState, FormEventHandler } from "react";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function page() {
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  if (session) {
    redirect("/");
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
      callbackUrl: "/",
    });
    console.log(result);
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 px-5 py-12 md:w-96 rounded-2xl shadow-lg">
        <div className="px-8">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <form
            onSubmit={onSubmit}
            className="text-sm text-[#002D74] flex flex-col gap-4 mt-4"
          >
            <input
              type="email"
              className="p-2 rounded-xl border"
              placeholder="Email"
              value={userInfo.email}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, email: target.value })
              }
            />
            <input
              type="password"
              className="p-2 rounded-xl border w-full"
              placeholder="Password"
              value={userInfo.password}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, password: target.value })
              }
            />
            <button
              type="submit"
              className="bg-[#002D74] text-white rounded-xl py-2 hover:scale-105
            duration-300"
            >
              Login
            </button>
          </form>
          <div className="mt-2 text-xs text-[#002D74] underline">
            <a href="#">I forgot my password</a>
          </div>
          <div className="mt-6 text-gray-400 grid items-center grid-cols-3">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">or</p>
            <hr className="border-gray-400" />
          </div>
          <button
            onClick={() => signIn("google")}
            className="bg-white px-2 py-2 mt-5 border w-full rounded-xl 
          flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
          >
            <Image
              src="/img/google-logo.png"
              width={30}
              height={30}
              alt="Google Logo"
            />
            <span className="px-2">Sign in with Google</span>
          </button>

          <div className="mt-5 text-xs flex justify-between items-center">
            <p className="text-gray-400">I forgot my password</p>
            <a href="#" className="text-[#002D74]">
              Register
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
