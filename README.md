# 🎨 Rigma - A Collaborative Design Tool

Rigma is a powerful, collaborative design tool inspired by Figma. Built with **Next.js**, **Liveblocks**, and **Fabric.js**, it enables real-time collaboration and interactive design experiences. Rigma supports features such as live cursors, emotes, comments, shape drawing, and text typing on a canvas.

## 📚 Table of Contents

- [🎨 Rigma - A Collaborative Design Tool](#-rigma---a-collaborative-design-tool)
  - [📚 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🌐 Demo](#-demo)
  - [🚀 Getting Started](#-getting-started)
    - [✅ Prerequisites](#-prerequisites)
    - [⚙️ Setup and Installation](#️-setup-and-installation)
  - [🖱️ Usage](#️-usage)
  - [🛠️ Technologies Used](#️-technologies-used)
  - [🤝 Contributing](#-contributing)

## ✨ Features

- **Real-time Collaboration**: Work together with team members in real-time with live updates. 👫👬
- **Live Cursors**: See the cursor movements of collaborators as they happen. 👆
- **Emotes and Reactions**: Express emotions and provide feedback with emotes. 😍👍
- **Commenting System**: Leave comments and feedback directly on the canvas. 💬
- **Shape Drawing**: Draw basic shapes (rectangles, circles, etc.) on the canvas. 🟦🔵
- **Text Tool**: Add and edit text directly on the canvas. ✍️

## 🌐 Demo

Check out the live demo: [Rigma Demo](https://rigma-tau.vercel.app/)

## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### ✅ Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) 🟢
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) 📦

### ⚙️ Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RayenRk/rigma.git
   cd rigma
   ```

2.  Install dependencies:

    ```bash
    npm install
    ```
    
3.  Set up environment variables: Create a `.env.local` file in the root directory and add the following:

    ```
    NEXT_PUBLIC_LIVEBLOCKS_API_KEY=your-liveblocks-api-key
    NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY=your-liveblocks-secret-key
    ```

    Replace `your-liveblocks-api-key` and `your-liveblocks-secret-key` with your actual Liveblocks API keys.

4.  Run the development server:

    ```bash
    npm run dev
    ```

5.  Open http://localhost:3000 with your browser to see the result.

🖱️ Usage
---------

Once the development server is running, you can start using Rigma by navigating to the home page. You can create a new canvas, invite collaborators, and start designing together in real-time.

-   **Creating Shapes**: Select the shape tool and draw on the canvas. 🔻🔸
-   **Typing Text**: Use the text tool to add and edit text. 📝
-   **Adding Comments**: Type "/" to add comments to specific parts of your design. 🗨️
-   **Using Emotes**: Click on the emote icon to express reactions. 😃
-   **Observing Cursors**: Watch live cursor movements to see where collaborators are focusing. 👀

🛠️ Technologies Used
---------------------

-   **[Next.js](https://nextjs.org/)**: The React framework for production. ⚛️
-   **[Liveblocks](https://liveblocks.io/)**: Real-time collaboration infrastructure. ⏱️
-   **[Fabric.js](http://fabricjs.com/)**: A powerful JavaScript canvas library. 🖌️
-   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces. 🧩
-   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for styling. 🎨

🤝 Contributing
---------------

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project. 🍴
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`). 🌿
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`). 💬
4.  Push to the Branch (`git push origin feature/AmazingFeature`). 🚀
5.  Open a Pull Request. 🔃