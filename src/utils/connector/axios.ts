import axios from "axios";
import { GITHUB_API_BASE_URL } from "@utils/constanta/setting";

export interface ConfigParams {
  responseType?: string;
  contentType?: string;
  authorization?: string;
  activeUrl?: string | null;
  signature?: string;
}

type AxiosParams = {
  config?: ConfigParams;
};

function AxiosClient(props?: AxiosParams) {
  const axiosClient = axios.create({
    baseURL: `${
      props?.config?.activeUrl ? props.config.activeUrl : GITHUB_API_BASE_URL
    }/`,
    headers: {
      // Authorization: `${props?.config?.authorization ?? getToken()}`,
      // "Content-Type": props?.config?.contentType ?? "application/json",
      // http2: true
      // TimeZone: timezone,
      // TimezoneOffset: timezoneOffset.toString(),
    },
  });

  axiosClient.interceptors.response.use(
    function (response) {
      return response; //response;
    },
    function (error: any) {
      console.log("error", error);
      if (error.code === "ERR_NETWORK") {
        return Promise.reject("Error Connection");
      }

      if (
        typeof error.message === "string" &&
        error.message.startsWith("TypeError")
      ) {
        return Promise.reject("Something went wrong");
      }

      // return responseErrorApiCall(error.message);
      return Promise.reject(error);
    }
  );

  return axiosClient;
}

export default AxiosClient;
