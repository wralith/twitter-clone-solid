import { Component, lazy, onMount } from "solid-js"
const UserProfileTopBar = lazy(() => import("./UserProfileTopBar"))
const ProfileInformation = lazy(() => import("./ProfileInformation"))

const UserProfileLayout: Component<any> = ({ user }) => {
  return (
    <div class="bg-base-300 min-h-screen">
      <UserProfileTopBar username={user.username} tweets={user.tweets} />
      <ProfileInformation />
    </div>
  )
}

export default UserProfileLayout
