import React , { useState } from "react";
import { Form , Button  } from "react-bootstrap";

import {signIn as signInAction} from "../../store/actions/users-actions";
import { rand } from "random-bytes-js";
import Cookies from "universal-cookie/es6";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import CryptoJS from "crypto-js"

const LoginForm = () => {

    const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const error = useSelector(state => state.users.error);
	const navigate = useNavigate();
	const cookies = new Cookies();

    const authentication = async (e) => {

        e.preventDefault();
        setLoading(true);

        let iv = rand(32);
        if(iv.length > 32) {
            iv = iv.slice(0,32);
        }
        const AesKey = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_AES_KEY);
        const byteIv = CryptoJS.enc.Hex.parse(iv);
        //Crypto
        const encryptedStringHex = CryptoJS.AES.encrypt(password, AesKey, {
			iv: byteIv,
			mode: CryptoJS.mode.CBC,
			format: CryptoJS.format.Hex
		}).ciphertext;

        // Crypto password
        const passwordCrypto = CryptoJS.enc.Hex.stringify(byteIv) + ':' + encryptedStringHex.toString(CryptoJS.enc.Hex);
        //console.log(passwordCrypto);
        // API post 
        await dispatch(
            signInAction({ login, password: passwordCrypto , id_module: 4 })
        );
        // if token , navigate to profile
        if(cookies.get('auth-token')) {
            navigate('/profile');
        }
        else {
            setLoading(false);
        }
    }

    return (
                <Form onSubmit={(e) => authentication(e)}>
                    <div className="d-flex align-items-center mb-3 pb-1">
                        <h5 className="login-title">Авторизация</h5>
                    </div>
                <Form.Group className="mb-4">
                    <Form.Label>ID пользователя:</Form.Label>
                    <Form.Control
                        maxLength={25} 
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        type="text" 
                        required
                        placeholder="Введите номер" />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" 
                        required 
                        placeholder="Введите пароль" />
                </Form.Group>
                {error?.ru && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                        {error.ru}
                        </div>
                    </div>
                )}
                <div className="pt-1 mb-4">
                    <Button 
                        //disabled={loading}
                        style={{width : '110px'}}
                        type="sumbit" 
                        variant="btn btn-dark btn-block" >
                        {loading && (
                            <span className="spinner-border spinner-border-sm" />
                        )}
                        <span>Вход</span>
                    </Button>
                </div>
            </Form>

    )
}

export default LoginForm;