import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../libs/firebase";

function UserSync() {
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn && user) {
      const userData = {
        id: user.id,
        email: user.primaryEmailAddress?.emailAddress,
        firstName: user.firstName,
        lastName: user.lastName,
        pomodoro: 0,
        tasksCompleted: 0,
        createdAt: new Date(),
      };
      async function addUser() {
        const UserRef = doc(db, "Users", user.id);
        const getUser = await getDoc(UserRef);
        if (getUser.exists()) {
          return null;
        } else {
          await setDoc(UserRef, { ...userData });
          return null;
        }
      }
      addUser();
    }
  }, [user, isSignedIn]);
  return null;
}

export default UserSync;
