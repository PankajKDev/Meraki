import { Box, Modal, Typography } from "@mui/material";
import PropTypes from "prop-types";

function ReadMoreModal({ open, handleOpen }) {
  return (
    <Modal open={open} onClose={handleOpen}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: 400, sm: 400, md: 600 },
          bgcolor: "background.default",
          boxShadow: "12px #000000",
          p: 4,

          borderRadius: "12px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
            id="modal-modal-title"
          >
            <Typography variant="h1">Note Name</Typography>
            <Typography variant="h1">26-02-2024</Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            mt: 2,
            height: 400,
            overflowY: "scroll",
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          culpa voluptates quisquam necessitatibus enim aliquam magnam vitae
          sint. Asperiores quo assumenda alias repellat, neque tempore
          reiciendis consectetur, amet quam ab ad corporis eius vel consequuntur
          rem! Sed laudantium doloremque voluptatum inventore qui commodi nihil
          recusandae eveniet consequuntur saepe! Dolorem consectetur accusamus
          in dicta ea, quidem commodi pariatur, nemo non quia quisquam
          architecto harum sunt! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Reprehenderit sit, facilis vero officia aliquid et
          iure molestias at ullam dolore excepturi minus tenetur nostrum
          veritatis repellendus magni sapiente animi quod error, eaque, dolorum
          incidunt officiis repudiandae. Doloremque nisi a numquam, iusto sit ab
          maiores neque ex, voluptatem repudiandae amet minima, atque harum
          laboriosam aperiam sed! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Suscipit, quidem. Dolore rerum optio dolor, vel
          consectetur quam nostrum dolorem nam consequatur recusandae nisi nobis
          hic! Magni delectus incidunt sunt, error dicta facilis a nesciunt modi
          natus eligendi dolor obcaecati aut ducimus commodi nisi ea similique
          soluta placeat est. Eos labore
        </Typography>
      </Box>
    </Modal>
  );
}

export default ReadMoreModal;

ReadMoreModal.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func,
};
