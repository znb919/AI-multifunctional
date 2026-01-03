import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-white">AI Assistant</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
