//test 1
const employee = {
    name: "Samer Mobarak",
    address: "123 Main Street",
}

//test 2
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj
}

//test 3

function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, key, value) {
    newEmployee[key] = value;

    return newEmployee
}

//test 4 

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

//test 5 

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}