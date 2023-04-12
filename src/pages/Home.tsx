import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-blue font-bold text-[4rem]">My TODOs</h1>
      <div className="flex justify-center gap-5 w-full">
        <Link to="signin" className="w-1/3 py-2 bg-gray rounded-full text-white flex justify-center font-semibold">
          로그인
        </Link>
        <Link to="signup" className="w-1/3 py-2 bg-gray rounded-full text-white flex justify-center font-semibold">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Home;
