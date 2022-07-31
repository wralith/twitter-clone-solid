import MainViewLayout from "../../MainView/MainViewLayout"
import LeftSidebar from "./LeftSidebar"

const MainLayout = (props: any) => {
  return (
    <main class="flex min-w-full min-h-[100vh]">
      <LeftSidebar />
      <MainViewLayout />
      <Right />
    </main>
  )
}

// Hidden in mobile ?
const Right = () => {
  return <aside class="bg-base-300 hidden md:flex">Right</aside>
}

export default MainLayout
