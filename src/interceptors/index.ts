import { getValidationError } from '@/utilities/velidationError';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
const Interceptor = () => {
    const updateHeader = (request: AxiosRequestConfig) => {
        const newHeaders = {
            Authorization: TOKEN,
            "Content-Type": 'application/json',
        };
        request.headers = newHeaders;
        return request;
    };
    
    axios.interceptors.request.use((request) => {
        if(request.url?.includes('assets')) return request;
        return updateHeader(request);
    });

    axios.interceptors.response.use(
        (response) => {
            return response;
        }, 
        (error) => {
            return Promise.reject(getValidationError(error));
        }
    )
}

export default Interceptor;