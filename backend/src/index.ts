import express from "express";
import cors from "cors";

import generateCodeRoute from "./routes/generate/code";
import generateImagesRoute from "./routes/generate/images";
import projectsRoute from "./routes/projects";
import stripeRoute from "./routes/stripe";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/generate/code", generateCodeRoute);
app.use("/generate/images", generateImagesRoute);
app.use("/projects", projectsRoute);
app.use("/stripe", stripeRoute);

app.get("/health", (_, res) => res.json({ status: "ok" }));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Backend running on ${port}`));
