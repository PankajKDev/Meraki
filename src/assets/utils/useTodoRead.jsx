import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  increment,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../libs/firebase";
import { useUser } from "@clerk/clerk-react";

const TodoRef = collection(db, "Todos");
function useTodoRead() {
  const { user } = useUser();
  const [data, setData] = useState([]);
  //References
  const UserRef = doc(db, "Users", user.id);
  async function todoComplete(id) {
    const completedTodoRef = doc(TodoRef, id);
    await deleteDoc(completedTodoRef);
    await updateDoc(UserRef, {
      tasksCompleted: increment(1),
    });
  }
  async function deleteTodo(id) {
    const deleteTodoRef = doc(TodoRef, id);
    await deleteDoc(deleteTodoRef);
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
  return { data, todoComplete, deleteTodo };
}

export default useTodoRead;
