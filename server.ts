import { Router, Application } from "./deps.ts";
import {
  getPalette,
} from "./controller.js";

const env = Deno.env.toObject();
const HOST = env.HOST || "127.0.0.1";
const PORT = env.PORT || 7700;

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Listening on port ${PORT}...`);

router.post("/api", getPalette);
await app.listen(`${HOST}:${PORT}`);

