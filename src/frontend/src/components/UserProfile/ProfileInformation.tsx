const ProfileInformation = () => {
  return (
    <>
      <div>
        <img class="w-full h-52" src="https://picsum.photos/seed/picsum/400/200" alt="header" />
        <div class="flex justify-between p-4 -mb-24">
          <img
            class="bottom-20 relative border-4 border-base-300 rounded-full w-32 h-32 hover:brightness-75 transition-all"
            src="https://picsum.photos/seed/picsum/200/200"
            alt="header"
          />
          <button class="btn">Edit Profile</button>
        </div>
      </div>
      <div class="p-4">
        <div class="flex flex-col">
          <h1 class="text-xl font-bold">Username</h1>
          <small class="opacity-70">@username</small>
        </div>
        <div class="pt-4 flex flex-col gap-2">
          <p>Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda.</p>
          <div class="flex gap-4">
            <small class="opacity-75">Born January 1, 2000</small>
            <small class="opacity-75">Joined January 1, 2000</small>
          </div>
          <div class="flex gap-4 pt-4">
            <small>
              <span class="font-bold">100</span> Followings
            </small>
            <small>
              <span class="font-bold">100</span> Followers
            </small>
          </div>
        </div>
      </div>
      <div class="tabs min-w-full pt-2">
        <a class="tab tab-bordered w-1/4 tab-active">Tweets</a>
        <a class="tab tab-bordered w-1/4">Tweets & Replies</a>
        <a class="tab tab-bordered w-1/4">Media</a>
        <a class="tab tab-bordered w-1/4">Likes</a>
      </div>
    </>
  )
}

export default ProfileInformation
