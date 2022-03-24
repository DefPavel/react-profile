import axios from "axios";
import {signInAction, signInErrorAction} from "../reducers/users-reducer";
import Cookies from 'universal-cookie/es6';
const cookies = new Cookies();

export const signIn = (payload) => {
	return async dispatch => {
        // Отправляем запрос
		await axios.post('/api/auth', payload)
			.then(resp => {
                // записываем в cookies token
				cookies.set('auth-token', resp.data.auth_token)
				cookies.set('user', JSON.stringify(resp.data))
				dispatch(signInAction(resp))
			})
			.catch(err => 
				{
					dispatch(signInErrorAction(err.response.data.resp))
				})
	}
}
