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

const departmentFunc = (employArr, department) => {
  const findDepartment = departmentCollection?.find((dep) => dep?.name === department);

  const departmentEmploys = employArr?.filter((em) => em?.depId === findDepartment?.id);

  return departmentEmploys;
};

const management = departmentFunc(employ, "account");
console.log(management);
