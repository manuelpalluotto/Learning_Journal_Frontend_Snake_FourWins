import { AppProps } from 'next/app';
import { UserProvider } from '@/app/context/UserContext';
import '@/app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    );
}

export default MyApp;