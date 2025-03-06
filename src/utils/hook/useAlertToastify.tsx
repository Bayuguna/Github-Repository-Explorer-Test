//alert component
import { toast } from "react-toastify";

export default function useAlertToast() {
  const successAlert = (text?: string | null) => {
    toast.success(text ?? "Success", {
      theme: "colored",
    });
  };

  const errorAlert = (text: string) => {
    toast.error(text, {
      position: "bottom-right",
      theme: "colored",
    });
  };

  const warningAlert = (text: string) => {
    toast.warning(text, {
      theme: "colored",
    });
  };

  const warningAlertValidation = () => {
    toast.warning("Mohon lengkapi data", {
      theme: "colored",
    });
  };

  const loadingAlert = (text?: string) => {
    return toast.info(`${text} Please Wait...`, {
      autoClose: false,
      isLoading: true,
      closeButton: false,
      closeOnClick: false,
    });
  };

  const updateLoading = (text: any) => {
    toast.update(text, {
      render: "Please Wait...",
      type: "success",
      isLoading: false,
      autoClose: 1,
    });
  };

  return {
    warningAlertValidation,
    warningAlert,
    successAlert,
    errorAlert,
    loadingAlert,
    updateLoading,
  };
}
