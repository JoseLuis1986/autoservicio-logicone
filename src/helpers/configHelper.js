
export const getConfiguration = async () => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const url = `${baseUrl}/${'config-update'}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (result.success) {
        return { success: result.success, data: result.data }
      } else {
        return { success: false, data: result.data }
      }
    } catch (err) {
      console.log('err')
    }
  }
  
  export const getUserAdmin = async () => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const url = `${baseUrl}/${'login/user-admin'}`;
    try {
      const response = await fetch(url);
      const { success, data } = await response.json();
      if (success) {
        return { success, data }
      } else {
        return { success: false, data }
      }
    } catch (error) {
      console.log(error)
    }
  }