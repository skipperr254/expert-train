import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      //   const token = response.data.token;

      console.log(result);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='border border-gray-300 p-5 w-80'>
        <h2 className='text-2xl font-semibold text-center mb-2'>Login</h2>
        {error && (
          <p className='text-red-800 text-sm text-center mb-2 font-medium'>
            {error}
          </p>
        )}
        <hr className='bg-blue-700' />
        <form className='flex flex-col gap-5 mt-5' onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='example@email.com'
            className='border border-gray-400 outline-none py-1 px-2 font-light focus:border-gray-600'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
            className='border border-gray-400 outline-none py-1 px-2 font-light'
          />
          <button className='text-white bg-blue-500 py-2' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
