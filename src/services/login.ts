import axiosClient from "../utils/axiosClient";

const loginService = async (data: any) => {
  try {
    const res = await axiosClient.post("/login", data, {
      withCredentials: true
    })

    return res.data;
  } catch (error) {
    console.log(error)
  }
}

export default loginService;