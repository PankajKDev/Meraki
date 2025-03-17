import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
  average,
  getAggregateFromServer,
} from "firebase/firestore";
import { db } from "../../libs/firebase";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const NoteRef = collection(db, "Notes");

function useNoteUtil() {
  const { user } = useUser();
  const [data, setData] = useState([]);
  const [moodNote, setMoodNote] = useState(3);
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
    async function NotesMood() {
      const fetchQuery = query(NoteRef, where("user", "==", user.id));
      const aggregateResult = await getAggregateFromServer(fetchQuery, {
        averageField: average("mood_rating"),
      });
      const averageMood = aggregateResult.data().averageField;
      setMoodNote(averageMood);
    }
    return () => {
      unsubscribe();
      NotesMood();
    };
  }, [user.id]);
  return { data, deleteNote, pinNote, moodNote };
}

export default useNoteUtil;
