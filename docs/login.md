# Login

Planned authentication for Messy App (documentation only — not implemented yet).

## Goal

Let a user identify themselves before using the app, instead of always running as a guest.

## Behavior

1. Prompt for a username (no password in the first version).
2. Pass that name into `welcome()` so the greeting uses the logged-in user.
3. If login is skipped or empty, keep the existing guest fallback.

## Out of scope (for now)

- Passwords, sessions, or tokens
- External identity providers
- HTTP / Express routes

## Acceptance

- Docs describe the flow above
- App behavior unchanged until a follow-up implements login
