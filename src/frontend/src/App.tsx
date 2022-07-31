import type { Component } from "solid-js"
import MainLayout from "./components/UI/Layout/MainLayout"

const App: Component = () => {
  return (
    <MainLayout>
      <div>
        <h1>Hello world</h1>
      </div>
    </MainLayout>
  )
}

export default App
