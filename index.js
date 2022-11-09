const getNames = async () => {
  const url = "https://devpipeline-mock-api.herokuapp.com/api/auth/login";
  const body = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "olivia@devpipeline.com",
      password: "youngthug",
    }),
  };
  try {
    const fetchResponse = await fetch(url, body);
    const data = await fetchResponse.json();
    let users = data.users;
    return users.map((user) => user.first_name);
  } catch (err) {
    return err;
  }
};
// getNames().then((names) => {
//   console.log(names);
// });

//pick a random person
const randomName = (names) => {
  return names[Math.round(Math.random() * (names.length - 1))];
};

(async () => {
  const names = await getNames();
  console.log(randomName(names));
})();
