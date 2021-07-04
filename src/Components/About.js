import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "10px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const About = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Welcome to my Home Page!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is part of my project during my learnings in General Assembly
            as a student in Software Engineering Immersive Course!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Credits to the APIs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Cat Pic 1 https://thatcopy.pw/catapi/rest/ </p>
            <p>Cat Pic 2 https://aws.random.cat/meow </p>
            <p>Random Quotes https://api.quotable.io/random </p>
            <p>
              Weather forecast for data.gov.sg
              https://data.gov.sg/dataset/weather-forecast
            </p>
            <p>Material UI from https://material-ui.com/</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Adopt</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a
              href="https://www.catwelfare.org/adoptions/"
              target="_blank"
              rel="noreferrer"
            >
              Cat Welfare Society
            </a>
            <br></br>
            <a href="https://spca.org.sg/" target="_blank" rel="noreferrer">
              SPCA
            </a>
            <br></br>
            <a
              href="https://kittensanctuarysg.org/"
              target="_blank"
              rel="noreferrer"
            >
              Kitten Sanctuary
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Famous cats</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            https://www.indiewire.com/2019/03/best-movie-cats-1202050469/
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Flerken?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img
              src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/cd/Goose_Textless_Poster.jpg"
              alt="Goose flerken"
            />
            <br></br>
            Or you met up with a flerken?<br></br>
            <a
              href="https://marvelcinematicuniverse.fandom.com/wiki/Flerken"
              target="_blank"
              rel="noreferrer"
            >
              https://marvelcinematicuniverse.fandom.com/wiki/Flerken
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Credits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Made with ❤️ for 🐈</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default About;
