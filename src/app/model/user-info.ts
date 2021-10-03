export interface UserInfo {
    gender: string,
    name: {
      title: string,
      first: string,
      last:string
    },
    dob: {
      date: Date,
      age: number,
    }
    location: Location,
    email: string,
    username: string,
    password: string,
    phone: string,
    cell: string,
    picture: {
      large: string,
      medium: string,
      thumbnail: string
    },
    login: {
      password: string
    }
}

export interface Location {
    street: {
      number: number,
      name: string
    },
    city: string,
    state: string,
    country: string,
    postcode: number,
}
