export interface LogMessage {
  message: string;
}

export interface StateUpdateLogMessage<T> extends LogMessage {
  prevState: T;
  updatedState: T;
}

export class Logger<T> {
  private logMessages: StateUpdateLogMessage<T>[];

  constructor() {
    this.logMessages = [];
  }

  log(logMessage: StateUpdateLogMessage<T>) {
    this.logMessages.push(logMessage);
  }
}
