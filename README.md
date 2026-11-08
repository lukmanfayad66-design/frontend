# frontend

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-s7nrfeou)

## Authentication setup

The frontend connects to the StrongHaul FastAPI backend. Copy `.env.local.example` to `.env.local` and set `NEXT_PUBLIC_API_URL` to the backend origin. The local default is `http://localhost:8000`.

Run the backend from its workspace using its README instructions, then run this app with `npm run dev`. The backend must allow the exact frontend origin in `CORS_ORIGINS` and use a same-site deployment for its `SameSite=Strict` refresh and CSRF cookies. Do not put backend secrets in `NEXT_PUBLIC_*` variables.

Access tokens are kept in memory; the backend refresh cookie is HttpOnly. Registration and login are connected, but email verification, password reset and marketplace listing/booking APIs are not implemented by this auth flow.
