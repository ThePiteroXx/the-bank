import { SignIn, SignUp, UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-1 flex-col items-center justify-center bg-gray-800 md:flex-row">
      <div className="flex flex-1 items-center justify-center">
        <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-8xl font-extrabold text-transparent">
          The Bank
        </h1>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <SignUp />
      </div>
    </main>
  );
}
