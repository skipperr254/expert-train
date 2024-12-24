import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-[100%] bg-gray-200 fixed'>
      <div className='flex items-center justify-between mx-[10%] py-4'>
        <h1
          onClick={() => navigate("/")}
          className='text-xl font-semibold cursor-pointer'
        >
          Expert Train
        </h1>
        <div className='flex gap-2'>
          <button
            onClick={() => navigate("/login")}
            className='bg-blue-600 text-white py-2 px-5'
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/sign-up")}
            className='bg-blue-600 text-white py-2 px-5'
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
