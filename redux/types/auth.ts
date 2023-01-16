export interface Auth {
  email: string;
  password: string;
}

export interface InitialState {
  loading: boolean;
  authData: {
    email: string;
    password: string;
    userId: string;
  };
}
