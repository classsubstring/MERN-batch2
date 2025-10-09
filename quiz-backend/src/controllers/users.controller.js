let users = [
  {
    userId: "23523234",
    name: "ANKIT TIWARI",
    email: "ankit@dev.in",
    password: "abc@123",
    about: "I am professional nodejs developer",
    age: 67,
  },
];

export const listUsers = (req, resp) => {
  return resp.json(users);
};

export const createUser = (req, resp) => {
  const { userId, email, password, name, about, age } = req.body;
  const user = {
    userId,
    email,
    password,
    name,
    about,
    age,
  };

  users.push(user);

  resp.status(201).json(user);
  //create user
};

export const deleteUser = (req, resp) => {
  resp.send("user deleted successfully...");
  //delete user
};

export const updateUser = (req, resp) => {
  //update...
  resp.send("user updated successfully..");
};
