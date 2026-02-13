# Sheikh Rehan - Android Developer Portfolio

A modern, animated portfolio website built with Next.js, showcasing my work as an Android Developer.

## 🚀 Features

- **Modern Design**: Beautiful gradient backgrounds and glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Contact Form**: Functional contact form that sends emails directly to your inbox

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Set up email functionality (optional but recommended):
   - Sign up for a free account at [Resend](https://resend.com)
   - Get your API key from the dashboard
   - Create a `.env` file in the root directory:
   ```bash
   RESEND_API_KEY=your_resend_api_key_here
   ```
   - Note: Without this, form submissions will be logged to console only

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

- Update personal information in the component files
- Modify colors in `tailwind.config.ts`
- Add your projects in `components/Projects.tsx`
- Update experience details in `components/Experience.tsx`

## 📄 License

This project is open source and available under the MIT License.
