import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

type PostTask = {
  id: string
  title: string
  content: string
  tag: string
}

const initialState = {
  editedTask: {
    id: '',
    title: '',
    content: '',
    tag: '',
  },
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setEditedTask: (state, action: PayloadAction<PostTask>) => {
      state.editedTask = action.payload
    },
    resetEditedTask: (state) => {
      state.editedTask = initialState.editedTask
    },
  },
})

export const { setEditedTask, resetEditedTask } = taskSlice.actions
export const selectEditedBook = (state: RootState) => state.task.editedTask
export default taskSlice.reducer
