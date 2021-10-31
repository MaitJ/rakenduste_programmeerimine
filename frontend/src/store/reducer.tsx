import {PostAction, AuthAction, PostActions, AuthActions} from './actions';

export interface Post {
    key: string,
    _id: string,
    firstName: string,
    lastName: string,
    data: string
    createdAt: Date,
    updatedAt: Date | null
}

export interface PostState {
    data: Post[]
}

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}

export interface AuthState {
    token: string | null,
    user: User | null
}

const postReducer = (state: PostState, action: PostAction): PostState => {
    switch (action.type) {
        case PostActions.AddPost:
            return {
                ...state,
                data: state.data.concat(action.payload as Post)
            }
        case PostActions.RemovePost:
            return {
                ...state,
                data: state.data.filter((post) => post._id !== (action.payload as string))
            }
        case PostActions.UpdatePosts:
            return {
                ...state,
                data: action.payload as Post[]
            }
        default:
            return state
    }
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActions.UserLogin:
            return {
                ...state,
                token: action.payload?.token as string,
                user: action.payload?.user as User,

            }
        case AuthActions.UserLogout:
            return {
                ...state,
                token: null,
                user: null
            }
        default:
            return state
    }
}


export {postReducer, authReducer};