import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header, Home, TechStack } from "./components";
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

  console.log(navigationSection);
  console.log(section);

  return (
    <div>
      <Header />
      {section.home && <Home />}
      {section.techStack && <TechStack />}
    </div>
  );
}

export default App;
