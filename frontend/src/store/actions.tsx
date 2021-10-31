import {Post, User} from './reducer';

export enum PostActions {
    AddPost = "POST_ADD",
    RemovePost = "POST_REMOVE",
    UpdatePosts = "POSTS_UPDATE"
}

export enum AuthActions {
    UserLogin = "USER_LOGIN",
    UserLogout = "USER_LOGOUT"
}

export type PostAction = {
    type: PostActions
    payload: Post | Post[] | string
}

export type AuthAction = {
    type: AuthActions,
    payload: AuthPayload | null
}

export type AuthPayload = {
    token: string | null,
    user: User | null,
    error: string | null
}

export const addPost = (post: Post) : PostAction => {
    return {
        type: PostActions.AddPost,
        payload: post
    };
}
export const removePost = (id: string) : PostAction => {
    return {
        type: PostActions.RemovePost,
        payload: id
    };
}

export const updatePosts = (array: Post[]) : PostAction => {
    return {
        type: PostActions.UpdatePosts,
        payload: array
    }
}

export const loginUser = (data: AuthPayload) : AuthAction => {
    return {
        type: AuthActions.UserLogin,
        payload: data
    };
}

export const logoutUser = () : AuthAction => {
    return {
        type: AuthActions.UserLogout,
        payload: null
    };
}