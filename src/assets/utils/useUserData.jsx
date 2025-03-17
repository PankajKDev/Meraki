import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../libs/firebase";
import { useUser } from "@clerk/clerk-react";

function useUserData() {
  const [userData, setUserData] = useState({});
  const { user } = useUser();
  useEffect(() => {
    async function getData() {
      const UserRef = doc(db, "Users", user.id);
      const getUser = await getDoc(UserRef);
      if (getUser.exists()) {
        setUserData(getUser?.data());
      }
    }
    getData();
  }, [user]);
  return { userData };
}

export default useUserData;
