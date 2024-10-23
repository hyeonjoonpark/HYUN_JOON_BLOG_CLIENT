"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const WriteButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/write'); // '/write'는 새 글 작성 페이지의 경로입니다. 필요에 따라 수정하세요.
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
    >
      글쓰기
    </button>
  );
};

export default WriteButton;
