export const BE_URL = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:7897';
    } else {
        return 'https://bk-app-be.onrender.com';
    }
}