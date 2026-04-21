import { useNavigate } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0a0a1a] to-[#1a1035] px-4">
      <div className="w-full max-w-lg">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white/80 tracking-widest">
            404
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-white">
            Page Not Found
          </h2>

          <p className="mt-3 text-sm md:text-base text-white/60">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="mt-6">
            <button
              onClick={() => navigate('/')}
              className="btn btn-outline border-white/20 text-white hover:bg-white/10 rounded-xl"
            >
              Go Back Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
