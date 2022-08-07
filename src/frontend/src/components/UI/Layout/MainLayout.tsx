import MainViewLayout from "../../MainView/MainViewLayout"
import LeftSidebar from "./LeftSidebar"

const MainLayout = (props: any) => {
  return (
    <main class="flex min-w-full min-h-[100vh]">
      <aside class="sticky top-0 bg-base-300 h-[100vh] lg:px-3 border-r border-gray-600 w-20 md:w-2/12 xl:w-4/12 items-end">
        <LeftSidebar />
      </aside>
      <div class="xl:w-4/12 w-full md:w-1/2">{props.children}</div>
      <aside class="hidden md:flex sticky top-0 bg-base-300 h-[100vh] lg:px-3 border-l border-gray-600 w-4/12 items-end">
        <Right />
      </aside>
    </main>
  )
}

// Hidden in mobile ?
const Right = () => {
  return <aside class="bg-base-300 hidden md:flex">Right</aside>
}

export default MainLayout
