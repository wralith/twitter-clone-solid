import { createSignal } from "solid-js"
import Modal from "../components/UI/Modal"

const SignUpPage = () => {
  const [username, setUsername] = createSignal("")
  const [email, setEmail] = createSignal("")
  const [password, setPassword] = createSignal("")

  const handleSubmit = (e:Event): void => {
    e.preventDefault()
    const dataToSignUp = {
      username: username(),
      email: email(),
      password: password()
    }

    console.log(dataToSignUp)
  }

  return (
    <Modal title="Sign Up">
      <div class="flex flex-col py-4 px-[4.5rem]">
        <h1 class="font-bold text-3xl mb-10">Create your account</h1>
        <div class="form-control">
          <label class="label"></label>
          <label class="input-group input-group-vertical">
            <span>Username</span>
            <input
              type="text"
              id="username"
              value={username()}
              onChange={(e) => setUsername(e.currentTarget.value)}
              class="input input-bordered"
            />
          </label>
        </div>
        <div class="form-control">
          <label class="label"></label>
          <label class="input-group input-group-vertical">
            <span>Email</span>
            <input
              type="email"
              id="email"
              value={email()}
              onChange={(e) => setEmail(e.currentTarget.value)}
              class="input input-bordered"
            />
          </label>
        </div>
        <div class="form-control">
          <label class="label"></label>
          <label class="input-group input-group-vertical">
            <span>Password</span>
            <input
              type="password"
              id="password"
              value={password()}
              onChange={(e) => setPassword(e.currentTarget.value)}
              class="input input-bordered"
            />
          </label>
        </div>
        <button onclick={handleSubmit} class="btn mt-20">Register</button>
        <a class="link mt-10">Forgot your password?</a>
      </div>
    </Modal>
  )
}

export default SignUpPage
