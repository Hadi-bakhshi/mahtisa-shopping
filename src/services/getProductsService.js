import http from './httpService';

export function getProducts(){
    return http.get('/product');
}