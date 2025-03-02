import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../libs/firebase";
import { useUser } from "@clerk/clerk-react";
const TodoRef = collection(db, "Todos");
function useTodoRead() {
  const { user } = useUser();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const fetchQuery = query(TodoRef, where("user", "==", user.id));
      const fetchedData = await getDocs(fetchQuery);
      setData(
        fetchedData.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }))
      );
    };
    getData();
  }, [data, user]);
  return { data };
}

export default useTodoRead;
