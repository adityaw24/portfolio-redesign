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
import "../../styles/techStack.scss";
import { dataTechStack } from "../../utils/const";

const TechStack = () => {
  return (
    <div className="min-h-screen container-tech-stack">
      <Toolbar />
      {/* <Box className="p-6 md:p-12 xl:p-40 lg:px-16 flex flex-col md:flex-row gap-6 xl:gap-[6rem] lg:gap-[3rem] justify-center h-full"> */}
      <Grid
        container
        // spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 4, md: 8, lg: 8 }}
        className="py-2 md:py-6"
        // className="p-6 md:p-12 xl:p-40 lg:px-16 flex flex-col md:flex-row gap-6 xl:gap-[6rem] lg:gap-[3rem] justify-center h-full"
      >
        {/* <Box className="p-6 md:p-12 xl:p-40 lg:px-16 flex flex-col md:flex-row gap-6 xl:gap-[6rem] lg:gap-[3rem]"> */}
        {dataTechStack.map((data) => (
          <>
            <Grid
              item
              xs={1}
              sm={2}
              md={4}
              lg={4}
              className="flex justify-center p-6"
              sx={
                {
                  // width: { lg: "10rem", md: "23rem" },
                }
              }
            >
              <Card
                key={data.title}
                elevation={3}
                className="h-full card-tech-stack"
                sx={{
                  width: { lg: "30rem", md: "23rem" },
                  minHeight: { md: "43rem", sm: "35rem" },
                  overflow: "visible",
                  // height: { xs: "70rem !important" },
                  // backgroundColor: "rgba(255,255,255, 0.9)",
                }}
              >
                <CardActionArea
                  className="h-full"
                  sx={{ display: "flex", alignItems: "flex-start" }}
                >
                  <CardContent
                    className="flex flex-col h-full"
                    sx={{ padding: 0 }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      className="pt-4 text-center"
                    >
                      {data.title}
                    </Typography>
                    <Box
                      className="flex flex-col justify-between"
                      // sx={{
                      //   height: { xs: "90rem" },
                      // }}
                    >
                      <div className="lg:h-[21rem] md:h-[19rem] xl:h-[28rem]">
                        <LottieAnimation
                          lottie={data.icon.data}
                          height={data.icon.height}
                          width={data.icon.width}
                          // className="min-h-[10rem]"
                        />
                      </div>
                      <Table>
                        <TableBody>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                              verticalAlign: "top",
                            }}
                          >
                            <TableCell component="th" scope="row">
                              Language
                            </TableCell>
                            <TableCell align="left">:</TableCell>
                            <TableCell align="left">
                              {data.language.join(", ")}
                            </TableCell>
                          </TableRow>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                              verticalAlign: "top",
                            }}
                          >
                            <TableCell component="th" scope="row">
                              Framework
                            </TableCell>
                            <TableCell align="left">:</TableCell>
                            <TableCell align="left">
                              {data.framework.join(", ")}
                            </TableCell>
                          </TableRow>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                              verticalAlign: "top",
                            }}
                          >
                            <TableCell component="th" scope="row">
                              API
                            </TableCell>
                            <TableCell align="left">:</TableCell>
                            <TableCell align="left">
                              {data.api.join(", ")}
                            </TableCell>
                          </TableRow>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                              verticalAlign: "top",
                            }}
                          >
                            <TableCell component="th" scope="row">
                              Tools
                            </TableCell>
                            <TableCell align="left">:</TableCell>
                            <TableCell align="left">
                              {data.tools.join(", ")}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      {/* <Box>
                    {data.language.length > 0 && (
                      <Grid
                        container
                        columnSpacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 10, sm: 12, md: 14, lg: 16 }}
                        sx={{ marginBottom: { xs: "0.5rem" } }}
                      >
                        <Grid item lg={3} xs={4} sm={4} md={4}>
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
                        columnSpacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 10, sm: 12, md: 14, lg: 16 }}
                        sx={{ marginBottom: { xs: "0.5rem" } }}
                      >
                        <Grid item lg={3} xs={4} sm={4} md={4}>
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
                        columnSpacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 10, sm: 12, md: 14, lg: 16 }}
                        sx={{ marginBottom: { xs: "0.5rem" } }}
                      >
                        <Grid item lg={3} xs={4} sm={4} md={4}>
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
                        columnSpacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 10, sm: 12, md: 14, lg: 16 }}
                        sx={{ marginBottom: { xs: "0.5rem" } }}
                      >
                        <Grid item lg={3} xs={4} sm={4} md={4}>
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
                  </Box> */}
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
      {/* </Box> */}
    </div>
  );
};

export default TechStack;
