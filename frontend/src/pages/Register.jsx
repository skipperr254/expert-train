import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const result = await response.json();

      if (response.status === 201) {
        navigate("/login");
      } else {
        setError(result.message);
      }
    } catch (error) {
      console.log("Catched error: ", error);
      setError(error.message);
    }
  };

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='border border-gray-300 p-4 w-80'>
        <h1 className='text-2xl font-semibold text-center mb-2'>
          Create Your Account
        </h1>
        {error && (
          <p className='text-red-800 mb-2 font-semibold text-center text-sm'>
            {error}
          </p>
        )}
        <hr />
        <form className='flex flex-col gap-5 mt-5 mb-5' onSubmit={handleSubmit}>
          <input
            className='py-1 px-2 border border-gray-400 outline-none focus:border-gray-700'
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='py-1 px-2 border border-gray-400 outline-none focus:border-gray-700'
            type='email'
            placeholder='email@example.com'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='py-1 px-2 border border-gray-400 outline-none focus:border-gray-700'
            type='password'
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='bg-blue-600 text-white py-2 px-5' type='submit'>
            Sign Up
          </button>
        </form>
        <hr />
        <p className='mt-3 text-sm '>
          Already have an account?{" "}
          <Link className='text-blue-700 hover:underline' to='/login'>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
