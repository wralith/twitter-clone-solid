import { Portal } from "solid-js/web"
import { CgCloseO } from 'solid-icons/cg'

const Modal = (props: any) => {
  return (
    <Portal>
      <div class="absolute flex justify-center items-center top-0 left-0 w-screen h-screen bg-base-300">
        <div class="h-full w-full md:h-3/4 md:w-[600px] bg-base-100 rounded-xl">
          <div class="flex flex-row gap-10 items-center bg-base-100 rounded-t-xl p-4">
            <div class="cursor-pointer w-4"><CgCloseO size={30}/></div>
            <h1 class="text-lg">{props.title}</h1>
          </div>
          {props.children}
        </div>
      </div>
    </Portal>
  )
}

export default Modal