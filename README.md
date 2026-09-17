# Rahul Gupta — Developer Portfolio

A modern responsive full-stack developer portfolio for an MCA student and aspiring Java Full Stack Developer.

## Stack
- Frontend: HTML5, CSS3, JavaScript
- Backend: Node.js + Express.js
- Database: MongoDB + Mongoose
- REST API: Projects CRUD + Contact submission

## Run locally
1. Install Node.js and MongoDB.
2. Open a terminal in `backend/`.
3. Run `npm install`.
4. Copy `.env.example` to `.env` and adjust `MONGODB_URI` if needed.
5. Run `npm start`.
6. Open `http://localhost:5000`.

## Project API
- `GET /api/projects` — list projects
- `GET /api/projects/:id` — get one
- `POST /api/projects` — add
- `PUT /api/projects/:id` — update
- `DELETE /api/projects/:id` — delete
- `POST /api/contact` — save contact message

## Customization
- Replace `frontend/resume.pdf` with Rahul's actual resume PDF.
- Update project GitHub/live links in MongoDB through the API.
- The UI currently includes an ArtGallery project seed.

## Deployment
Deploy the Node/Express backend to a Node-compatible host and MongoDB to MongoDB Atlas or another hosted MongoDB provider. Set `MONGODB_URI` and `PORT` in environment variables. For production, change the frontend `API` URL in `frontend/script.js` to the deployed API URL.
# portfolio
