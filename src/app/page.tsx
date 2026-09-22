import { CalendarCheck, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import ChatWidget from "@/components/ChatWidget";
import { BUSINESS } from "@/lib/business";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <Sparkles size={18} />
            </span>
            {BUSINESS.name}
          </span>
          <span className="hidden items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-medium text-emerald-700 sm:flex">
            <MessageCircle size={14} /> AI assistant demo
          </span>
        </nav>
      </header>

      <main>
        <section className="bg-gradient-to-b from-emerald-50 via-white to-white">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-800">
              <Sparkles size={14} /> AI added to an existing site
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Ask ClearSpace anything, get an instant answer
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
              This is a live demo of an AI support assistant grounded in ClearSpace&apos;s
              real services, pricing, and policies. It never invents prices or promises,
              it just answers from what the business actually offers.
            </p>
            <p className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-emerald-700">
              <MessageCircle size={16} /> Try the chat bubble in the bottom right
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-900">Why add an AI assistant?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-100 p-6">
              <CalendarCheck className="text-emerald-600" size={22} />
              <h3 className="mt-3 font-semibold text-slate-900">Answers after hours</h3>
              <p className="mt-1 text-sm text-slate-600">
                Customers get pricing and policy answers at 11pm, not just during office hours.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 p-6">
              <ShieldCheck className="text-emerald-600" size={22} />
              <h3 className="mt-3 font-semibold text-slate-900">Grounded, not guessing</h3>
              <p className="mt-1 text-sm text-slate-600">
                The assistant only knows what the business tells it. No invented prices or availability.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 p-6">
              <Sparkles className="text-emerald-600" size={22} />
              <h3 className="mt-3 font-semibold text-slate-900">Drops into any site</h3>
              <p className="mt-1 text-sm text-slate-600">
                One floating widget and an API route. It layers onto an existing site without a rebuild.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-slate-50 py-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900">Try asking</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "How much is a deep clean?",
                "Are you open on Sundays?",
                "Do you clean move-out apartments?",
                "What's your cancellation policy?",
              ].map((q) => (
                <li key={q} className="rounded-lg bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                  &ldquo;{q}&rdquo;
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} {BUSINESS.name}. Concept project, demo only.
      </footer>

      <ChatWidget />
    </>
  );
}
