<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1CG3b5I7cAnImkoPJiePncXNdEwLrDRXY

## Run Locally (Quick Start)

**Prerequisites:** [Node.js](https://nodejs.org/) installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Set API Key:** Create a file named `.env.local` and add your Gemini API key:
    ```
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```
3.  **Run the app:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173`.

---

## Step-by-Step Instructions for macOS

These instructions will guide you through setting up and running this project on a macOS computer from scratch.

### Step 1: Install Prerequisites

1.  **Install Homebrew:** If you don't have Homebrew (a package manager for macOS), open the Terminal app and run this command:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
2.  **Install Node.js:** Use Homebrew to install Node.js, which includes `npm` (Node Package Manager).
    ```bash
    brew install node
    ```

### Step 2: Set Up the Project

1.  **Clone the Repository:** Open your terminal, navigate to the directory where you want to store the project, and clone it from GitHub.
    ```bash
    git clone <your-repository-url>
    ```
2.  **Navigate to the Project Directory:**
    ```bash
    cd <project-folder-name>
    ```
3.  **Install Dependencies:** This command reads the `package.json` file and installs all the necessary libraries for the project.
    ```bash
    npm install
    ```

### Step 3: Configure Your API Key

1.  **Create an Environment File:** In the root of your project folder, create a new file named `.env.local`.
    ```bash
    touch .env.local
    ```
2.  **Add Your API Key:** Open the `.env.local` file in a text editor and add the following line, replacing `YOUR_API_KEY_HERE` with your actual Gemini API key.
    ```
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

### Step 4: Run and Test the Application

1.  **Start the Development Server:** This command starts the local development server.
    ```bash
    npm run dev
    ```
2.  **View Your App:** The terminal will show that the server is running and provide a local URL.
    ```
      VITE vX.X.X  ready in XXX ms

      ➜  Local:   http://localhost:5173/
      ➜  Network: use --host to expose
    ```
3.  **Test in Browser:** Open your web browser and go to the local URL (e.g., **http://localhost:5173**). You should see your application running. The browser will automatically reload if you make changes to the source code.
