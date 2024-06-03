## Contributing Guidelines

Welcome to the project! We appreciate your interest in contributing. Please read the following guidelines carefully to ensure a smooth and consistent development process.

### 0. How to add new components

#### You need only 5 files to be changed in the following order

`config/docs.ts` - add new sidebar field

`registry/components/edil-ozi` - add your brand new component

`registry/components/example/` - add your new component as demo (optional)

`content/docs/components/` - add your new `.mdx` file with descriptions and components provided

`registry/index.tsx` - register your all new components

### 1. Color Usage in New Components

When creating new components, it is essential to adhere to the specific color palette provided below to maintain a consistent design throughout the application. All colors are build in tailwind 3.3+ versions.

#### Light Mode Colors

- **Primary Color:** green palette
- **Background Color:** slate-600+ or gray palette
- **Text Color:** black

#### Dark Mode Colors

- **Primary Color:** green palette
- **Background Color:** slate-100-500+ or gray palette
- **Text Color:** white

Please use it as starting point. If the provided colors does not fit your requirements, consider using other tailwind colors as well. Ensure that you use these colors to create a cohesive and visually appealing interface.

### 2. Mobile-First Responsive Design

All components must be designed with a mobile-first approach. This means starting with the mobile design and then scaling up to larger screens. Ensure that your components:

- Are fully functional and visually optimized for mobile devices.
- Adapt smoothly to different screen sizes and orientations.

### 3. Code Efficiency and User Experience

Each component should:

- Contain the minimal amount of code necessary to provide full user experience functionality.
- Be as efficient as possible without compromising on the user experience for 'n' users.
- Follow best practices for code reusability, readability and maintainability.

### 4. Allowed Hooks

When creating new component, only built-in React hooks are allowed in this project. No external hooks should be used.

By following these guidelines, you help maintain a high standard of quality and consistency across the project. Thank you for your contributions!

---

If you have any questions or need further clarification, please refer to the project's [contribution guidelines](CONTRIBUTING.md) or reach out to the maintainers.

Happy coding!
