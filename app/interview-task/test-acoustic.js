const employees = [
{ id: '1', name: 'e1', salary: 2000, managerName: 'Donny' },
{ id: '2', name: 'e2', salary: 3000, managerName: 'Many' },
{ id: '3', name: 'e3', salary: 2000, managerName: 'Tony' },
{ id: '4', name: 'e4', salary: 1000, managerName: 'Donny' }
];


const findBigEmployees = (numberOfMaxSalary) => {

  // fetch(api)
  //   .then((response) => employees = JSON.parse(response))
  //   .catch((err) => console.log('Fetch Error ', err));


  employees.sort((a, b) => b.salary - a.salary);

  const setSalary = Array.from(new Set(employees.map((employee) => employee.salary)));
  console.log(setSalary)

  const BigEmployees = employees.filter((el) => setSalary[numberOfMaxSalar - 1] === el.salary)
  console.log(BigEmployees)

};

findBigEmployees(1);