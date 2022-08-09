import LandingAccount from "../components/Landing/LandingAccount"
import LandingBottomBar from "../components/Landing/LandingBottomBar"
import LandingImage from "../components/Landing/LandingImage"

const LandingPage = () => {
  return (
    <div class="min-h-[100vh] flex flex-col justify-between">
      <div class="flex flex-row min-h-[95vh]">
        <div class="w-7/12">
          <LandingImage />
        </div>
        <div class="w-5/12">
          <LandingAccount />
        </div>
      </div>
      <LandingBottomBar />
    </div>
  )
}

export default LandingPage
