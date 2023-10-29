class ApiUtility {
    get = (url: string, params: any) => fetch(url, params);
}
export default new ApiUtility();