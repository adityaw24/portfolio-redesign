import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { Header, Home, Project, TechStack } from "./components";
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
} from "@mui/material";
import { useRegularHook } from "./utils/hooks";

function App() {
  const { reduxState } = useRegularHook();
  const navigationSection = reduxState.navigation.nav;

  const section = {
    home: navigationSection?.home ?? true,
    techStack: navigationSection?.techStack,
    project: navigationSection?.projects,
  };

  return (
    <div>
      <Header />
      {section.home && <Home />}
      {section.techStack && <TechStack />}
      {section.project && <Project />}
    </div>
  );
}

export default App;
