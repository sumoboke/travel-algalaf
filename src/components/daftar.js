import { useState, useEffect } from "react";
import { useAuth } from "../Auth";

const initialValue = {
  first_name: "",
  last_name: "",
  address: "",
  city: "",
  country: "",
  mobile_number: "",
};

const Daftar = () => {
  const { users } = useAuth();
  const [identity, setIdentity] = useState(initialValue);
  const [passed, setPassed] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="flex">
      <div className="m-auto p-3"></div>
    </div>
  );
};

export default Daftar;
