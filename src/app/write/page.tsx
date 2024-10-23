"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { handleSubmit, PostData } from '@/utils/postUtils';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function WritePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image'
  ];

  const onSubmit = () => {
    const postData: PostData = { title, content };
    handleSubmit(postData);
  };

  return (
    <div className="p-4 bg-white min-h-screen text-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-black">새 글 작성</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* 입력 폼 */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목"
              className="w-full sm:flex-grow p-2 border rounded text-gray-800"
            />
            <button
              onClick={onSubmit}
              className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors whitespace-nowrap"
            >
              작성 완료
            </button>
          </div>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            className="h-[calc(100vh-250px)] lg:h-[calc(100vh-200px)]"
          />
        </div>
        
        {/* 실시간 미리보기 */}
        <div className="w-full lg:w-1/2 border rounded p-4 mt-4 lg:mt-0">
          <h2 className="text-xl font-bold mb-2">{title || '(제목 없음)'}</h2>
          <div className="prose max-w-none h-[calc(100vh-300px)] lg:h-[calc(100vh-200px)] overflow-auto">
            {content ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              '(내용 없음)'
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
