import { RegistrationForm } from "@/components/registration-form"

export default function Page() {
  return (
    <main className="min-h-dvh">
      {/* Hero */}
      <section style={{backgroundColor: "#c7742c"}} className="text-primary-foreground">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:py-12">
          <div style={{display: "flex"}}> 
              <h1 className="text-balance text-3xl font-semibold sm:text-4xl">Maratha Chashak Association</h1> 
              <svg style={{width:"15%", marginTop: "-4%"}} viewBox="-3.6 -3.6 43.20 43.20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000" stroke="#000000" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#D99E82" d="M35.538 26.679s1.328 2.214-2.658 6.201c-3.987 3.986-6.201 2.658-6.201 2.658L7.185 16.046s.977-2.748 3.544-5.316c2.568-2.567 5.316-3.544 5.316-3.544l19.493 19.493z"></path><path fill="#C1694F" d="M13.388 9.844c.979.979 4.522 6.109 3.544 7.088c-.979.978-6.109-2.565-7.088-3.544l-8.86-8.86A2.507 2.507 0 0 1 4.528.984l8.86 8.86z"></path><path fill="#292F33" d="M.983 4.528L4.528.984L9.844 6.3L6.3 9.844z"></path><circle fill="#BE1931" cx="19" cy="31" r="5"></circle><path fill="#662113" d="M19 36a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1z"></path></g></svg>
          </div>
          <p className="text-pretty text-sm/6 opacity-90">Player Registration</p>
        </div>
      </section>

      {/* Form */}
      <section>
        <div className="mx-auto max-w-2xl px-4 py-6 sm:py-8">
          <div className="rounded-lg border bg-card p-4 sm:p-6">
            <RegistrationForm />
          </div>
        </div>
      </section>
    </main>
  )
}
