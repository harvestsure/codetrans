# CodeTrans - AI-Powered Code Language Converter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC)](https://tailwindcss.com/)

Transform code between 30+ programming languages using advanced AI models like DeepSeek Coder, GPT-4, Claude, and Gemini. Free, unlimited, no registration required.

🌐 **Live Demo**: [https://codetrans.dev](https://www.codetrans.dev)

## ✨ Features

- 🤖 **AI-Powered**: Uses DeepSeek Coder, GPT-4 Turbo, Claude 3.5 Sonnet, and Gemini 2.0 Flash
- 🔍 **Auto-Detection**: Automatically detects source code language
- 🌍 **30+ Languages**: JavaScript, TypeScript, Python, Java, C#, C++, C, Go, Rust, PHP, Ruby, Swift, Kotlin, Scala, Dart, R, MATLAB, Perl, Lua, Shell, PowerShell, SQL, HTML, CSS, JSON, XML, YAML, Markdown, and more
- 🆓 **Free & Unlimited**: No registration required, unlimited conversions
- 🎨 **Beautiful UI**: Dark and light themes with responsive design
- ⚡ **Fast & Accurate**: Quick conversions with high accuracy
- 📱 **Mobile-Friendly**: Works perfectly on desktop and mobile devices
- 🔒 **Privacy-First**: No data storage, all processing happens in real-time

## 🚀 Supported Languages

### Popular Languages
- **JavaScript** ↔ TypeScript, Python, Java, C++, Go, Rust
- **Python** ↔ JavaScript, Java, C++, Go, Rust, R, MATLAB
- **Java** ↔ C#, Kotlin, Scala, JavaScript, Python
- **C++** ↔ C, Rust, Go, Java, Python
- **Go** ↔ Rust, C++, Java, Python, JavaScript
- **Rust** ↔ C++, Go, C, Java, Python

### Web Technologies
- HTML, CSS, JavaScript, TypeScript
- JSON, XML, YAML

### System Languages
- C, C++, Rust, Go, Zig

### Mobile Development
- Swift (iOS), Kotlin (Android), Dart (Flutter)

### Data Science & Analytics
- Python, R, MATLAB, Julia

### Scripting
- Shell, PowerShell, Perl, Lua

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- At least one AI model API key

### Installation

1. **Clone the repository**:
\`\`\`bash
git clone https://github.com/harvestsure/codetrans.git
cd codetrans
\`\`\`

2. **Install dependencies**:
\`\`\`bash
npm install
\`\`\`

3. **Set up environment variables**:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. **Add your AI model API keys** to `.env.local`:
\`\`\`env
# At least one is required
DEEPSEEK_API_KEY=your_deepseek_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key_here

# Site configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

5. **Run the development server**:
\`\`\`bash
npm run dev
\`\`\`

6. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## 🔑 API Keys Setup

### DeepSeek API (Recommended)
1. Visit [DeepSeek Platform](https://platform.deepseek.com/)
2. Create an account and get your API key
3. Add `DEEPSEEK_API_KEY=your_key_here` to your `.env.local`

### OpenAI API
1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create an account and get your API key
3. Add `OPENAI_API_KEY=your_key_here` to your `.env.local`

### Anthropic API (Claude)
1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Create an account and get your API key
3. Add `ANTHROPIC_API_KEY=your_key_here` to your `.env.local`

### Google AI API (Gemini)
1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Create an account and get your API key
3. Add `GOOGLE_GENERATIVE_AI_API_KEY=your_key_here` to your `.env.local`

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/harvestsure/codetrans)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- **Netlify**: [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/harvestsure/codetrans)
- **Railway**: [Deploy on Railway](https://railway.app)
- **Render**: [Deploy on Render](https://render.com)
- **AWS**, **Google Cloud**, **Azure**

## 🏗️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **AI Integration**: [Vercel AI SDK](https://sdk.vercel.ai/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 📊 SEO Features

- ✅ Comprehensive meta tags and Open Graph
- ✅ JSON-LD structured data
- ✅ XML sitemap generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Accessibility optimizations
- ✅ Mobile-first responsive design
- ✅ Fast loading with optimized assets

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [DeepSeek](https://www.deepseek.com/) for their excellent code-focused AI models
- [OpenAI](https://openai.com/) for GPT-4 and API access
- [Anthropic](https://www.anthropic.com/) for Claude AI models
- [Google](https://ai.google.dev/) for Gemini AI models
- [Vercel](https://vercel.com/) for the AI SDK and hosting platform

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/harvestsure/codetrans/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/harvestsure/codetrans/discussions)
- 📧 **Email**: support@codetrans.dev
- 🐦 **Twitter**: [@codetrans](https://twitter.com/codetrans)

---

<div align="center">
  <p>Made with ❤️ by the CodeTrans Team</p>
  <p>
    <a href="https://codetrans.dev">Website</a> •
    <a href="https://github.com/harvestsure/codetrans">GitHub</a> •
    <a href="https://twitter.com/codetrans">Twitter</a>
  </p>
</div>
