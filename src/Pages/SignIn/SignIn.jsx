import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic demo login (later backend add korte parba)
    if (email && password) {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-green-400"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-green-400"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition duration-200"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-white/60 text-sm mt-4">
            Welcome back 👋
          </p>
        </div>
      </div>
    </div>
  );
}
