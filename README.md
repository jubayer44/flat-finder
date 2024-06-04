# Flat Finder 
## Client

### Live Url: https://flat-finder-blue.vercel.app/

- ### Application Summary
- ##### Flat Finder is a web application built with Next.js and TypeScript that allows users to find flats, request flat shares, and post their own flats for sharing. The application has two user roles: User and Admin..
##### Credentials
- ##### Admin1
- email: admin@gmail.com
- password: 12345
- ##### User1
- email: user1@gmail.com
- password: 12345
- ##### User2
- email: user2@gmail.com
- password: 12345

  
### 2. User Roles
 #####  User:

- Search for flats based on various criteria.
- Request to share an existing flat post.
- Post their own flat for sharing.
- Manage their own flat posts (update, delete).
- Cannot request to share their own flat.
- Update their email address and password.
- View their own flat posts, requests sent to other's flats, and total requests received on their own flats.
- 
#####  Admin:

- Manage all users (view, edit, delete).
- Edit and delete user flat posts.
- Post their own flat for sharing.
- View dashboards with:
- - Total number of users.
- - Total number of flat posts.
- - Total number of flat share requests.

### 3. Features

##### User Features:
- Flat Search: Allows users to search for flats based on various criteria.
- Flat Share Request: Users can request to share an existing flat post.
- Post a Flat: Users can post their own flats for sharing with details and images.
- Flat Management: Users can manage their own flat posts (update, delete).
- User Account Management: Update email address and password.
- User Dashboard: View their own flat posts, requests sent to other's flats, and total requests received on their own flats.
##### Admin Features:
- User Management: View, edit, and delete user accounts.
- Flat Management: Edit and delete user flat posts.
- Post a Flat: Admins can post their own flats for sharing.
- Admin Dashboard: View total number of users, flat posts, and flat share requests.

### 4. Technology Stack
- rontend: Next.js, React, TypeScript
- Styling: Metarial UI
- State Management: Redux Toolkit
- API Calls: Axios
- Data Validation: Zod
- Material UI Components: @mui/material
### 5. Dependencies (package.json)
##### Frontend Dependencies
- @emotion/cache
- @emotion/react
- @emotion/styled
- @hookform/resolvers
- @mui/icons-material
- @mui/material
- @mui/material-nextjs
- @mui/x-data-grid
- axios
- jwt-decode
- react
- react-dom
- react-hook-form
- react-redux
- sharp
- sonner
- swiper
- zod
##### Development Dependencies
- @types/node
- @types/react
- @types/react-dom
- eslint
- eslint-config-next
- postcss
- tailwindcss
- typescript
### 6.  Additional Notes

This documentation provides a general overview of the Flat Finder application. Specific details regarding API interaction, user interface elements, and code implementation would require reviewing the application's source code.

- ### Local Setup Instructions
- Clone the repository
  `https://github.com/jubayer44/flat-finder.git`
- Navigate to the project directory
  `cd your-folder`
- Install dependencies
  `npm install`
- Create a`.env` file in the root of the project and set the following environment variables

```
NEXT_PUBLIC_URL="http://localhost:5000/api"
NEXT_PUBLIC_IMAGE_UPLOAD_URL = your cloudinary photo url
```

##### Running the application

- Development Mode
  `npm run dev`
- Production Mode
```
npm run build
npm start
```
##### Thank You
