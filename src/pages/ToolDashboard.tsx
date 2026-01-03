import { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  History,
  Settings,
  Upload,
  Loader2,
  Download,
} from 'lucide-react';

export default function ToolDashboard() {
  const { toolName } = useParams<{ toolName: string }>();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [output, setOutput] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toolTitle = toolName
    ?.split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const handleGenerate = async () => {
    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setOutput(
      `Generated output for ${toolTitle}:\n\nThis is a sample output based on your prompt: "${prompt}"\n\nYour AI-powered result will appear here with relevant information and insights.`
    );
    setIsGenerating(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${toolName}-output.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="p-6">
          <Link
            to="/"
            className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
            <History className="w-5 h-5" />
            <span>History</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <p className="text-xs text-slate-500 text-center">© 2024 AI Assistant</p>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto p-6 lg:p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">{toolTitle}</h1>
            <p className="text-slate-400">
              Use AI to generate amazing results for your {toolTitle?.toLowerCase()} needs
            </p>
          </header>

          <div className="space-y-6">
            <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Input</h2>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt here..."
                className="w-full h-40 px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </section>

            <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Upload File</h2>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed ${
                  isDragging ? 'border-blue-500 bg-blue-500/10' : 'border-slate-700'
                } rounded-lg p-8 text-center transition-colors cursor-pointer`}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                <p className="text-slate-300 mb-2">
                  Drag & drop your files here, or click to browse
                </p>
                <p className="text-sm text-slate-500">
                  Supports PDF, DOCX, TXT, and more
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={(e) => {}}
                />
              </div>
            </section>

            <section>
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                  isGenerating || !prompt
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/50'
                } ${isGenerating ? 'animate-pulse' : ''}`}
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center space-x-2">
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>Generating...</span>
                  </span>
                ) : (
                  'Generate'
                )}
              </button>
            </section>

            {output && (
              <>
                <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">Output</h2>
                  <div className="bg-slate-950 border border-slate-700 rounded-lg p-4">
                    <pre className="text-slate-300 whitespace-pre-wrap font-mono text-sm">
                      {output}
                    </pre>
                  </div>
                </section>

                <section>
                  <button
                    onClick={handleDownload}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors border border-slate-700"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Result</span>
                  </button>
                </section>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
