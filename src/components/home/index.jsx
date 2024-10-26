import React from "react";
import {
  Grid,
  ButtonGroup,
  Button,
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  List,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Tooltip,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import GitHubIcon from "@mui/icons-material/GitHub";
import Header from "../header";
import "../../styles/home.scss";
import TechStack from "../techStack";
import { imageUrl, linkUrl } from "../../utils/const";

const Home = () => {
  return (
    <div className="min-h-screen container-home">
      {/* <Header /> */}
      {/* <main> */}
      <Grid
        container
        //   columnSpacing={{ xs: 2, md: 3 }}
        // columnSpacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        className="items-center justify-center h-screen px-6 lg:px-0"
        sx={{
          margin: 0,
        }}
      >
        <Grid item xs={4} sm={5} md={6} lg={5} className="sm:px-8">
          <Card
            elevation={0}
            className="rounded-xl card--blur"
            sx={{
              borderRadius: "0.8rem",
              backgroundColor: "rgba(255,255, 255, 0)",
            }}
          >
            {/* <CardActionArea> */}
            <Grid
              container
              rowSpacing={{ xs: 5 }}
              columns={{ xs: 1 }}
              // className="p-2"
            >
              <Grid item className="w-full">
                <CardContent className="p-0" sx={{ padding: 0 }}>
                  <Typography
                    className="card--no-blur"
                    variant="h5"
                    component="div"
                    gutterBottom
                    sx={{
                      marginBottom: "1rem",
                      fontSize: { lg: "2.5rem", md: "2rem" },
                    }}
                  >
                    Hey, I'm Aditya
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{
                      fontSize: { lg: "1.5rem", md: "1.2rem" },
                    }}
                  >
                    Frontend Developer
                  </Typography>
                  <Typography
                    variant="caption"
                    component="div"
                    sx={{
                      fontSize: { lg: "1rem", md: "0.9rem" },
                    }}
                  >
                    I'm passionate coder who enjoys building intersting things.
                    I've experience with frontend development and enough
                    experience with backend development. You can check the Tech
                    Stack section for technologies I work with. If you want to
                    know more about me, you can visit my LinkedIn profile and my
                    Github for little project I've been building.
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item className="w-full">
                <CardContent className="flex gap-1" sx={{ padding: 0 }}>
                  {/* <LinkedInIcon color="primary" />
                      <PublicIcon color="primary" /> */}
                  <Tooltip title="LinkedIn">
                    <IconButton
                      color="primary"
                      href={linkUrl.linkedIn}
                      target="_blank"
                    >
                      <LinkedInIcon color="primary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Github">
                    <IconButton
                      sx={{ color: "black" }}
                      href={linkUrl.github}
                      target="_blank"
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Open Web">
                    <IconButton href={linkUrl.web} target="_blank">
                      <PublicIcon />
                    </IconButton>
                  </Tooltip>
                </CardContent>
              </Grid>
            </Grid>
            {/* </CardActionArea> */}
          </Card>
        </Grid>
        <Grid
          item
          xs={4}
          sm={3}
          md={4}
          lg={2}
          className="px-8"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {/* <Card
              className="px-4 bg-white rounded-xl"
              sx={{
                borderRadius: "0.8rem",
                // backgroundImage: "url(/profile.png)",
              }}
            > */}
          {/* <CardActionArea></CardActionArea> */}
          <CardMedia
            component="img"
            alt="profile"
            image={imageUrl.profile}
            sx={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          />
          {/* </Card> */}
          {/* <img src="/profile.png" /> */}
        </Grid>
      </Grid>
      {/* <TechStack /> */}
      {/* </main> */}
    </div>
  );
};

export default Home;
