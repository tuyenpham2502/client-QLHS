import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from 'assets/styles/Home.module.css'
import DashBoardPage from './dashbord'
import MainLayout from '@/infrastructure/common/layout/MainLayout'
import { MenuKeys } from '@/core/domain/enums/MenuKeys'
const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps(context: any) {
  return {
    props: {
      defaultSelectedKeys: [MenuKeys.Dashboard],
      openKeys: [],
    },
  }
};


export default function Home(context: any) {
  return (
    <>
      <MainLayout context={context}>
        <div>
          <DashBoardPage context={context} />
        </div>
      </MainLayout>
    </>
  )
}
