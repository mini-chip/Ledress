'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nickname, setNickname] = useState('')

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg space-y-8 w-full max-w-sm">
                {/* 로고 */}
                <div className="flex justify-center">
                    <Image src="/images/logo.svg" alt="logo" width={150} height={150} />
                </div>

                {/* 이메일 입력 */}
                <div className="w-full">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        이메일
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="이메일 입력"
                    />
                </div>

                {/* 패스워드 입력 */}
                <div className="w-full">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                        패스워드
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="패스워드 입력"
                    />
                </div>

                {/* 닉네임 입력 */}
                <div className="w-full">
                    <label htmlFor="nickname" className="block text-gray-700 font-medium mb-2">
                        닉네임
                    </label>
                    <input
                        id="nickname"
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="닉네임 입력"
                    />
                </div>

                {/* 가입 버튼 */}
                <button type="submit" className="w-full yellow">
                    가입
                </button>
            </form>
        </div>
    )
}
