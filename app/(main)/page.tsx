import { SignIn } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignIn />
      I am Ankush
    </div>
  )
}