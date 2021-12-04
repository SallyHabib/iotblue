interface HomePresenterProps {
  getUsersRequest: Function;
  users: Array;
  history: any;
}

interface UserDetailsProps {
  userDetails: UserDetails;
  getUserDetailsRequest: Function;
}

interface UserDetails {
  dateOfBirth: string;
  email: string;
  firstName: string;
  gender: string;
  id: string;
  lastName: string;
  location: {
    street: string
    city: string
    state: string
    country: string;
    timezone: string;
  };
  phone:string;
  picture: string
  registerDate: string;
  title: string;
  updatedDate: string;
}

// TODO: FIX the type against profile response
interface InGetUserSuccessPayload {
  users: Array;
}
interface InGetUserDetailsSuccessPayload {
  userDetails: Array
}