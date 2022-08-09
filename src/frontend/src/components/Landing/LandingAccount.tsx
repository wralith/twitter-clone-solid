import { BsTwitter } from "solid-icons/bs"

const LandingAccount = () => {
  return (
    <div class="flex flex-col justify-evenly min-h-full px-10 py-20">
      <BsTwitter size={50} />
      <h1 class="text-5xl font-bold">Happening Now</h1>
      <div class="w-72 flex flex-col text-center gap-2">
        <h2 class="text-2xl font-bold text-left mb-6">Join Twitter Today</h2>
        <button disabled class="btn">
          Sign up with Google
        </button>
        <button disabled class="btn">
          Sign up with Apple
        </button>
        <span>or</span>
        <button class="btn btn-primary">Sign up with email</button>
      </div>
      <div>
        <h3 class="font-bold text-md mb-4">Already have an account?</h3>
        <button class="btn btn-secondary w-72">Sign in</button>
      </div>
    </div>
  )
}

export default LandingAccount
