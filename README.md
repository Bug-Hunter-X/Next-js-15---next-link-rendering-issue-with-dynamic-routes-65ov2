# Next.js 15 - next/link rendering issue with dynamic routes

This repository demonstrates a bug encountered in Next.js 15 concerning the `next/link` component when used within components incorporating dynamic routing.  The issue manifests as inconsistent or incorrect rendering of links following route transitions.  The bug is demonstrated in `bug.js` and a potential solution is shown in `bugSolution.js`

## Steps to Reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Observe the unexpected behavior of the links after navigating between routes.

## Potential Solution

A possible solution is provided in `bugSolution.js`, which involves using a more robust method for handling route changes and updating links.   This may involve using a state management library, or employing techniques which force a re-render when route changes occur.
