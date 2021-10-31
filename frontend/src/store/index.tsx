import {PostState, AuthState, postReducer, authReducer} from './reducer';
import combineReducers from 'react-combine-reducers';
import React, { createContext, useReducer, useEffect, useCallback } from 'react';
import {updatePosts} from './actions';
import {api} from '../components/Rest';
import {Post} from './reducer';

const initialPosts: PostState = {
    data: []
}

const initialAuth: AuthState = {
    token: null,
    user: null
}

const [combinedReducer, initialState] = combineReducers({
    posts: [postReducer, initialPosts],
    auth: [authReducer, initialAuth]
})

export const Context = createContext<[States, React.Dispatch<any>, () => Promise<void>]>(initialState);

interface States {
    posts: PostState,
    auth: AuthState
}

const Store: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(combinedReducer, initialState);

    const fetchPosts = useCallback(async () => {
        const posts = await api<Post[]>("http://localhost:8081/api/post/");
        const newPosts: Post[] = posts.map((post) => {
            return {
                ...post,
                key: post._id
            }
        })
        dispatch(updatePosts(newPosts));
    }, [])


    useEffect(() => {
        fetchPosts();
    }, [fetchPosts])



    return (
        <Context.Provider value={[state, dispatch, fetchPosts]}>
            {children}
        </Context.Provider>
    )
}

export default Store;