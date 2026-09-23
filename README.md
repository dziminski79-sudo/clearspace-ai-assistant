# ClearSpace AI Assistant

A live AI support chat widget grounded in one business's own services,
pricing, and policies. Concept project built to demonstrate adding AI to an
existing site (not a real client project).

## The problem

A contact form or FAQ page cannot answer a specific question at 11pm on a
Sunday. Customers who want to know "how much is a deep clean" or "are you
open Sundays" either wait until business hours or give up and call a
competitor.

## The solution

A floating chat widget answers instantly, using only the business's real
services, prices, hours, and policies as its source of truth. It is
deliberately restricted: it will not invent a price that is not listed, will
not promise a specific appointment time, and declines questions unrelated to
the business. This is the same pattern used for real client work: a small,
well-scoped assistant beats a general-purpose chatbot that might say
something the business never agreed to.

## How it works

```
Browser (ChatWidget) -> POST /api/chat -> Gemini API (with a system prompt
built from the business's own service list, hours, and policies) -> reply
```

The business's information lives in one file (`src/lib/business.ts`).
Changing prices or hours there changes what the assistant says, with no
prompt engineering required elsewhere.

## Tech stack

Next.js (App Router, Route Handlers), TypeScript, Tailwind CSS, the
Google Gemini API.

## Run it yourself

1. Copy `.env.example` to `.env.local` and add your own `GEMINI_API_KEY`
   from [aistudio.google.com](https://aistudio.google.com/apikey) (free tier available).
2. `npm install` then `npm run dev`.
3. Without a key, the widget still loads and shows a clear "not configured
   yet" message instead of crashing, so the UI can be reviewed on its own.

## Possible next steps

Streaming responses token by token, a handoff to a real human via email
when the assistant cannot answer, and reusing the same widget across the
other portfolio sites (it is one component and one API route).
