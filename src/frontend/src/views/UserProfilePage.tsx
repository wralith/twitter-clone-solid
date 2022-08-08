import { useParams } from "@solidjs/router"
import { createResource, lazy, onMount, Suspense } from "solid-js"
import MainLayout from "../components/UI/Layout/MainLayout"
const UserProfileLayout = lazy(() => import("../components/UserProfile/UserProfileLayout"))

const UserProfilePage = () => {
  const params = useParams()
  const [user] = createResource(params.username, fetchUserProfile)

  return (
    <MainLayout>
      <Suspense fallback={<p>Loading...</p>}>
        <UserProfileLayout user={user()} />
        <pre>{JSON.stringify(user(), null, 2)}</pre>
      </Suspense>
    </MainLayout>
  )
}

const fetchUserProfile = async (username: string) =>
  (await fetch(`http://localhost:8080/users/${username}`)).json()

export default UserProfilePage
