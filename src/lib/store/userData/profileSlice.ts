import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { savePreferredTheme } from "@/lib/actions/savePreferredTheme";
import { fetchPreferredTheme } from "@/lib/actions/fetchPreferredTheme";

export const setThemeServer = createAsyncThunk(
  "profile/setThemeServer",
  async (theme: "light" | "dark") => {
    console.log("Saving theme preference...");
    const result = await savePreferredTheme({ theme });
    return result;
  }
);

export const fetchTheme = createAsyncThunk("profile/fetchTheme", async () => {
  const result = await fetchPreferredTheme();
  return result.theme;
});

interface ProfileState {
  theme: "light" | "dark";
}

const initialState: ProfileState = {
  theme: "light",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setThemeServer.fulfilled, (state, action) => {
      console.log("Theme preference saved successfully!");
    });
    builder.addCase(setThemeServer.rejected, (state, action) => {
      console.error("Failed to save theme preference:", action.error);
    });

    builder.addCase(fetchTheme.fulfilled, (state, action) => {
      state.theme = action.payload;
    });
    builder.addCase(fetchTheme.rejected, (state, action) => {
      console.error("Failed to fetch theme preference:", action.error);
    });
  },
});

export const { setTheme } = profileSlice.actions;

export default profileSlice.reducer;
