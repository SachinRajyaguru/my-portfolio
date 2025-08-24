import { useState } from "react";
import { Paper, Typography, Collapse, Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import sections from "../assets/data/skills.json";
import SDLC from "../assets/data/skills2.json";

type Section = {
  key: string;
  title: string;
  description?: string;
  data: string[] | Section[];
};

const Card = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column", // vertical stacking
  padding: theme.spacing(2),
  cursor: "pointer",
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    boxShadow: theme.shadows[4],
  },
  width: "100%", // take full width of the parent container
  maxWidth: "100%", // ensure it does not overflow
  boxSizing: "border-box", // includes padding and border in width
}));

const SkillsCard: React.FC<{ section: Section; level?: number; isTools?: boolean }> = ({ section, level = 1, isTools = false }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    if (Array.isArray(section.data) && typeof section.data[0] !== "string") {
      setOpen(!open);
    }
  };

  const isNested = Array.isArray(section.data) && section.data.length > 0 && typeof section.data[0] !== "string";

  return (
    <Card onClick={handleClick} elevation={3} role="div" sx={{ borderWidth: `${level}px` }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">{section.title}</Typography>
        {isNested && (open ? <ExpandLess /> : <ExpandMore />)}
      </Box>
      {section.description && <Typography variant="body2">{section.description}</Typography>}

      {isTools && (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
          {(section.data as string[]).map((skill, idx) => (
            <Paper
              key={idx}
              sx={{
                padding: "4px 8px",
                backgroundColor: "#f3f3f3",
                borderRadius: "12px",
                display: "inline-block",
              }}>
              <Typography variant="body2">{skill}</Typography>
            </Paper>
          ))}
        </Box>
      )}

      {/* Nested Sections */}
      {isNested && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box flexDirection={"row"} mt={2}>
            <Grid columns={16} container spacing={2} component="div">
              {(section.data as Section[]).map((subSection) => (
                <Grid size={level >= 2 ? 4 : 16} container columns={16} spacing={2} component="div">
                  <SkillsCard key={subSection.key} section={subSection} level={level + 1} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Collapse>
      )}

      {/* Skills Array */}
      {!isTools && !isNested && Array.isArray(section.data) && (
        <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
          {(section.data as string[]).map((skill, idx) => (
            <Paper
              square={false}
              key={idx}
              sx={{
                padding: "4px 8px",
                backgroundColor: "#f3f3f3",
                borderRadius: "12px",
                display: "inline-block",
              }}>
              <Typography variant="body2">{skill}</Typography>
            </Paper>
          ))}
        </Box>
      )}
    </Card>
  );
};

const Skills = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}>
      <Grid container spacing={2}>
        {SDLC.map((section) => (
          <SkillsCard section={section} level={1} />
        ))}
      </Grid>

      <Grid container spacing={2}>
        {sections.map((section) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={section.key}>
            <SkillsCard section={section} isTools={true} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
