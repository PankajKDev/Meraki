import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../libs/firebase";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const NoteRef = collection(db, "Notes");

function useNoteUtil() {
  const { user } = useUser();
  const [data, setData] = useState([]);
  //Delete Notes
  async function deleteNote(id) {
    const deleteNoteRef = doc(NoteRef, id);
    await deleteDoc(deleteNoteRef);
  }
  //pin Note
  async function pinNote(id, currentValue) {
    const PinnedNoteRef = doc(NoteRef, id);
    await updateDoc(PinnedNoteRef, {
      pinned: !currentValue,
    });
  }
  //get Notes
  useEffect(() => {
    const fetchQuery = query(NoteRef, where("user", "==", user.id));
    const unsubscribe = onSnapshot(fetchQuery, (querySnapShot) => {
      let noteArr = [];
      querySnapShot.forEach((doc) => {
        noteArr.push({ ...doc.data(), id: doc.id });
      });
      setData(noteArr);
    });
    return () => unsubscribe();
  }, [user.id]);
  return { data, deleteNote, pinNote };
}

export default useNoteUtil;
