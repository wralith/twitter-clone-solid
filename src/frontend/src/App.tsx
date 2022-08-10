import { Component, lazy } from "solid-js"

import { Routes, Route } from "@solidjs/router"
import HomePage from "./views/HomePage"
import LandingPage from "./views/LandingPage"
import UserProfilePage from "./views/UserProfilePage"
import SignUpPage from "./views/SignUpPage"

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={LandingPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/users/:username" component={lazy(() => import("./views/UserProfilePage"))} />
    </Routes>
  )
}

export default App
