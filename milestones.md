
## Milestones

### Phase 1: Backend-Frontend Connection
1. Set Up API Routes in Backend
	- Create an Express route /api/test to return a test JSON response.
	- Configure CORS to allow frontend requests.
2. Connect Frontend with Backend [x]
    - Use fetch or axios in React to request data from /api/test.
	- Display the fetched data in a simple React component.
3. Define API Structure [x]
	- Plan and document API endpoints for future development.
	- Example endpoints: POST /api/signup, POST /api/login, GET /api/questions, etc.

### Phase 2: Database Setup and ORM Integration
1. Choose a Database and ORM
	- Use PostgreSQL as the primary database.
	- Use Sequelize ORM for database interactions.
2. Set Up Database
    - Install and configure PostgreSQL.
	- Create a .env file to store database credentials securely.
3. Define Database Schema
	- Create models for Users, Posts, Comments, and Likes.
	- Set up relationships between models.
4. Migrate and Seed Data
	- Write Sequelize migration scripts.
	- Seed initial data for testing.
5. Create Query Logics

### Phase 3: User Authentication System
1. Implement User Signup
	- Create an API endpoint POST /api/signup to register new users.
	- Hash passwords using bcrypt before storing them.
2. Implement User Login
	- Create an API endpoint POST /api/login for user authentication.
	- Generate a JWT token upon successful login.
3. Protect Routes with JWT
	- Middleware to verify JWT tokens.
	- Restrict certain endpoints to authenticated users only.
4. Frontend Authentication Flow
	- Create login and signup pages.
	- Store JWT in localStorage or httpOnly cookies.
	- Implement logout functionality.

### Phase 4: Core Features Implementation
1. Question Posting
	- API endpoint: POST /api/questions
	- Users can post open-ended questions.
2. Answer Submission
	- API endpoint: POST /api/answers
	- Users can answer posted questions.
3. Likes System
	- API endpoint: POST /api/likes
	- Users can like answers.
4. User Points System
	- Implement a scoring mechanism based on likes received.
5. Role Assignment (Citizen/Imposter)
	- Randomly assign users to roles daily.
	- Imposters must generate AI-generated responses.

### Phase 5: Real-Time Features
1. WebSockets Setup
	- Install and configure socket.io on the backend.
	- Allow frontend to establish real-time connections.
2. Live Updates for Questions and Answers
	- Push new questions and answers to all connected users instantly.
3. Real-Time Likes Updates
	- Update like counts without refreshing the page.

### Phase 6: UI Enhancements and Final Optimizations
1. Improve UI/UX
	- Enhance frontend design for better usability.
	- Implement responsive design.
2. Optimize API Performance
	- Implement caching and indexing for database queries.
	- Optimize response times.
3. Error Handling and Security Improvements
	- Improve error messages and logging.
	- Secure API endpoints against attacks.
4. Deploy to Production
	- Deploy backend and frontend to cloud services.
	- Configure CI/CD pipeline for automated deployments.