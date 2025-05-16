
import { signIn } from "@/auth"

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
        >
            <button
                className="cursor-pointer p-4 border border-2 border-white rounded-xl"
                type="submit">
                Signin with Google
            </button>
        </form>
    )
} 