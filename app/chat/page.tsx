import Header from "@/components/global/Header"
import Navbar from "@/components/global/Navbar"

export default function ChatPage() {
  return (
    < div className="h-screen">
        <Header />
        <main className="flex flex-col items-center justify-center h-full w-full bg-background ">
            <h1 className="text-2xl font-bold">Chat</h1>
        </main>
        <Navbar />
    </div>
  )
}
