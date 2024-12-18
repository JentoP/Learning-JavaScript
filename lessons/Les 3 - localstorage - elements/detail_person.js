const firstNameElement = document.getElementById("firstName");
const lastNameElement = document.getElementById("lastName");

const params = new URL(document.location).searchParams;

const personIndex = params.get("index");

const onResponse = (response) => {
  console.log(response);

  firstNameElement.innerText = response[personIndex].first_name;
  lastNameElement.innerText = response[personIndex].last_name;
};

fetch(
  "https://gist.githubusercontent.com/diondree/92e4518ca7529e1f4d1300993e5cc287/raw/5e689bb33a11a2e55cb11e6f413ddea14c4be804/mock-data-10000.json"
)
  .then((res) => res.json())
  .then((res) => onResponse(res));
