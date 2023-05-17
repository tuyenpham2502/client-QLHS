import 'assets/styles/globals.css'
import { Poppins } from 'next/font/google'
import type { AppProps } from 'next/app'
import {RecoilRoot} from 'recoil';
import RecoilOutsideComponent from '@/infrastructure/common/libs/recoil-outside/Service';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <RecoilOutsideComponent/>
      return <Component {...pageProps} />
    </RecoilRoot>
  )
};
