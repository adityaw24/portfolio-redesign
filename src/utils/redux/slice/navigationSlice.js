import { createSlice } from "@reduxjs/toolkit";
import { navigationState } from "../state";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: navigationState,
  reducers: {
    goHone: (state, action) => {
      state.nav = {
        home: true,
        techStack: false,
        projects: false,
      };
    },
    goTechStack: (state, action) => {
      state.nav = {
        techStack: true,
        home: false,
        projects: false,
      };
    },
    goProjects: (state, action) => {
      state.nav = {
        projects: true,
        home: false,
        techStack: false,
      };
    },
  },
});

export const { goHone, goTechStack, goProjects } = navigationSlice.actions;

export default navigationSlice.reducer;
