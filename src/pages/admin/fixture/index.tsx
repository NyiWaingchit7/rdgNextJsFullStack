import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NewFixtureCard from "@/component/NewFixtureCard";
import FixtureCard from "@/component/FixtureCard";
import { useAppSelector } from "@/store/hooks";
import { Fixture } from "@prisma/client";

const Fixture = () => {
  const router = useRouter();
  const originalValue = {
    fixture: "fixture",
    result: "result",
  };
  const [value, setValue] = useState(originalValue.fixture);
  const [open, setOpen] = useState(false);
  const data = useAppSelector((store) => store.fixture.items);
  const [matches, setMatches] = useState<Fixture[]>([]);

  useEffect(() => {
    const fixtureData =
      value === originalValue.fixture
        ? data.filter((d) => d.matchResult === null)
        : data.filter((d) => d.matchResult !== null);

    setMatches(fixtureData);
    console.log(data);
  }, [value, data]);
  if (!matches) return null;
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ m: 2 }}
            onClick={() => setOpen(true)}
          >
            <AddIcon sx={{ fontSize: "1.5rem" }} />
          </Button>
          <Button
            variant="contained"
            sx={{ m: 2 }}
            onClick={() => {
              router.push("/admin/opponentTeam");
            }}
          >
            <WorkspacesIcon sx={{ fontSize: "1.5rem" }} />
          </Button>
        </Box>
        <Box>
          <ToggleButtonGroup
            sx={{ px: 3 }}
            color="primary"
            value={value}
            exclusive
            onChange={(evt, value) => setValue(value)}
          >
            <ToggleButton sx={{ px: 3 }} value={originalValue.fixture}>
              Fixture
            </ToggleButton>
            <ToggleButton sx={{ px: 3 }} value={originalValue.result}>
              Result
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      {matches.length > 0 ? (
        <Box
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            mx: "auto",
          }}
        >
          {matches.map((d) => (
            <FixtureCard key={d.id} data={d} />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            minHeight: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "1.5rem", color: "success.main" }}>
            There is no fixture right now .... !
          </Typography>
        </Box>
      )}
      <NewFixtureCard open={open} setOpen={setOpen} />
    </Box>
  );
};
export default Fixture;
