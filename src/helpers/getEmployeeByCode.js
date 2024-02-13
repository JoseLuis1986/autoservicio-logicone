import { employeesUsers } from "./dataHelper";

export const getEmployeeByCode = ({code}) => {
    console.log(code);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const employee = employeesUsers.data.find(({ PersonnelNumber }) => PersonnelNumber === code);
            if(employee){
               return resolve({name: employee.Name});
            }else{
                return reject("Server error");
            }
        }, 2000)
    })
}