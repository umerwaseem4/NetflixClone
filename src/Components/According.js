import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={`${classes.root} main__acordion `}>
        <div className="container setter">
          <h1 className="accordion__mainHeading text-white">
            Frequently Asked Questions
          </h1>
          <Accordion className="accordion-comp">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                What is Netflix!
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want without a single commercial
                – all for one low monthly price. There's always something new to
                discover and new TV shows and movies are added every week!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                How much does Netflix cost
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from Rs950 to Rs1,500 a month. No extra costs, no contracts.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Where can i watch?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Watch anywhere, anytime, on an unlimited number of devices. Sign
                in with your Netflix account to watch instantly on the web at
                netflix.com from your personal computer or on any
                internet-connected device that offers the Netflix app, including
                smart TVs, smartphones, tablets, streaming media players and
                game consoles. You can also download your favorite shows with
                the iOS, Android, or Windows 10 app. Use downloads to watch
                while you're on the go and without an internet connection. Take
                Netflix with you anywhere.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </ThemeProvider>
  );
}
