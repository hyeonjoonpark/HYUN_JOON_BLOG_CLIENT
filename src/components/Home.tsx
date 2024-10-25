"use client";

import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaInstagram, FaExternalLinkAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import WriteButton from "./WriteButton";

export default function ClientHome() {
  const [activeTab, setActiveTab] = useState("posts");

  const renderContent = () => {
    switch (activeTab) {
      case "posts":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 글 카드 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/post-image.jpg"
                alt="글 이미지"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800">글 제목</h3>
                <p className="text-gray-700 mb-4">글 요약...</p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>2023년 5월 1일</span>
                  <span>조회수 123</span>
                </div>
              </div>
            </div>
            {/* 추가 글 카드들... */}
          </div>
        );
      case "series":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">시리즈</h2>
            <ul className="space-y-4">
              <li className="border-b pb-2">
                <h3 className="text-xl font-semibold text-gray-800">시리즈 1</h3>
                <p className="text-gray-700">시리즈 1 설명...</p>
              </li>
              <li className="border-b pb-2">
                <h3 className="text-xl font-semibold text-gray-800">시리즈 2</h3>
                <p className="text-gray-700">시리즈 2 설명...</p>
              </li>
              {/* 추가 시리즈... */}
            </ul>
          </div>
        );
      case "about":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">소개</h2>
            <p className="text-gray-700">안녕하세요, 저는 백엔드 개발자 hyunjoon park입니다. 주로 Node.js와 Python을 사용하여 개발하고 있습니다.</p>
            {/* 추가 소개 내용... */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* 왼쪽 사이드바 */}
      <aside className="w-64 p-6 border-r border-gray-200">
        <div className="mb-8">
          <Image
            src="/profile-image.jpg"
            alt="프로필 이미지"
            width={500}
            height={500}
            onError={(e) => {
              e.currentTarget.src = "/default-profile-image.jpg"
            }}
          />
          <h2 className="text-xl font-bold text-gray-800 mb-2">hyunjoon park</h2>
          <p className="text-sm text-gray-700">백엔드 개발자</p>
        </div>
        <div className="mb-6">
          <span className="text-sm text-gray-700 mr-4">팔로워 20</span>
          <span className="text-sm text-gray-600">팔로잉 56</span>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mb-4">
          팔로우
        </button>
        <a 
          href="https://occount.bsm-aripay.kr/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors mb-4 flex items-center justify-center"
        >
          포트폴리오 보기 <FaExternalLinkAlt className="ml-2" size={14} />
        </a>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/hyeonjoonpark" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaGithub size={24} />
          </a>
          <a href="https://instagram.com/jjoon1379" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaInstagram size={24} />
          </a>
          <a href="mailto:pjjoon1379@gmail.com" className="text-gray-600 hover:text-gray-900">
            <MdEmail size={24} />
          </a>
        </div>
      </aside>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 p-6">
        <nav className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">hyunjoon park의 블로그</h1>
          <WriteButton />
        </nav>

        <div className="mb-8">
          <ul className="flex space-x-4 border-b">
            <li className={`pb-2 ${activeTab === "posts" ? "border-b-2 border-blue-500" : ""}`}>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab("posts"); }}
                className={activeTab === "posts" ? "text-blue-500" : "text-gray-600 hover:text-gray-900"}
              >
                글
              </a>
            </li>
            <li className={`pb-2 ${activeTab === "series" ? "border-b-2 border-blue-500" : ""}`}>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab("series"); }}
                className={activeTab === "series" ? "text-blue-500" : "text-gray-600 hover:text-gray-900"}
              >
                시리즈
              </a>
            </li>
            <li className={`pb-2 ${activeTab === "about" ? "border-b-2 border-blue-500" : ""}`}>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab("about"); }}
                className={activeTab === "about" ? "text-blue-500" : "text-gray-600 hover:text-gray-900"}
              >
                소개
              </a>
            </li>
          </ul>
        </div>

        {renderContent()}
      </main>
    </div>
  );
}
