export interface ProductModel {
  id: number;
  name: string;
  description: string;
  picture: string;
  price: number;
}


export interface ProductBasketModel extends ProductModel {
  quantity: number;
}
