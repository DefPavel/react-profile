import axios from "axios";
import {signInAction, signInErrorAction} from "../reducers/users-reducer";
import Cookies from 'universal-cookie/es6';
const cookies = new Cookies();

export const signIn = (payload) => {
	return async dispatch => {
        // Отправляем запрос
		await axios.post('/api/auth', payload)
			.then(resp => {
				console.log(resp);
                // записываем в cookies
				cookies.set('auth-token', payload.token)
				dispatch(signInAction(resp.data))
			})
			.catch(err => dispatch(signInErrorAction(err.response.data)))
	}
}
