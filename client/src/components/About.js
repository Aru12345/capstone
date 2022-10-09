import { useContext } from "react";
import { Cont } from "../Cont";
import "./stylingfolder/Intro.css";

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

/* Importing accordian from mui*/
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function About() {
  const { user } = useContext(Cont);
  /*Line 53 to 57 accordian code */
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <h1 className="welcome">Welcome {user.name} 🗽</h1>
      <Box marginLeft={4} marginRight={4}>
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>About</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Big Apple Explorer🗽 offers services like restaurant search
                /discovery, reviews and online table reservation. Are you
                extremely passionate about food, wine and all things fine?.We
                were always on the lookout for new dining experiences and
                exciting cuisines. This app has all the answers for the most
                enjoyable, authentic and friction-free table booking experience.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Careers</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h4>Be a part of the squad.</h4>
                While you're creating extraordinary experiences for our
                customers and partners, we ensure our comprehensive employee
                benefits take care of you.
                <ol>
                  <li>Health Insurance</li>
                  <li>Tax-Saving Components</li>
                  <li>In-office Creche</li>
                </ol>
                We can’t wait to have you work with us! Build the next new thing
                in food tech. Send in your resumes today
                careers@bigappleexplorer.com
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Terms and Conditions</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We at Big Apple Explorer🗽 are committed to protecting and
                ensuring your privacy. Only authorized employees within the
                company have access to the user’s details and information & are
                prohibited from using this information for any personal or
                commercial use. Client records are regarded as confidential and
                will not be divulged to any third party, other than to
                appropriate authorities, only if legally required. We will not
                sell, share, or rent your personal information to any third
                party. Big Apple Explorer🗽 offers a reservation service between
                the user and the restaurants and does not accept any liability
                arising out of your dining experience regarding quality of
                service or food, as it is delivered by a restaurant and not by
                EazyDiner. Big Apple Explorer🗽 is committed to providing
                convenient and quality service to our users. To help us in
                maintaining this level of service, we urge our users to cancel
                or edit their reservations if they will be unable to reach the
                restaurant at the decided time.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography>Privacy Policy </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We respect your privacy and is committed to protecting it
                through its compliance with its privacy policies.
                <h6>
                  INFORMATION RECEIVED, COLLECTED AND STORED BY THE COMPANY
                </h6>
                When you register using third party sign-in
                services/widgets/pluggin like Facebook, Twitter, Gmail,
                Instagram or any other social networking or similar
                widgets/plugins You will be allowing us to access/retrieve
                Information from such sign-in services.
                <h6>
                  INFORMATION AUTOMATICALLY COLLECTED/ TRACKED WHILE NAVIGATION
                </h6>
                To improve and help us understand your preferences based on
                previous or current Site activity , we may use "cookies", or
                similar electronic tools to collect Information to assign each
                visitor a unique, random number as a User Identification (User
                ID) to understand the User's individual interests using the
                identified computer or device.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
    </>
  );
}
export default About;
