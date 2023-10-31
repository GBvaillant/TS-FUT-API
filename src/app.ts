import express from 'express';

export class App {
  private app;
  constructor() {
    this.app = express();
  }

  public start(): void {
    const PORT = 3000;

    this.app.listen(PORT, () => {
      console.log('server ruinning in port', PORT);
    });
  }
}