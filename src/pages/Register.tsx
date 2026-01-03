import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Sparkles } from 'lucide-react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};

    if (!name) {
      newErrors.name = 'Name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-12 h-12 text-blue-500" />
          </Link>
          <h2 className="text-4xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-slate-400">Join us and unlock AI-powered tools</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 bg-slate-900 border ${
                    errors.name ? 'border-red-500' : 'border-slate-700'
                  } rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 bg-slate-900 border ${
                    errors.email ? 'border-red-500' : 'border-slate-700'
                  } rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 bg-slate-900 border ${
                    errors.password ? 'border-red-500' : 'border-slate-700'
                  } rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 bg-slate-900 border ${
                    errors.confirmPassword ? 'border-red-500' : 'border-slate-700'
                  } rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="••••••••"
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-400">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Create Account
          </button>

          <p className="text-center text-slate-400">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:text-blue-400 font-medium">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
