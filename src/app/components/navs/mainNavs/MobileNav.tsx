"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store/store";
import { selectTab } from "@/lib/store/navs/mainNavSlice";

export default function MobileNav() {
  const dispatch = useDispatch();
  const { selectedTab: value } = useSelector(
    (state: RootState) => state.mainNav
  );
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(selectTab(newValue));
  };

  return (
    <Box
      sx={{
        maxWidth: {
          xs: 320,
          sm: 480,
          md: 640,
        },
      }}
      component={"div"}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="events" value={"events"} />
        <Tab label="businesses" value={"businesses"} />
        <Tab label="sports" value={"sports"} />
        <Tab label="entertainment" value={"entertainment"} />
      </Tabs>
    </Box>
  );
}
