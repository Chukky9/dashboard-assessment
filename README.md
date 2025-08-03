# Dashboard Assessment

A modern, responsive dashboard built with Next.js 14, TypeScript, and Chakra UI. This project demonstrates best practices in frontend development, including accessibility, component reusability, and modern state management.

## 🚀 Live Demo

[View Live Demo](https://dashboard-assessment-six.vercel.app/)

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://dashboard-assessment-six.vercel.app/)

## ✨ Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- ♿ Accessible UI components with ARIA support
- 🎨 Modern UI with Chakra UI and Panda CSS
- 🔄 Real-time data synchronization with TanStack Query
- 🌙 Theme customization (light/dark modes)
- 📊 Interactive data visualization
- 🔍 Sortable and filterable tables
- 🎯 Mock API integration with MirageJS

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: 
  - [Chakra UI](https://chakra-ui.com/) (v3.24.0)
  - [Panda CSS](https://panda-css.com/)
- **State Management**: [TanStack Query](https://tanstack.com/query)
- **Mock API**: [MirageJS](https://miragejs.com/)
- **Testing**: 
  - [Jest](https://jestjs.io/)
  - [React Testing Library](https://testing-library.com/react)
- **Package Manager**: [PNPM](https://pnpm.io/)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dashboard-assessment.git
   cd dashboard-assessment
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing

Run the test suite:
```bash
pnpm test
```

Run tests in watch mode:
```bash
pnpm test:watch
```

## 📝 Development Guidelines

### Component Structure

Components are organized into the following categories:
- `components/layout`: Layout-related components (Sidebar, RootLayout)
- `components/shared`: Reusable UI components (Table, StatusBadge)
- `components/dashboard`: Dashboard-specific components (FlowDiagram, RiskIndicator)

### Data Fetching

- Use TanStack Query hooks for data fetching and caching
- Mock API endpoints are defined in `src/mocks/server.ts`
- API services are centralized in `src/services/api.ts`

### Styling

- Use Chakra UI components for consistent styling
- Custom theme tokens are defined in `src/theme/index.ts`
- Use responsive props for mobile-first design
- Follow the established color scheme and spacing system

### Testing

- Write tests for all new components
- Follow Testing Library best practices
- Use test IDs sparingly, prefer user-centric queries
- Mock external dependencies appropriately

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=

# Feature Flags
NEXT_PUBLIC_ENABLE_MOCK_API=true
NEXT_PUBLIC_ENABLE_THEME_TOGGLE=true

# Deployment Environment
NODE_ENV=development
```

## 🚀 Deployment

This project is deployed on Vercel. To deploy your own instance:

1. Fork this repository
2. Create a new project on [Vercel](https://vercel.com)
3. Import your forked repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Add required environment variables in Vercel project settings
6. Deploy!

### Build Configuration

The project includes a `vercel.json` configuration:

```json
{
  "version": 2,
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs"
}
```

### Troubleshooting

1. **API 404 Errors**: Make sure MirageJS is properly initialized. Check `src/app/providers.tsx` and `src/mocks/server.ts`.
2. **Build Failures**: Ensure all dependencies are properly installed with `pnpm install`.
3. **Type Errors**: Run `pnpm type-check` to verify TypeScript types.
4. **Test Failures**: Run `pnpm test` to check for failing tests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

While this is an assessment project, it follows standard contribution guidelines:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Contact

For questions or feedback about this assessment, please reach out to [your-email@example.com].
