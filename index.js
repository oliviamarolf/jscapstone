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

const blueButton = document.getElementById("blue-btn");
const usersSpace = document.getElementById("users-space");
const chosenPersonDiv = document.getElementById("chosen-person");
const nameTitle = document.getElementById("name-title");
const countContainer = document.getElementById("count-container");
let count = 0;

// get a random name
const randomName = (names) => {
  return names[Math.round(Math.random() * (names.length - 1))];
};

// render random picked name
const renderPickedName = async (names) => {
  pickedName = randomName(names);
  nameTitle.innerHTML = pickedName;

  // render chosen name

  // filter used name out of names
};

// display names on left sidebar
const renderNames = (names) => {
  // clear out users space set inner html to ''
  usersSpace.innerHTML = "";

  // gives all unique values
  [...new Set(names)].forEach((name) => {
    let count = 0;
    // names
    const nametag = document.createElement("p");
    nametag.textContent = name;
    usersSpace.appendChild(nametag);

    //count
    const weightCount = document.createElement("p");
    weightCount.setAttribute("id", "weight-count");
    weightCount.textContent = count;
    usersSpace.appendChild(weightCount);

    // buttons
    // add
    const addWeight = document.createElement("button");
    addWeight.innerHTML = "+";
    usersSpace.appendChild(addWeight);
    addWeight.addEventListener("click", handleIncrement);

    // remove
    const remWeight = document.createElement("button");
    remWeight.innerHTML = "-";
    usersSpace.appendChild(remWeight);
    remWeight.addEventListener("click", handleDecrement);

    // nametag.appendChild(remWeight);
    // nametag.appendChild(addWeight);
  });
};

// event handler for the weighted buttons
const handleIncrement = () => {
  count++;
  document.querySelector("#weight-count").innerHTML = count;
  console.log("click +");
};

const handleDecrement = () => {
  count--;
  document.querySelector("#weight-count").innerHTML = count;
  console.log("click -");
};

// get the number of names in arr
// remove the name using filter

(async () => {
  const names = await getNames();
  console.log(names);

  // display left sidebar
  renderNames(names);

  blueButton.addEventListener("click", () => {
    // display that name
    renderPickedName(names);

    // remove that name from the list of possible names that can be drawn next time
    // add that name to the already drawn list
    // renderNames()
  });
})();

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// shufflie animation
// for (let i = 0; i < names.length; i++) {
//   await sleep(100);
//   console.log(i);
//   nameTitle.innerHTML = names[i];
// }
