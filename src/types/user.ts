export interface User {
    id?: string;
    name: string;
    email: string;
    age: number;
    address?: {
      street: string;
      city: string;
    };
  }
  
  export type LoginFormData = {
    email: string;
    password: string;
  };