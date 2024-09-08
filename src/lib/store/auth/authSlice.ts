import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "@/lib/types/UserType";
import { useUser } from "@clerk/nextjs";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const { user: clerkUser } = useUser();
  console.log(clerkUser);
  const reUser = {
    id: clerkUser?.id || "",
    firstName: clerkUser?.firstName || "",
    lastName: clerkUser?.lastName || "",
    imageUrl: clerkUser?.imageUrl || "",
  };
  return reUser;
});

interface UserState {
  user: UserType;
}

const initialState: UserState = {
  user: {
    id: "",
    firstName: "",
    lastName: "",
    imageUrl: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state , action: PayloadAction<UserType>) => {
      state.user =  action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
