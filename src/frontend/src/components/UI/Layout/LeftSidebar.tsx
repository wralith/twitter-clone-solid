import type { Component } from "solid-js"

const LeftSidebar = () => {
    return (
        <aside class="fixed bg-base-300 min-h-full border-r border-gray-600">
            <ul>
                <DummyIcon icon="T" />
                <DummyIcon icon="W" />
                <DummyIcon icon="I" />
                <DummyIcon icon="T" />
                <DummyIcon icon="T" />
                <DummyIcon icon="E" />
                <DummyIcon icon="R" />
                <SendTweetIcon />
            </ul>
        </aside>
    )
}

const DummyIcon: Component<{ icon: string }> = ({ icon }) => {
    return (
        <li class="w-12 h-12 m-2 justify-center items-center flex rounded-full hover:bg-gray-700 cursor-pointer">
            <p class="text-primary-content text-2xl">{icon}</p>
        </li>
    )
}

const SendTweetIcon = () => {
    return (
        <li class="bg-blue-400 w-12 h-12 m-2 mt-6 mb-4 justify-center items-center flex rounded-full hover:bg-blue-500 cursor-pointer">
            <p class="text-primary-content text-2xl">TW</p>
        </li>
    )
}

export default LeftSidebar
