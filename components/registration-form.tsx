"use client"
import { useMemo } from "react"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import moment from "moment";

type FormValues = {
  fullName: string
  userId: string
  mobile: string
  email: string
  chashak: string
  dateAndTime: string
}

const CHASHAK_OPTIONS = ["Maratha Chashak 2025"]

export function RegistrationForm() {
  const generatedId = useMemo(() => {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
      return crypto.randomUUID()
    }
    // Fallback UUID-ish
    return Math.random().toString(36).slice(2) + "-" + Date.now().toString(36)
  }, [])

  const form = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      userId: generatedId,
      mobile: "",
      email: "",
      chashak: CHASHAK_OPTIONS[0],
      dateAndTime: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    mode: "onTouched",
  })

  const paymentLink = process.env.NEXT_PUBLIC_RAZORPAY_PAYMENT_LINK

  const onSubmit = (values: FormValues) => {
    if (!paymentLink) {
      alert("Payment link is not configured. Please set NEXT_PUBLIC_RAZORPAY_PAYMENT_LINK in Vars.")
      return
    }
    // Optionally you could append params to the hosted link if supported by your Razorpay setup
    window.location.href = paymentLink
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
        {/* Heading */}
        <div>
          <h2 className="text-lg font-medium">Player Details</h2>
          <p className="text-sm text-muted-foreground">Fill in your registration details below.</p>
        </div>

        {/* UserId (generated) */}
        <FormField
          control={form.control}
          name="userId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>UserId (auto)</FormLabel>
              <FormControl>
                <Input value={field.value} disabled readOnly />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          rules={{ required: "Full name is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Rohit Sharma" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Mobile Number */}
        <FormField
          control={form.control}
          name="mobile"
          rules={{
            required: "Mobile number is required",
            pattern: {
              value: /^\d{10}$/,
              message: "Enter a valid 10-digit mobile number",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input inputMode="numeric" placeholder="10-digit number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Chashak Name */}
        <FormField
          control={form.control}
          name="chashak"
          rules={{ required: "Please select a Chashak" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chashak Name</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Chashak" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CHASHAK_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Save and Pay */}
        <div className="pt-2">
          <Button
            type="submit"
            style={{ background: "#c7742c" }}
            className="w-full sm:w-auto"
            size="lg"
            // Accessible label for screen readers
            aria-label="Save details and proceed to payment"
          >
            Save and Pay
          </Button>
          <p className="mt-2 text-xs text-muted-foreground">
            You&apos;ll be redirected to a secure Razorpay page to complete payment.
          </p>
        </div>
      </form>
    </Form>
  )
}
