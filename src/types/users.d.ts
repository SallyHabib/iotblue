interface HomePresenterProps {
  getUsersRequest: Function;
  createUserRequest: Function;
  resetSuccess: Function;
  users: Array;
  history: any;
  offset: number;
  total: number;
  success: boolean;
  errorOccured: boolean;
  resetError: Function;
}

interface GetUsersObject {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

interface UserDetailsProps {
  userDetails: UserDetails;
  getUserDetailsRequest: Function;
}

interface GetUserDetailsPayload {
  params: {
    id: string;
  };
}

interface CreateUserPayload {
  firstName: string;
  lastName: string;
  email: string;
}


interface UserDetails {
  dateOfBirth: string;
  email: string;
  firstName: string;
  gender: string;
  id: string;
  lastName: string;
  location: {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
  };
  phone: string;
  picture: string;
  registerDate: string;
  title: string;
  updatedDate: string;
}

// TODO: FIX the type against profile response
interface InGetUserSuccessPayload {
  data: any;
  total: any;
}
interface InGetUserDetailsSuccessPayload {
  userDetails: Array;
}

interface GetUserDetailsRequestPayload {
  params: {
    id: string;
  };
}
