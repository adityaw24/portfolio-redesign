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
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { LottieAnimation } from "../../utils/lottie-animation";

const TechStack = () => {
  const datas = [
    {
      title: "Frontend",
      language: ["HTML", "CSS", "Javascript", "Typescript"],
      framework: ["ReactJs, NextJs, Tailwind, Bootstrap"],
      bg: "white",
      icon: {
        data: FrontendAnimation,
        height: 200,
        width: 200,
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
        height: 200,
        width: 200,
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
        height: 200,
        width: 200,
      },
      api: ["Postman", "Insomnia"],
      tools: ["VS Code", "DBeaver"],
    },
  ];
  return (
    <Box className="bg-white p-6 md:p-12 xl:p-20 flex flex-col md:flex-row gap-6 justify-center">
      {datas.map((data) => (
        <Card key={data.title} elevation={3}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h6" gutterBottom className="text-center">
                {data.title}
              </Typography>
              <Box className="flex flex-col justify-between items-center">
                <div className="lg:h-[20rem] md:h-[13rem] xl:h-[28rem]">
                  <LottieAnimation
                    lottie={data.icon.data}
                    height={data.icon.height}
                    width={data.icon.width}
                    // className='flex-1'
                  />
                </div>
                {/* <Typography variant="body1" gutterBottom className="text-center">
                  {data.title}
                </Typography> */}
                {/* <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          Language
                        </TableCell>
                        <TableCell align="right">:</TableCell>
                        <TableCell align="right">{data.language}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer> */}
                {data.language.length > 0 && (
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 8, sm: 12, md: 12, lg: 12 }}
                    sx={{ marginBottom: { xs: "0.5rem" } }}
                  >
                    <Grid item lg={3} xs={3} sm={5}>
                      Language
                    </Grid>
                    <Grid item lg="auto">
                      :
                    </Grid>
                    <Grid item lg="auto">
                      {data.language.join(", ")}
                    </Grid>
                  </Grid>
                )}
                {data.framework.length > 0 && (
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 8, sm: 12, md: 12, lg: 12 }}
                    sx={{ marginBottom: { xs: "0.5rem" } }}
                  >
                    <Grid item lg={3} xs={3} sm={5}>
                      Framework
                    </Grid>
                    <Grid item lg="auto">
                      :
                    </Grid>
                    <Grid item lg="auto">
                      {data.framework.join(", ")}
                    </Grid>
                  </Grid>
                )}
                {data.tools.length > 0 && (
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 8, sm: 12, md: 12, lg: 12 }}
                    sx={{ marginBottom: { xs: "0.5rem" } }}
                  >
                    <Grid item lg={3} xs={3} sm={5}>
                      Tools
                    </Grid>
                    <Grid item lg="auto">
                      :
                    </Grid>
                    <Grid item lg="auto">
                      {data.tools.join(", ")}
                    </Grid>
                  </Grid>
                )}
                {data.api.length > 0 && (
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 8, sm: 12, md: 12, lg: 12 }}
                    sx={{ marginBottom: { xs: "0.5rem" } }}
                  >
                    <Grid item lg={3} xs={3} sm={5}>
                      API
                    </Grid>
                    <Grid item lg="auto">
                      :
                    </Grid>
                    <Grid item lg="auto">
                      {data.api.join(", ")}
                    </Grid>
                  </Grid>
                )}
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default TechStack;
