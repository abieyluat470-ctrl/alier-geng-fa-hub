// Shared type definitions for the Alier Geng FA champions portal.

export type Position =
  | "Goalkeeper"
  | "Defender"
  | "Midfielder"
  | "Forward"
  | "Staff";

export interface Stat {
  label: string;
  value: string;
}

export interface Player {
  id: string;
  name: string;
  role: string;
  position: Position;
  number?: number;
  captain?: boolean;
  bio: string;
  badges: string[];
  stats: Stat[];
  accent: string; // tailwind gradient classes for the avatar
}

export interface Leader {
  id: string;
  name: string;
  title: string;
  org: string;
  note: string;
  initials: string;
}

export interface Award {
  id: string;
  recipient: string;
  award: string;
  category: string;
  detail: string;
  icon: "trophy" | "glove" | "boot" | "coach" | "fan";
}

export interface TimelineItem {
  minute: string;
  event: string;
  kind: "goal" | "save" | "card" | "whistle" | "key";
}

export interface MatchResult {
  opponent: string;
  competition: string;
  date: string;
  score: string;
  penalties?: string;
  recap: string;
  timeline: TimelineItem[];
}

export interface Honor {
  id: string;
  title: string;
  season: string;
  detail: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  location: string;
  kind: "meeting" | "clinic" | "tour" | "community";
  summary: string;
}

export interface NavLink {
  id: string;
  label: string;
}

export interface Social {
  id: string;
  label: string;
  href: string;
  icon: "whatsapp" | "facebook" | "messenger";
}

export interface ChatMessage {
  id: string;
  from: "bot" | "user";
  text: string;
}

export interface ChatPreset {
  id: string;
  label: string;
  answer: string;
}

export interface ClubValue {
  id: string;
  title: string;
  detail: string;
  icon: "shield" | "users" | "target" | "heart";
}

export interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
