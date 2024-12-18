const listElement = document.getElementById("list");

const onResponse = (response) => {
  console.log(response);

  response.forEach((item, index) => {
    const listItem = document.createElement("li");
    const linkItem = document.createElement("a");

    linkItem.innerText = item.first_name;

    linkItem.href = `/detail_person?index=${index}`;

    listItem.appendChild(linkItem);

    listElement.appendChild(listItem);
  });
};

fetch(
  "https://gist.githubusercontent.com/diondree/92e4518ca7529e1f4d1300993e5cc287/raw/5e689bb33a11a2e55cb11e6f413ddea14c4be804/mock-data-10000.json"
)
  .then((res) => res.json())
  .then((res) => onResponse(res));
