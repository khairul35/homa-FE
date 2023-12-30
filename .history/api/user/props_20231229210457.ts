export interface CreateUserProps {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  roleId: number | undefined;
}

export interface UpdateUserProps {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  roleId: number | undefined;
}
