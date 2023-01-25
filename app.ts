import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", function (req: Request, res: Response) {
  res.end("Hello World");
});

const PORT = 8080;

const listener = app.listen(PORT, () => {
  const address = listener.address();
  if (address !== null && typeof address === "object") {
    console.log(address.port);
  }
});
