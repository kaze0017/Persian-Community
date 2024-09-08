"use client";
import MobileNav from "./components/navs/mainNavs/MobileNav";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

export default function Home() {
  const { selectedTab: value } = useSelector(
    (state: RootState) => state.mainNav
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TabContext value={value}>
        <TabPanel value="events">events</TabPanel>
        <TabPanel value="businesses">businesses</TabPanel>
        <TabPanel value="sports">sports</TabPanel>
        <TabPanel value="entertainment">entertainment</TabPanel>
      </TabContext>
      <MobileNav />
    </main>
  );
}
