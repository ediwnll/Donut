export enum SelectedPage {
  Home = "home",
  About = "about",
  Gallery = "gallery",
  ContactUs = "contactus",
}

export interface FactType {
  year: string;
  description: string;
}

export interface DonutType {
  image: string;
  product: string;
  description: string;
}
