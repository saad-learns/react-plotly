export interface LogMessage {
  message: string;
}

export interface StateUpdateLogMessage<T> {
  message: string;
  prevState: T;
  updatedState: T;
}
