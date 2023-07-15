const employee = {
    name: "Samer",
    streetAddress: "123 Main Street"
}
//test 1

function updateEmployeeWithKeyAndValue(employee, key, value){
    return { ...employee, [key]: value};
}
//test 2
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee
}

//test 3

function deleteFromEmployeeByKey(employee, key){ 
        const clonedEmployee = { ...employee };
        delete clonedEmployee[key];
        return clonedEmployee;
      }
 //test 4 

 function destructivelyDeleteFromEmployeeByKey(employee, key){
    const cloneEmployeeTwo = {employee};
    delete employee[key];
    return employee
 }