# Contributing to Edil Ozi

Thank you for your interest in contributing to Edil Ozi! We value your assistance and are excited about your contributions. This guide will help you understand the directory structure and offer detailed instructions on how to add a new component to Edil Ozi.

<!-- Read the [example Pull Request](https://github.com/edil-ozi/edil-ozi) to learn which files you need to add. **You only need to change 5 files to add a new component or effect** and it only takes around 10 minutes of work! -->

Once done, open a pull request from your forked repo to the main repo [here](https://github.com/edil-ozi/edil-ozi/compare).

- [Fork and Clone the Repository](#fork-and-clone-the-repository)
- [Adding a New Component](#adding-a-new-component)

## Getting Started

### Fork and Clone the Repository

1. **Fork this repository**  
   Click [here](https://github.com/edil-ozi/edil-ozi/fork) to fork the repository.

2. **Clone your forked repository to your local machine**

   ```bash
   git clone https://github.com/<YOUR_USERNAME>/edil-ozi.git
   ```

3. **Navigate to the project directory**

   ```bash
   cd edil-ozi
   ```

4. **Create a new branch for your changes**

   ```bash
   git switch -c my-new-branch
   ```

5. **Install dependencies**

   ```bash
   pnpm i
   ```

6. **Create a `.env` file**

   ```bash
   touch .env.local && echo "NEXT_PUBLIC_APP_URL=http://localhost:3200" > .env.local
   ```

   > **note that port is 3200**

7. **Run the project**
   ```bash
   pnpm dev
   ```

## Adding a New Component

To add a new component to Edil Ozi, you will need to modify several files. Follow these steps:

### 1. Add Path to Your Component

**File:** `config/docs.ts`

```typescript
{
    title: "Example Component",
    href: `/docs/components/example-component`,
    items: [],
    label: "New",
}
```

### 2. Create Your Component

**File:** `registry/components/edil-ozi/example-component.tsx`

Create the main component file.

```typescript
// Create your component here
import React from 'react'

const ExampleComponent = () => {
  return (
    <div>
      This is your component.
    </div>
  )
}

export default ExampleComponent;
```

### 3. Create a Basic Example With Your Component

**File:** `registry/components/example/example-component-demo.tsx`

Provide a basic example to showcase your component.

```typescript
// Create a basic example showcasing your component
import ExampleComponent from '@/registry/components/edil-ozi/example-component'

const ExampleComponentDemo = () => (
  <div className="relative justify-center">
    <ExampleComponent />
  </div>
)

export default ExampleComponentDemo;
```

### 4. Create MDX Page for Your Component

**File:** `content/docs/components/example-component.mdx`

Create an MDX file for documenting your component.

````md
---
title: Example Component
date: 2024-06-01
description: Some short description
author: Olivierlarose
published: true
---

<ComponentPreview name="example-component-demo" />

<Steps>

### Installation

Copy and paste the following code into your project.

```text
components/ediz-ozi/example-component.tsx
```

<ComponentSource name="example-component" />

</Steps>

## Props

| Prop | Type   | Description     | Default    |
| ---- | ------ | --------------- | ---------- |
| text | String | Text to animate | "Animated" |

## Credits

- Credit to [Olivier Larose](https://blog.olivierlarose.com)
````

### 5. Add Registry Export

**File:** `registry/index.tsx`

Export your component and example in the registry.

```typescript
const ui: Registry = {
  // other components
  "example-component": {
    name: "example-component",
    type: "components:ui",
    files: ["registry/components/edil-ozi/example-component.tsx"],
  },
};

const example: Registry = {
  // other examples
  "example-component-demo": {
    name: "example-component",
    type: "components:example",
    files: ["registry/components/example/example-component-demo.tsx"],
    component: React.lazy(() => import("@/registry/components/example/example-component-demo")),
  },
};
```

## Ask for Help

If you have questions, please open a new GitHub issue, and we will respond to you ^^.
