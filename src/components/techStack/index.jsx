import React from "react";
import {
  BackendAnimation,
  FrontendAnimation,
  ToolsAnimation,
} from "../../assets/animation";
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
} from "@mui/material";
import { LottieAnimation } from "../../utils/lottie-animation";

const TechStack = () => {
  const datas = [
    {
      title: "Frontend",
      language: ["HTML, CSS, Javascript, Typescript"],
      framework: ["ReactJs, NextJs, Tailwind, Bootstrap"],
      bg: "white",
      icon: {
        data: FrontendAnimation,
        height: 0,
        width: 0,
      },
      api: ["Axios"],
      tools: [],
    },
    {
      title: "Backend",
      language: ["Golang", "SQL"],
      framework: ["PostgreSql"],
      bg: "white",
      icon: {
        data: BackendAnimation,
        height: 0,
        width: 0,
      },
      api: ["Rest API", "CRUD"],
      tools: [],
    },
    {
      title: "Tools",
      language: ["git"],
      framework: [],
      bg: "white",
      icon: {
        data: ToolsAnimation,
        height: 0,
        width: 0,
      },
      api: ["Postman", "Insomnia"],
      tools: ["VS Code", "DBeaver"],
    },
  ];
  return (
    <Box className="bg-white p-6 flex gap-6 justify-center">
      {datas.map((data) => (
        <Card key={data.title}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {data.title}
              </Typography>
              <LottieAnimation
                lottie={data.icon.data}
                height={300}
                width={300}
              />
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default TechStack;
