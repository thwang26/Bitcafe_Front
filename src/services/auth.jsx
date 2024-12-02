import axios from 'axios'
import { setCookie, removeCookie } from '../utils/Cookies'

const onSilentRefresh = () => {
    axios
        .post('/api/auth/reissue')
        .then(onLoginSuccess)
        .catch(err => {
            console.log(err)
        })
}

const onLoginSuccess = (res) => {
    const { accessToken } = res.data

    setCookie('accessToken', accessToken, { path: '/' })

    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
}

const LogoutSuccess = () => {
    delete axios.defaults.headers.common.Authorization
    removeCookie('accessToken')
    removeCookie('refreshToken')
}

export { onLoginSuccess, onSilentRefresh, LogoutSuccess }
