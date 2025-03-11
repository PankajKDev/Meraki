import { Delete, Star } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";

function NoteIcon() {
  const NoteIconsData = [
    {
      tooltip: "Pin Note",
      icon: <Star />,
    },
    {
      tooltip: "Delete Note",
      icon: <Delete />,
    },
  ];
  return (
    <Box
      sx={{
        marginTop: "10px",
        display: "flex",
        justifyContent: "end",
        gap: "20px",
      }}
    >
      {NoteIconsData.map((item, index) => (
        <Tooltip key={index} title={item.tooltip}>
          <IconButton
            sx={{
              border: "1px solid purple",
              background: "purple",
              color: "white",
              ":hover": {
                color: "purple",
              },
            }}
          >
            {item.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
}

export default NoteIcon;
