
## Setup Instructions

### Requirements
- Node.js
- MongoDB (local or Atlas)

### Install Backend

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
   **Required libraries**:
   - `express`
   - `mongoose`
   - `dotenv`
   - `bcryptjs`
   - `jsonwebtoken`
   - `cors`
   
3. **Create `.env`** with:
   ```bash
   PORT=8006
   MONGO_URL=your_mongodb_url
   JWT_SECRET=your_jwt_secret
   ```
4. **Run backend**:
   ```bash
   npm start
   ```

### Install Frontend

1. **Navigate to frontend directory**:
   ```bash
   cd ../frontend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
   **Required libraries**:
   - `axios`
   - `react-router-dom`
   
3. **Run frontend**:
   ```bash
   npm start
   ```

### Access the App
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8006`
