import {
  collection,
  deleteDoc,
  doc,
  increment,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../libs/firebase";
import { useUser } from "@clerk/clerk-react";

const TodoRef = collection(db, "Todos");
function useTodoUtil() {
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
    const fetchQuery = query(TodoRef, where("user", "==", user.id));
    const unsubscribe = onSnapshot(fetchQuery, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setData(todosArr);
    });
    return () => unsubscribe();
  }, [user.id]);
  return { data, todoComplete, deleteTodo };
}

export default useTodoUtil;
