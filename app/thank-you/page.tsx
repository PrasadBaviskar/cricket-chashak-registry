import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <main className="min-h-dvh flex items-center">
      <section className="w-full">
        <div className="mx-auto max-w-md px-4 text-center">
          <h1 className="text-2xl font-semibold text-balance">Thank you for your registration!</h1>
          <p className="mt-2 text-muted-foreground">Your payment was received successfully. See you on the pitch.</p>
          <div className="mt-6 flex justify-center">
            <Button asChild>
              <Link href="/">Back to Registration</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
