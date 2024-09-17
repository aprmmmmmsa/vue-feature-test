// src/types/Shareholder.ts
export interface Shareholder {
    id: string;
    name: string;
    shareholdingPercent: number;
    children?: Shareholder[];
  }
  