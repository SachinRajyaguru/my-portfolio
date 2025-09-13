/// <reference types="vite/client" />

export type SkillNode = {
  key: string;
  title: string;
  data: string[];
};

export interface SkillSection {
  key: string;
  title: string;
  data: SkillNode[];
}

export type Skills = SkillSection[];

declare module "*.json" {
  import type { SkillNode } from "./skills";
  const value: SkillNode[];
  export default value;
}
