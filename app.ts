import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Running the Server
const port: number = 2000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
