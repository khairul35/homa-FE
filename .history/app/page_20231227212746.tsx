'use client';

import router from 'next/router';
import Link from 'next/link';

export default function Home() {
  if (localStorage.getItem('isLogin') == 'true') {
      router.push('/dashboard');
  }
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-bg-color">
        <div>
          <div>
            <h1 className="text-5xl font-extrabold border-8 p-5 text-center items-center mb-10 mt-20">MyAccount2U</h1>
          </div>
          <h1 className="text-5xl text-center items-center">Account System</h1>
          <p className="text-center items-center bg-red-200 mt-5">Page will update once get the design</p>
          <div className="items-center flex justify-center h-full pt-4 mt-10">
            <Link href="/login">
              <button className="btn btn-primary w-full max-w-xs pl-5 pr-5">Login &rarr;</button>
            </Link>
          </div>
          <div className="items-center flex justify-center h-full pt-4">
            <Link href="/login">
              Sign Up
            </Link>
          </div>
        </div>
      </main>
  )
}
