enum RequestEndPoint {
  USERS = "users",
  POSTS = "posts",
  COMMENTS = "comments",
}

interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  birthDate: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    md5: string;
    sha1: string;
    registered: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

async function fetchData<T>(endPoint: string): Promise<T> {
  const response = await fetch(`https://jsonplaceholder.org/${endPoint}`);
  if (!response.ok) {
    throw new Error(`Error fetching data from ${endPoint}`);
  }
  const data: T = await response.json();
  return data;
}

const getUsers = async (): Promise<IUser[]> => {
  try {
    const users = await fetchData<IUser[]>(RequestEndPoint.USERS);
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};

getUsers()
  .then((users) => {
    console.log("Fetched users:");
    users.forEach((user) => {
      console.log(
        `User: ${user.firstname} ${user.lastname}, Email: ${user.email}`
      );
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
