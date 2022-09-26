import cors from "cors";
import express, {
  NextFunction,
  Request,
  Response,
  json,
  urlencoded
} from "express";
import morgan from "morgan";

import routes from "./config/routes";

class App {
  private readonly server;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.server.use(cors());
    this.server.use(morgan("dev"));
    this.server.use(json());
    this.server.use(urlencoded({ extended: false }));
  }

  private routes() {
    this.server.use(routes);

    this.server.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).json({ message: "Path not found" });
    });

    this.server.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({ message: err.message });
      }
    );
  }

  public getServer() {
    return this.server;
  }
}

export default App;
