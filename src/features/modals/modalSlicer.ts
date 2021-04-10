import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchProfile } from "./../../components/api";

interface ModalStateType {
  status: "idle" | "loading" | "failed";
  isModal: boolean;
  user?: UserData;
  error: any
}

export interface UserData {
  id: number;
  name: string;
  phone: number;
  email: string;
}

const initialState: ModalStateType = {
  status: "idle",
  isModal: false,
  user: { id: 10, name: "sdf", phone: 3215, email: "sdfsdf" },
  error: ""
};

export const fetchThunk = createAsyncThunk(
  "modal/fetchData",
  async (dispatch) => {
    const response = await fetchProfile(1);
    console.log("response", response);
    return response;
  }
);

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen: (state) => {
      state.isModal = true;
    },
    modalClose: (state) => {
      state.isModal = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchThunk.fulfilled, (state, action) => {
      state.status = "idle";
      state.user = action.payload;
    });
    builder.addCase(fetchThunk.rejected, (state, action) => {
      state.status = "idle";
      state.error = action.payload;
    });
  },
});
// state.user = action.payload

export const { modalOpen, modalClose } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modals;

export default modalSlice.reducer;
