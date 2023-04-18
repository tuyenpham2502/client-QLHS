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
        <DashBoardPage context={context} />
      </MainLayout>
    </>
  )
}
