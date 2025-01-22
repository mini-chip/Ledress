'use client'

import { useState } from 'react'
import './globals.css'
export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nickname, setNickname] = useState('')

    return (
        <form>
            <p>
                <strong>이메일</strong>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </p>
            <p>
                <strong>패스워드</strong>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </p>
            <p>
                <strong>닉네임</strong>
                <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
            </p>
            <p>
                <button type="submit" value="가입" />
            </p>
        </form>
    )
}
