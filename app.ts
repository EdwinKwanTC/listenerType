import express from "express";
import { Request, Response } from "express";
import * as http from "http";

const app = express();

app.get("/", function (req: Request, res: Response) {
  res.end("Hello World");
});

const PORT = 8080;

interface Listener extends http.Server {
  address(): { port: number; family: string; address: string } | null | string;
}

const listener: Listener = app.listen(PORT, () => {
  const address = listener.address();
  if (address !== null && typeof address === "object") {
    console.log(address.port);
  }
});
