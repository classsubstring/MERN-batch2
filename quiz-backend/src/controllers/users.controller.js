export const listUsers = (req, resp) => {
  resp.send("getting users");
};

export const createUser = (req, resp) => {
  resp.send("user created successfully...");
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
