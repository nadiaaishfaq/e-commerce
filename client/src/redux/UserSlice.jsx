import axios from 'axios';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

export const fetchData = createAsyncThunk('SignupUser/LoginSystem',async(_,{rejectWithValue}) => {
    try {
        const data = await axios.get('http://localhost:8080/SignupUser/LoginSystem')
        console.log(data);
        return data;
    } catch (error) {
        return rejectWithValue(error) 
    }
})
const UserSlice = createSlice({
    name: 'user',
    initialState: {
        loading:false,
        user: [], 
        error: null
    },
    // reducers:{},
    //     extraReducers: (response)=> 
    //     {
    //         response
    //         .addCase(fetchData.pending,(state)=>{
            
    //         state.status = 'loading'              
    //         })
    //         .addCase(fetchData.fulfilled,(state,action)=>{
    //             state.status = "data loaded successfully"
    //             state.data = action.payload
    //         })
    //         .addCase(fetchData.rejected,(state,action)=>{
            
    //             state.status = "Data rendering rejected"
    //             state.error = action.payload
    //         })
    //     },
});

export default UserSlice.reducer