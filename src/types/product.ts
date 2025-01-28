export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: TRating;
}

type TRating = {
  rate: number;
  count: number;
};
