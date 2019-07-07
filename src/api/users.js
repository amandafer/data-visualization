const { userApi } = "./constants";

const getUsersData = () => {
  return fetch(`${userApi}/data`).then(data => data.json());
};

export { getUsersData };
