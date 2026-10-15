
import express, { type Request, type Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    message: "API de recargas funcionando",
  });
});

app.get("/api/operadores", (_req: Request, res: Response) => {
  res.json([
    { id: 1, nombre: "Telcel" },
    { id: 2, nombre: "Movistar" },
  ]);
});

app.listen(PORT, () => {
  console.log(`API disponible en http://localhost:${PORT}`);
});
