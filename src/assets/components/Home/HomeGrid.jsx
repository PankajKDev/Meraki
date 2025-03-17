import { Grid2 as Grid } from "@mui/material";
import DataCard from "./HomeCard";
import PropTypes from "prop-types";
import useNoteUtil from "../../utils/useNoteUtil";
import { mood } from "../../constants";
function HomeGrid({ userData }) {
  const { moodNote } = useNoteUtil();
  let averageMood = Math.round(moodNote * 2) / 2;
  function moodHandler() {
    if (averageMood < 2) {
      return "/icons/sad.png";
    } else if (averageMood >= 2 && averageMood <= 3.5) {
      return "/icons/joy.png";
    } else if (averageMood > 3.5) {
      return "/icons/smile.png";
    } else {
      return "/icons/joy.png";
    }
  }

  const fetchedData = [
    {
      id: 1,
      imgUrl: "/icons/todo.png",
      text: `${userData?.tasksCompleted || 0} tasks completed`,
    },
    {
      id: 2,
      imgUrl: "/icons/tomato.png",
      text: `${userData?.pomodoro || 0} pomodoro completed`,
    },
    {
      id: 3,
      imgUrl: "/icons/note.png",
      text: `${userData?.pomodoro || 0} notes created`,
    },
    {
      id: 4,
      imgUrl: moodHandler(),
      text: `average mood is ${mood[averageMood] || "content"} `,
    },
  ];

  return (
    <Grid
      sx={{ width: "100%", placeContent: "center", marginTop: "40px" }}
      container
      spacing={5}
    >
      {fetchedData.map((item) => (
        <DataCard key={item.id} imgUrl={item.imgUrl} text={item.text} />
      ))}
    </Grid>
  );
}

export default HomeGrid;
HomeGrid.propTypes = {
  userData: PropTypes.object,
};
