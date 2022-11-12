export type Offer = {
  id: number;
  previewImage: string;
  isPremium: boolean;
  price: number;
  title: string;
  type: string;
  rating: number;
  isFavorite: boolean;
  city: City;
}

export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
}
