'use client';
import { useState } from "react";
import authApi from '@/api/auth';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    if (localStorage.getItem('isLogin') == 'true') {
        router.push('/dashboard');
    }

    const login = async () => {
        /** validate credential of user */
        if (!username && !password) {
            setError('Username and Password is required');
            return;
        } else if (username.length <= 0 && password.length <= 0) {
            setError('Username and Password is required');
            return;
        } else if (username.length <= 0) {
            setError('Username is required');
            return;
        } else if (password.length <= 0) {
            setError('Password is required');
            return;
        } else {
            setError('');
        }

        /** call request to API */
        await authApi.login(username, password)
            .then(({ data }) => {
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                localStorage.setItem('isLogin', 'true');
                router.push('/dashboard');
                window.location.href = '/dashboard';
            })
            .catch((err) => {
                setError(err.message || 'Issues with Log In your account, Please contact customer support!')
            });
    };

    const LoginError = (props: any) => {
        return (
            <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error}</span>
            </div>
        )
    }

    return (
        <main className="min-h-screen items-center justify-between p-24 bg-bg-color">
            <div>
                <div>
                <h1 className="text-5xl font-extrabold border-8 p-5 text-center items-center mb-10 mt-20">MyAccount2U</h1>
                </div>
                <h1 className="text-5xl text-center items-center">Account System</h1>
                <p className="text-center items-center bg-red-200 mt-5">Page will update once get the design</p>
                <div className="flex items-center justify-center h-full pt-20">
                    <input
                        type="text"
                        placeholder="Username"
                        className="input input-bordered input-primary w-full max-w-xs bg-white"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-center h-full pt-4">
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered input-primary w-full max-w-xs bg-white"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-center h-full pt-4">
                    <button
                        className="btn btn-primary w-full max-w-xs"
                        onClick={login}
                    >
                        Login
                    </button>
                </div>
                <div className="flex items-center justify-center h-full pt-4">
                    {error && <LoginError />}
                </div>
            </div>
        </main>
    )
};

export default Login;
