const {createSlice} = require("@reduxjs/toolkit");

export const authSlice = createSlice({
    name: "authSlice",
    initialState: [
        {
            status:  'Buy',
            name: "Md. Ashikur Rahman"
        }
    ]

})