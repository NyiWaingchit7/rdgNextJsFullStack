import { Box, Typography } from "@mui/material";
import { Player } from "@prisma/client";
import PlayerMatchesCard from "./PlayerMatchCard";

interface Prop {
  playerData: Player;
}

const PlayerDetail = ({ playerData }: Prop) => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: { xs: 250, lg: 350 },
          color: "info.light",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", lg: "60%" },
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.2rem", lg: "1.5rem" }, width: "100%" }}
          >
            Name
          </Typography>
          <Typography sx={{ width: "100%" }}> - </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", lg: "1.5rem" },
              textAlign: "start",
              width: "100%",
            }}
          >
            {playerData.name}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", lg: "60%" },
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.2rem", lg: "1.5rem" }, width: "100%" }}
          >
            Age
          </Typography>
          <Typography sx={{ width: "100%" }}> - </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", lg: "1.5rem" },
              textAlign: "start",
              width: "100%",
            }}
          >
            {playerData.age}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", lg: "60%" },
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.2rem", lg: "1.5rem" }, width: "100%" }}
          >
            City
          </Typography>
          <Typography sx={{ width: "100%" }}> - </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", lg: "1.5rem" },
              textAlign: "start",
              width: "100%",
            }}
          >
            {playerData.city}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", lg: "60%" },
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.2rem", lg: "1.5rem" }, width: "100%" }}
          >
            Join Date{" "}
          </Typography>
          <Typography sx={{ width: "100%" }}> - </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", lg: "1.5rem" },
              textAlign: "start",
              width: "100%",
            }}
          >
            {playerData.joinDate}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default PlayerDetail;
