export const BE_URL = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://127.0.0.1:8000';
    } else {
        return 'http://127.0.0.1:8000';
    }
}