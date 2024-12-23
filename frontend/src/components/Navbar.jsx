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
        <button
          onClick={() => navigate("/login")}
          className='bg-blue-600 text-white py-2 px-5'
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
