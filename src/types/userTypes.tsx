export interface IAdress {
  street: string;
  city: string;
  zipcode: string;
}

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  address: IAdress;
}
