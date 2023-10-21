/// <reference types="react-scripts" />

import { Logger } from "./Logger";

declare global {
  interface Window {
    logger: Logger;
  }
}
