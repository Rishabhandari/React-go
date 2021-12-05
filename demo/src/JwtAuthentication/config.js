const headers = () => {
  const tokenData = JSON.parse(localStorage.getItem("authToken"));
  const header = {
    Accept: "application/json",
    Authorization: "Bearer" + tokenData,
  };
  return header;
};

export default headers;
