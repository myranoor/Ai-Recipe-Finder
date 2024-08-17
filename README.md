# AI-Recipe-Finder

#skills used
-Next JS
-React
-Vercel
-Open AI

### Prerequisites

- Node.js (v14.x or higher)
- Git
- A code editor (e.g., Visual Studio Code)

### Steps to Set Up Environment Variables

1. *Clone the Repository:*

   bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   

2. *Create and Configure .env.local:*

   - In the root directory, create a .env.local file:
     bash
     touch .env.local
     
   - Add environment variables:
     bash
     NEXT_PUBLIC_API_KEY=your_api_key_here
     NEXT_PUBLIC_API_URL=https://api.example.com
     
   - Save the file with UTF-8 encoding without a BOM.

3. *Run the Development Server:*

   bash
   npm run dev
   

   - Ensure environment variables are loaded correctly.

4. *Environment File Variants:*
   - Use .env, .env.local, .env.development, .env.production, or .env.test as needed for different environments.

### Accessing Environment Variables in Next.js

javascript
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
