# Deployment Guide

This is a **React + Vite** application. The easiest way to host it is using a modern static site hosting provider like **Vercel** or **Netlify**.

## Option 1: Vercel (Recommended)
Vercel is optimized for frontend frameworks and offers zero-configuration deployment.

1.  **Push your code to GitHub**
    - Create a new repository on GitHub.
    - Run the following commands in your terminal:
      ```bash
      git init
      git add .
      git commit -m "Initial commit"
      git branch -M main
      git remote add origin <YOUR_GITHUB_REPO_URL>
      git push -u origin main
      ```

2.  **Deploy on Vercel**
    - Go to [vercel.com](https://vercel.com) and sign up/login.
    - Click **"Add New Project"**.
    - Select **"Continue with GitHub"** and import your `quran-competition` repository.
    - Vercel will detect `Vite` automatically.
    - Click **Deploy**.

## How to Update Your Live Site
Once you have connected your project to Vercel/Netlify via GitHub, updating the website is **automatic**:

1.  **Make Changes**: Edit your code locally in VS Code.
2.  **Save & Push**: Run these commands in your terminal to send changes to GitHub:
    ```bash
    git add .
    git commit -m "Description of changes"
    git push
    ```
3.  **Automatic Deploy**: Vercel/Netlify will detect the new code on GitHub and automatically rebuild your site. The changes will go live in about 1-2 minutes.

## Option 2: Netlify
Netlify is another excellent option for static sites.

1.  **Push your code to GitHub** (same as above).
2.  **Deploy on Netlify**
    - Go to [netlify.com](https://netlify.com) and sign up/login.
    - Click **"Add new site"** > **"Import an existing project"**.
    - Connect to GitHub and select your repository.
    - **Build settings**:
        - **Build command**: `npm run build`
        - **Publish directory**: `dist`
    - Click **Deploy site**.

## Option 3: Traditional Hosting (cPanel / Apache / Nginx)
If you want to host this on a traditional server (like one provided by a mosque or organization):

1.  **Build the project**:
    ```bash
    npm run build
    ```
2.  This will create a `dist` folder in your project directory.
3.  **Upload the contents** of the `dist` folder (index.html, assets, etc.) to your server's `public_html` folder using FTP or a File Manager.
4.  **Important for Client-Side Routing**:
    - Since this is a Single Page Application (SPA), you need to configure your server to redirect all requests to `index.html` so that React Router can handle the paths (like `/about`, `/schedule`).
    - **For Apache (.htaccess)**: Create an `.htaccess` file in the root with:
      ```apache
      <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
      </IfModule>
      ```
