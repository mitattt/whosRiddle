type RiddleTypes = 'Weekly' | '1 day' | '3 days' | 'Special';

export type TRiddle = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  type: RiddleTypes;
  riddle: string;
  image: string;
  collection?: string[];
};
