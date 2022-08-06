import type { Component } from "solid-js"
import MainLayout from "./components/UI/Layout/MainLayout"

import { Routes, Route } from "@solidjs/router"
import HomePage from "./views/HomePage"
import LandingPage from "./views/LandingPage"
import UserProfilePage from "./views/UserProfilePage"

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={LandingPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/users/:id" component={UserProfilePage} />
    </Routes>
  )
}

export default App
