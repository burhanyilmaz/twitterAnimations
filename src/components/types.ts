export type MessageType = 'received' | 'send';

export type MessageItem = {
  id: number;
  type: MessageType;
  text: string;
};
