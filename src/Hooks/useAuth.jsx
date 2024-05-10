import { useContext } from "react";
import { authContex } from "../Firebase/AuthProvider";

const useAuth = () => {
const Auth = useContext(authContex)
  return (
    Auth
  );
};

export default useAuth;