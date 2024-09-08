"use client";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store/store";
import { useEffect } from "react";
import { setUser } from "@/lib/store/auth/authSlice";
import { useUser } from "@clerk/nextjs";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export default function Profile({ fetchUser }: any) {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const { user: clerkUser } = useUser();

  useEffect(() => {
    if (clerkUser) {
      dispatch(
        setUser({
          id: clerkUser.id || "",
          firstName: clerkUser.firstName || "",
          lastName: clerkUser.lastName || "",
          imageUrl: clerkUser.imageUrl || "",
        })
      );
    }
  }, [clerkUser, dispatch]);

  return (
    <div>
      {user ? (
        <Box>
          {/* <Avatar src={user.imageUrl} /> */}
          <Typography variant="h1">
            {/* {user.firstName} {user.lastName} */}
          </Typography>
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
