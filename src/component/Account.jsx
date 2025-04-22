import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faEnvelope,
    faBriefcase,
    faLock,
} from "@fortawesome/free-solid-svg-icons";
const Account = () => {
    return (
        <>
            <div className="flex justify-center flex-col items-center min-h-screen bg-gray-50">


                <h2 className="text-center font-extrabold text-2xl ">MilestoneHQ</h2>
                <h3 className="text-center font-bold text-gray-500 mt-2">create your account</h3>
                <p className="text-center text-gray-400 mb-3">start managing your projects today </p>


                <div className="w-full p-7 bg-white max-w-md shadow-md">

                    <form className="space-y-3  p-4">
                        <div className="flex flex-col ">
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <FontAwesomeIcon icon={faUser} className="absolute mt-9 px-2" />


                            <input type="text" className="py-2 pl-9 border border-gray-300 rounded-lg shadow-sm" placeholder="john doe" />
                        </div>
                        <div className="flex flex-col">
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <FontAwesomeIcon icon={faEnvelope} className="absolute mt-9 px-2" />
                            <input type="email" className="py-2 pl-9 border border-gray-300 rounded-lg shadow-sm" placeholder="you@example.com" />
                        </div>
                        <div className="flex flex-col">
                            <label className="block text-sm font-medium text-gray-700">Occupation</label>
                            <FontAwesomeIcon icon={faBriefcase} className="absolute mt-9 px-2" />
                            <input type="text" className="py-2 pl-9 border border-gray-300 rounded-lg shadow-sm" placeholder="product manager" />
                        </div>
                        <div className="flex flex-col mb- ">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <FontAwesomeIcon icon={faLock} className="absolute mt-9 px-2" />
                            <input type="password" className="py-2 pl-9 mt-1 border border-gray-300 rounded-lg shadow-sm" placeholder="*******" />
                        </div>
                        <p className="text-gray-400 text-sm mb-3">must be atleast three characters</p>
                        <button className="text-white bg-blue-500 w-full rounded-sm py-2 hover:bg-blue-600 ">create account</button>

                    </form>

                </div>
                <div className="text-sm items-center flex flex-row justify-center mt-3">
                    <p>Already have an account?</p>
                    <a href="#" className="text-indigo-700">sign in</a>
                </div>
            </div>
        </>
    )
}

export default Account
