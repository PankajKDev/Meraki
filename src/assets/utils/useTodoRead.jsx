import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../libs/firebase";
import { useUser } from "@clerk/clerk-react";
const TodoRef = collection(db, "Todos");
function useTodoRead() {
  const { user } = useUser();
  const [data, setData] = useState([]);
  async function todoDeleter(id) {
    const DeleteTodoRef = doc(TodoRef, id);
    await deleteDoc(DeleteTodoRef);
  }
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
  return { data, todoDeleter };
}

export default useTodoRead;
