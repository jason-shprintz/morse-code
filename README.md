# Morse Code Translator

A modern, real-time Morse code translator built with Next.js and React. Simply type any text and instantly see its Morse code translation displayed with dots and dashes.

![Morse Code App](https://img.shields.io/badge/Next.js-15.5.6-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

## ✨ Features

- **Real-time Translation**: See Morse code as you type
- **Complete Character Set**: Supports:
  - All letters (A-Z)
  - Numbers (0-9)  
  - Common punctuation marks (. , ? ! : ; " ' - / ( ) @)
- **Clean Interface**: Modern, responsive design with styled-components
- **Interactive Display**: Clear character-to-Morse mapping visualization
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jason-shprintz/morse-code.git
   cd morse-code
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 How to Use

1. Type any text in the input textarea
2. The Morse code translation appears instantly below
3. Each character shows its corresponding dots and dashes
4. Spaces in your text create line breaks in the output

### Example
- Input: `Hello World`
- Output: 
  ```
  H = dot dot dot dot
  e = dot
  l = dot dash dot dot
  l = dot dash dot dot
  o = dash dash dash
  
  W = dot dash dash
  o = dash dash dash
  r = dot dash dot
  l = dot dash dot dot
  d = dash dot dot
  ```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.6](https://nextjs.org/)
- **Frontend**: [React 19.0.0](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Styled Components 6.1.15](https://styled-components.com/)
- **Linting**: [ESLint](https://eslint.org/)

## 📁 Project Structure

```
morse-code/
├── src/
│   └── app/
│       ├── conversion.ts      # Morse code conversion table
│       ├── page.tsx          # Main application component
│       ├── layout.tsx        # App layout
│       ├── globals.css       # Global styles
│       └── styles/
│           └── styles.ts     # Styled components
├── public/                   # Static assets
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── README.md              # This file
```

## 🧩 Key Components

- **Conversion Table** (`conversion.ts`): Complete mapping of characters to Morse code
- **Main App** (`page.tsx`): Real-time translation logic and UI
- **Styled Components** (`styles.ts`): Modern, responsive styling

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Morse Code Reference

| Character | Morse Code | Character | Morse Code |
|-----------|------------|-----------|------------|
| A | .-     | N | -.     |
| B | -...   | O | ---    |
| C | -.-.   | P | .--.   |
| D | -..    | Q | --.-   |
| E | .      | R | .-.    |
| F | ..-.   | S | ...    |
| G | --.    | T | -      |
| H | ....   | U | ..-    |
| I | ..     | V | ...-   |
| J | .---   | W | .--    |
| K | -.-    | X | -..-   |
| L | .-..   | Y | -.--   |
| M | --     | Z | --..   |

*Plus numbers 0-9 and common punctuation marks*

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Morse code standards based on International Morse Code
- Built with modern React and Next.js best practices
