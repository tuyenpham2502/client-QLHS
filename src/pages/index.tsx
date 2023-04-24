import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from 'assets/styles/Home.module.css'
import DashBoardPage from './dashbord'
import MainLayout from '@/infrastructure/common/layout/MainLayout'
const inter = Inter({ subsets: ['latin'] })

export default function Home(context: any) {
  return (
    <>
      <MainLayout>
        <div style={{ background: '#ecf2fb', borderRadius: "5px" }}>
          <DashBoardPage context={context} />
        </div>
      </MainLayout>
    </>
  )
}
