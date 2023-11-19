# Greenspark Task

clone repo then run `pnpm i` then `pnpm run dev` to start.

Add your own .env file with the following variables:

```
API_URL="https://api.mocki.io/v2/016d11e8"
```

## My Approach

I've used a Next.js 13 project in combination with Tailwind as my CSS framework and ShadCN Components for various components.

I have intentionally not made it pixel-perfect as I wanted to focus on the functionality and responsiveness of the app.

I have used Next Actions for communcation with the server.

I have also used Zustand as a Redux alternative for state management (for Active Badge).

## Deployed Version

To check out a live version of the app, please visit: https://greenspark.jaypinion.com/

### Storybook

For front-end components, I have used Storybook to develop and test components in isolation. To view the storybook, run `pnpm run storybook` and visit http://localhost:6006/

## Notes

### Tooltip

I have intentionally used a tooltip, instead of a popover, for the info icon for "Link to Public Profile", as the UI designs show a tooltip that is triggered on hover. Therefore, it does not work on mobile properly.
