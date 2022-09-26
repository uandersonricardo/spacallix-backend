import "express-async-errors";

import App from "./app";

const PORT = process.env.PORT ?? 3333;

const app = new App().getServer();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
