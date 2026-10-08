export interface Category {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  image: string;
  itemCount: number;
  subcategories: string[];
  featured: boolean;
}
