import { useState } from 'react';
import { useRouter } from 'next/router';

export default function WritePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 글 저장 로직을 구현합니다
    console.log('제목:', title);
    console.log('내용:', content);
    // 저장 후 홈페이지로 리다이렉트
    router.push('/');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">제목을 입력하세요</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
          className="w-full p-2 mb-4 text-2xl font-bold border-b border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="당신의 이야기를 적어보세요..."
          className="w-full h-96 p-2 mb-4 text-lg border-none resize-none focus:outline-none"
        />
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => router.push('/')}
            className="text-gray-600 hover:text-gray-800"
          >
            나가기
          </button>
          <div>
            <button
              type="button"
              className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              임시저장
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              출간하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
