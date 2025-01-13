import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
    title: 'Ledress',
    description: 'Ledress 입니다',
}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
