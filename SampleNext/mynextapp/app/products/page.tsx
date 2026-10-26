import React from "react";
import Link from "next/link";

export default function Products() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">product</h1>
                <Link href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>
                    Login
                </Link>
            </main>
        </div>
    );
}