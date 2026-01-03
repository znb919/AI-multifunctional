import Navbar from '../components/Navbar';
import ToolCard from '../components/ToolCard';
import {
  Mail,
  FileText,
  Languages,
  Image as ImageIcon,
  Video,
  Music,
  Code,
  MessageSquare,
  BarChart,
  Calculator,
} from 'lucide-react';

const tools = [
  {
    title: 'Email Writer',
    description: 'Generate professional emails with AI assistance',
    icon: Mail,
    path: '/tool/email-writer',
  },
  {
    title: 'PDF Generator',
    description: 'Create and format PDF documents automatically',
    icon: FileText,
    path: '/tool/pdf-generator',
  },
  {
    title: 'Language Translator',
    description: 'Translate text between multiple languages instantly',
    icon: Languages,
    path: '/tool/language-translator',
  },
  {
    title: 'Image Generator',
    description: 'Create stunning images from text descriptions',
    icon: ImageIcon,
    path: '/tool/image-generator',
  },
  {
    title: 'Video Editor',
    description: 'Edit and enhance videos with AI-powered tools',
    icon: Video,
    path: '/tool/video-editor',
  },
  {
    title: 'Audio Transcriber',
    description: 'Convert audio files to accurate text transcriptions',
    icon: Music,
    path: '/tool/audio-transcriber',
  },
  {
    title: 'Code Assistant',
    description: 'Get help writing and debugging code in any language',
    icon: Code,
    path: '/tool/code-assistant',
  },
  {
    title: 'Content Writer',
    description: 'Generate engaging content for blogs and articles',
    icon: MessageSquare,
    path: '/tool/content-writer',
  },
  {
    title: 'Data Analyzer',
    description: 'Analyze and visualize your data with AI insights',
    icon: BarChart,
    path: '/tool/data-analyzer',
  },
  {
    title: 'Math Solver',
    description: 'Solve complex mathematical problems step by step',
    icon: Calculator,
    path: '/tool/math-solver',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AI-Powered Multi-Functional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Assistant
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            Unlock the power of artificial intelligence with our comprehensive suite of tools.
            From writing emails to analyzing data, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#tools"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-colors shadow-lg shadow-blue-500/50"
            >
              Explore Tools
            </a>
            <a
              href="#learn-more"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold text-lg transition-colors border border-slate-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="tools" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our AI Tools</h2>
          <p className="text-slate-400 text-lg">
            Choose from our powerful collection of AI-powered tools
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.path}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              path={tool.path}
            />
          ))}
        </div>
      </section>

      <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2024 AI Assistant. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
