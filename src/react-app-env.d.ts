/// <reference types="react-scripts" />
import { StateUpdateLogMessage } from "./Logger";

declare global {
  interface Window {
    logs: StateUpdateLogMessage<Data>[];
  }
}
