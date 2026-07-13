export interface Message {
  id: string;
  sender: "fibi" | "user";
  text: string;
  timestamp: string;
}

export interface Thread {
  id: string;
  title: string;
  command: string;
  color: string;
  snippet: string;
  messages: Message[];
  messageCount: number;
  timeAgo: string;
}

export interface Dispute {
  id: string;
  thread: string;
  status: "OPEN" | "LOCKED" | "BLEEDING" | "DISPUTED";
  disputeCount: number;
}

export interface Application {
  id?: string;
  name: string;
  email: string;
  reason: string;
  sect: string;
  vowsToBreak: boolean;
  timestamp?: string;
}
