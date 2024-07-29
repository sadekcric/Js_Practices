// employ Object
const employ = [
  {
    id: "001",
    name: "abu Bakkar",
    depId: "003",
    salary: 10000,
  },
  {
    id: "002",
    name: "Sadekur Rahman",
    salary: 30000,
    depId: "004",
  },
  {
    id: "004",
    name: "Araf Sadik",
    salary: 50000,
    depId: "004",
  },
];

// All Department Collection
const departmentCollection = [
  {
    id: "004",
    name: "management",
  },
  {
    id: "003",
    name: "account",
  },
];

//All Employs By the Department
const departmentFunc = (employArr, department) => {
  const findDepartment = departmentCollection?.find((dep) => dep?.name === department);

  const departmentEmploys = employArr?.filter((em) => em?.depId === findDepartment?.id);

  return departmentEmploys;
};

// Dom Manipulation
const inputDepartmentSearch = document.getElementById("searchDepId");
const employs = document.getElementById("allEmploy");

document.getElementById("searchBtn").addEventListener("click", function (e) {
  e.preventDefault();

  // call all employs by the search specific Department
  const department = departmentFunc(employ, inputDepartmentSearch.value);

  let content = "";

  department.forEach((dep) => {
    content += `
      <div>
        <p>name:${dep.name}</p>
        <p>salary: ${dep.salary}</p>
      </div>
    `;
  });

  // By the Search Result show in display

  employs.innerHTML = content;
});
