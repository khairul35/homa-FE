import { Props } from "./props"
import styles from './index.module.css';

const Component = (props: Props) => {
    const { onBack, onBackToMain, updateUser, user, numberOfUser } = props;
    return (
        <div className="bg-bg-color min-h-screen overflow-auto pb-5">
            <div className="bg-white border-b-2 border-black">
                <h1 className="pl-20 pt-5 pb-5 text-l font-bold">
                    <a
                        className="text-blue-600 cursor-pointer"
                        onClick={() => onBackToMain()}
                    >
                        Organization Setting
                    </a>
                    &nbsp;&gt;&nbsp;
                    <a
                        className="text-blue-600 cursor-pointer"
                        onClick={() => onBack()}
                    >
                        Users ({numberOfUser})
                    </a>
                    &nbsp;&gt; {user?.firstName} {user?.lastName}
                </h1>
            </div>
            <div className="mt-0 p-10 pl-20 pr-20">
                <div className={styles.card}>
                    <h2 className="text-xl font-semibold p-5 pl-20  border-b border-gray-300">
                        Basic Information
                    </h2>
                    <div className="p-5 flex justify-center">
                        <form method="dialog">
                            
                        <div className="p-5 flex flex-wrap justify-center md:justify-start gap-5">
                        {/* First Name */}
                            <div className="w-full md:w-[calc(50%-1px)]"> {/* Adjust width for small screens */}
                                <label className="label mt-2">First Name</label>
                                <input
                                    value={user?.firstName}
                                    onChange={(e) => updateUser({ firstName: e.target.value })}
                                    type="text"
                                    placeholder="First Name"
                                    className="input-sm input input-bordered bg-white border-gray-400 w-full"
                                />
                            </div>

                            {/* Last Name */}
                            <div className="w-full md:w-[calc(50%-1px)]"> {/* Adjust width for small screens */}
                                <label className="label mt-2">Last Name</label>
                                <input
                                    value={user?.lastName}
                                    onChange={(e) => updateUser({ lastName: e.target.value })}
                                    type="text"
                                    placeholder="Last Name"
                                    className="input-sm input input-bordered bg-white border-gray-400 w-full"
                                />
                            </div>
                        </div>
                            <label className="label mt-2">Email</label>
                            <input
                                value={user?.email}
                                onChange={(e) => updateUser({
                                    email: e.target.value
                                })}
                                type="text"
                                placeholder="Email"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-2">Phone Number</label>
                            <input
                                value={user?.phoneNumber}
                                onChange={(e) => updateUser({
                                    phoneNumber: e.target.value
                                })}
                                type="text"
                                placeholder="Phone Number"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-2">Password</label>
                            <input
                                value={user?.password}
                                onChange={(e) => updateUser({
                                    password: e.target.value
                                })}
                                type="password"
                                placeholder="Password"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Component;
