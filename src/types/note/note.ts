import { Category } from "../category/category";

export type Note = {
  title: string;
  description: string;
  category: Category;
  id: string;
  themeId: string,
};
