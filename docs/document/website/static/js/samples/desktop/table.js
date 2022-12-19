document.addEventListener("kuc:loaded", function () {
  const container = document.getElementById("sample-container__components");
  const renderAge = (dataCell) => {
    const spanElement = document.createElement("span");
    spanElement.innerText = `The age is ${dataCell}`;
    return spanElement;
  };
  const renderName = (cellData) => {
    const dropdown = new Kuc.Dropdown({
      items: [
        {
          label: "John Brown",
          value: "john",
        },
        {
          label: "Steven Gerrard",
          value: "steven",
        },
      ],
      value: cellData,
      selectedIndex: 0,
    });
    return dropdown;
  };

  const table = new Kuc.Table({
    columns: [
      {
        title: "Name",
        field: "name",
        render: renderName,
      },
      {
        title: "Address",
        field: "address",
      },
      {
        title: "Age",
        field: "age",
        render: renderAge,
      },
    ],
    data: [
      {
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
      {
        name: "Steven Gerrard",
        age: 22,
        address: "New York No. 2 Lake Park",
      },
    ],
  });
  container.appendChild(table);
});
