import { employeesUsers } from "./dataHelper";
import { fetchWithToken } from "./fetch";

export const getEmployeeByCode = async ({ code }) => {
    console.log(code);
    const url = 'employee';
    const params = new URLSearchParams({ PersonnelNumber: code })
    const urlEndpoint = url + '?' + params
    const resp = await fetchWithToken(urlEndpoint);
    if (resp.success) {
        return { ok: true, data: resp.data };
    } else {
        return { ok: false, data: resp.data };
    }
}