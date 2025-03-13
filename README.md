### ArtSquirt
This is the backend architecture.
For client folder or frontend: https://github.com/mitishraina/ArtSquirt-frontend


# ArtSquirt - AI Image Generation Platform (Backend)

Backend server for ArtSquirt, handling AI image generation, database operations, and API endpoints.

## 🚀 Features

- AI image generation using OpenAI API
- Image storage using Cloudinary
- RESTful API endpoints
- MongoDB database integration
- CORS enabled for frontend communication

## 💻 Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **OpenAI API** - AI image generation
- **Cloudinary** - Cloud image storage
- **dotenv** - Environment variable management
- **CORS** - Cross-Origin Resource Sharing
- **Nodemon** - Development server

## 🛠️ Installation & Setup

1. Clone the repository:

```bash
1. git clone https://github.com/mitishraina/ArtSquirt-backend.git
```
```bash
2. cd ArtSquirt-backend
3. npm install
```
```bash
4. npm start
```

Create a .env file with the following variables:
```bash
1. MONGODB_URL=your_mongodb_connection_string
2. OPENAI_API_KEY=your_openai_api_key
3. CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
4. CLOUDINARY_API_KEY=your_cloudinary_api_key
5. CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

##  API Endpoints
- GET /api/v1/post - Get all posts
- POST /api/v1/post - Create a new post
- POST /api/v1/artSquirt - Generate AI image

## Security
- Environment variables for sensitive data
- CORS configuration for secure client communication
- Request size limits configured
