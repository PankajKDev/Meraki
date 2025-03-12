import {
  collection,
  deleteDoc,
  doc,
  getDocs,
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
    const getData = async () => {
      const fetchQuery = query(NoteRef, where("user", "==", user.id));
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
  return { data, deleteNote, pinNote };
}

export default useNoteUtil;
