import { type ReactNode } from "react";

export interface TechCategory {
  label: string;
  icon: ReactNode;
  skills: string[];
}

export interface SkillItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColor: string;
  iconColor: string;
  hoverBorder: string;
}
