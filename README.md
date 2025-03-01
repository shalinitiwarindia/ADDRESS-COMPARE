# Address Comparison API using Next.js & Gemini

This is a Next.js API that compares two addresses using the Gemini AI model. It returns whether the addresses match (`true` or `false`) and provides a confidence level.

## Features
- Takes two addresses as input
- Uses Gemini AI for comparison
- Returns a match status (`true/false`) and confidence score
- Built using Next.js API routes
- Deployed on Vercel (or any other hosting platform)

- ScreenShots
- ![image](https://github.com/user-attachments/assets/1936876d-0b7d-4563-9e84-fe2cea81f149)
- ![image](https://github.com/user-attachments/assets/258184d8-5368-4fba-9b46-0f1b43b83722)



## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Next.js](https://nextjs.org/)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/address-comparison-api.git
   cd address-comparison-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env.local` file in the root folder and add your API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

### Running the API Locally
Start the development server:
```sh
npm run dev
```
The API will be available at: `http://localhost:3000/api/compare`

### API Usage
Make a `POST` request to `/api/compare` with the following JSON payload:
```json
{
  "address1": "1600 Amphitheatre Parkway, Mountain View, CA",
  "address2": "Googleplex, Mountain View, CA"
}
```
#### Example Response
```json
{
  "match": true,
  "confidence": 0.92
}
```

## Deployment
### Deploying on Vercel
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Run the deploy command:
   ```sh
   vercel
   ```
3. Follow the instructions to link your project and deploy.
4. After deployment, you will get a live URL to share.

## Contribution
Feel free to fork this project and submit pull requests for improvements!



