import {createSlice, Slice} from "@reduxjs/toolkit";

interface User{
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}
interface InitialState {
    isLoggedIn: boolean;
    isRegistered: boolean;
    users: User[];
}

//declare initial state
const initialState: InitialState ={
    isLoggedIn: false,
    isRegistered: false,
    users: [{firstName:'', lastName:'', password:'', email:''}]
}

//create the auth slice
const authSlice:Slice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        checkLoginStatus: (state: InitialState, action:{payload: any, type: string}): void =>{
            state.isLoggedIn = action.payload
        },
        checkRegisterStatus: (state: InitialState, action:{payload: any, type: string}):void =>{
            state.isRegistered = action.payload
        },
        addUser: (state: InitialState, action:{payload: any, type: string}):void =>{
            state.users = action.payload
        },
    }
})

export const { checkLoginStatus, checkRegisterStatus, addUser} = authSlice.actions;
export default  authSlice.reducer;



