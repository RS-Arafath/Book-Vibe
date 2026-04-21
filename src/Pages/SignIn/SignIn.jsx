import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!form.email || !form.password) {
      setError('Email and password are required');
      return;
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // success → home page
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md">
        {/* Glass Card */}
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Sign In
          </h2>

          {error && (
            <p className="text-red-400 text-sm text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-green-400"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-green-400"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition duration-200"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-white/50 text-sm mt-5">
            Welcome back 👋
          </p>
        </div>
      </div>
    </div>
  );
}
