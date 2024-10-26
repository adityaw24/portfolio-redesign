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
  Tooltip,
  ImageList,
  ImageListItem,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import "../../styles/project.scss";
import {
  dataProject,
  projectUrlDeploy,
  projectUrlGithub,
} from "../../utils/const";

const Project = () => {
  return (
    <div className="min-h-screen container-project">
      <Toolbar />
      <Grid
        container
        // spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 4, md: 8, lg: 12 }}
        className="py-2 md:py-6"
        // className="p-6 md:p-12 xl:p-40 lg:px-16 flex flex-col md:flex-row gap-6 xl:gap-[6rem] lg:gap-[3rem] justify-center h-full"
      >
        {/* <Box className="p-6 md:p-12 xl:p-40 lg:px-16 flex flex-col md:flex-row gap-6 xl:gap-[6rem] lg:gap-[3rem] justify-center h-full"> */}
        {/* <Box className="p-6 md:p-12 xl:p-40 lg:px-16 flex flex-col md:flex-row gap-6 xl:gap-[6rem] lg:gap-[3rem]"> */}
        {dataProject.map((data) => (
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
                key={data?.title}
                elevation={3}
                className="h-full card-project"
                sx={{
                  // width: "100%",
                  width: { xl: "40rem", lg: "30rem", sm: "20rem", md: "25rem" },
                  // minHeight: { md: "37rem", sm: "35rem" },
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
                    {/* <Box
                    className="flex flex-col items-center justify-between"
                    // sx={{
                    //   height: { xs: "90rem" },
                    // }}
                  > */}
                    {/* <div className="lg:h-[21rem] md:h-[19rem] xl:h-[28rem]"> */}
                    {/* <LottieAnimation
                    lottie={data?.icon.data}
                    // height={data?.icon.height}
                    // width={data?.icon.width}
                    // className="flex"
                  /> */}
                    {/* </div> */}
                    {data?.image?.length == 2 ? (
                      <ImageList variant="masonry" cols={2} gap={8}>
                        {data?.image?.map((item) => (
                          <ImageListItem key={item}>
                            <img
                              srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                              src={`${item}?w=248&fit=crop&auto=format`}
                              alt={data?.title}
                              loading="lazy"
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    ) : data?.image?.length > 2 ? (
                      <ImageList variant="masonry" cols={3} gap={8}>
                        {data?.image?.map((item) => (
                          <ImageListItem key={item}>
                            <img
                              srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                              src={`${item}?w=248&fit=crop&auto=format`}
                              alt={data?.title}
                              loading="lazy"
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    ) : (
                      <CardMedia
                        component="img"
                        alt={data?.title}
                        image={data?.image?.[0]}
                        className="h-[80%]"
                      />
                    )}
                    <Box sx={{ marginTop: { xs: "2rem" } }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        className="text-center"
                      >
                        {data?.title}
                      </Typography>
                      <Table
                        // sx={{ minWidth: 650 }}
                        size="small"
                      >
                        <TableBody>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                              verticalAlign: "top",
                            }}
                          >
                            <TableCell component="th" scope="row">
                              Features
                            </TableCell>
                            <TableCell align="left">:</TableCell>
                            <TableCell align="left">
                              {data?.feature.join(", ")}
                            </TableCell>
                          </TableRow>
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
                              {data?.language.join(", ")}
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
                              {data?.framework.join(", ")}
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
                              {data?.api.join(", ")}
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
                              {data?.tools.join(", ")}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {data?.github?.length > 0 && (
                          <Tooltip title="Github">
                            <IconButton
                              sx={{ color: "black" }}
                              href={data?.github}
                              target="_blank"
                            >
                              <GitHubIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                        {data?.web?.length > 0 && (
                          <Tooltip title="Open Web">
                            <IconButton
                              sx={{ color: "black" }}
                              href={data?.web}
                              target="_blank"
                            >
                              <PublicIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                      </div>
                      {/* {data?.feature.length > 0 && (
                      <Grid
                        container
                        columnSpacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 10, sm: 12, md: 14, lg: 16 }}
                        sx={{ marginBottom: { xs: "0.5rem" } }}
                      >
                        <Grid item lg={3} xs={4} sm={4} md={4}>
                          Features
                        </Grid>
                        <Grid item>:</Grid>
                        <Grid item>
                          {data?.feature.join(", ")}
                        </Grid>
                      </Grid>
                    )}
                    {data?.language.length > 0 && (
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
                          {data?.language.join(", ")}
                        </Grid>
                      </Grid>
                    )}
                    {data?.framework.length > 0 && (
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
                          {data?.framework.join(", ")}
                        </Grid>
                      </Grid>
                    )}
                    {data?.tools.length > 0 && (
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
                          {data?.tools.join(", ")}
                        </Grid>
                      </Grid>
                    )}
                    {data?.api.length > 0 && (
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
                          {data?.api.join(", ")}
                        </Grid>
                      </Grid>
                    )} */}
                    </Box>
                    {/* </Box> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </>
        ))}
        {/* </Box> */}
      </Grid>
    </div>
  );
};

export default Project;
