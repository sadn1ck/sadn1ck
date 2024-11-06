---
title: Modeling UI interactions with XState
desc: A short blog post on how to model simple UI interactions with XState
date: 2024-02-03
tags: ["xstate", "ui", "state modeling"]
---

We've recently started using [XState](https://stately.ai/docs) at work for separating business logic from the UI.

Modeling UI interactions with it which previously relied on bits and pieces of scattered state is now a lot simpler.

Consider a simple interaction for an element with the following spec:

- On initial page load, the element is visible
- After 3 seconds, the element disappears
- Any time after that, if the element is hovered by the user, we show the element
  - When hover ends, we again delay hiding it for 3 seconds, similar to initial load

<video autoplay playsinline muted controls  width="100%">
  <source src="/images/xstate-1.mp4" type="video/mp4">></source>
</video>

## Breakdown

A nice little interaction for showing that extra controls exist but keeping them out of view. Based on the problem, there are certain events after which the element is shown:

- Initially on page load
- When hovered
- The 3 second delay after hover exit

And certain events after which the element is hidden:

- 3 seconds after initial page load if it wasn't hovered again
- 3 seconds after hover exit

With this, we can define a few states and their related events (this will be the outline of our XState state machine!)

1. `initial`
   - on hover enter -> show
   - after 3s -> hide
2. `show`
   - on hover enter -> stay in show
   - on hover exit -> delay
3. `delay`
   - on hover enter -> show
   - after 3s -> hide
4. `hide`
   - on hover enter -> show

How will our machine look like?

```typescript
import { setup } from "xstate";

const Tags = {
  SHOULD_SHOW: "machine.shouldShow",
} as const;

type Events =
  | {
      type: "HOVER_ENTER";
    }
  | {
      type: "HOVER_LEAVE";
    };

const hoverMachine = setup({
  actions: {},
  types: {
    events: {} as Events,
  },
}).createMachine({
  initial: "initial",
  states: {
    initial: {
      tags: [Tags.SHOULD_SHOW],
      on: {
        HOVER_LEAVE: {
          target: "delay",
        },
        HOVER_ENTER: {
          target: "show",
        },
      },
      after: {
        3000: "hide",
      },
    },
    show: {
      tags: [Tags.SHOULD_SHOW],
      on: {
        HOVER_LEAVE: {
          target: "delay",
        },
        HOVER_ENTER: {
          target: "show",
        },
      },
    },
    delay: {
      tags: [Tags.SHOULD_SHOW],
      after: {
        3000: {
          target: "hide",
        },
      },
      on: {
        HOVER_ENTER: {
          target: "show",
        },
      },
    },
    hide: {
      on: {
        HOVER_ENTER: {
          target: "show",
        },
      },
    },
  },
});

export { hoverMachine };
```

This is a simple state machine (which is very similar to our event based description that we made).

## State descriptions

There's an initial state called `initial` (hah), which transitions to `hide` after 3 seconds in case there is no `HOVER_ENTER`/`HOVER_LEAVE` event.

If there is a `HOVER_ENTER` event, it transitions to `show`. From there it can go to delay after `HOVER_LEAVE`.

From delay, it can go to `hide` after 3 seconds, or back to `show` if there is a `HOVER_ENTER` event.

Finally from `hide`, it can go back to `show` if there is a `HOVER_ENTER` event.

You'll notice some of these states are tagged with `Tags.SHOULD_SHOW`. This marks those states as having a tag, which we use for the show state in our UI! Remember how we found out which states/events should show the element based on the problem? This tag helps us realise that.

The UI code (it's React sorry) 🙏

```tsx
import { useActor } from "@xstate/react";
import { Tags, hoverMachine } from "./machine";

function App() {
  const [state, send] = useActor(hoverMachine);
  const shouldShow = state.hasTag(Tags.SHOULD_SHOW);
  return (
    <>
      <main
        className="..."
        onPointerEnter={() => {
          send({ type: "HOVER_ENTER" });
        }}
        onPointerLeave={() => {
          send({ type: "HOVER_LEAVE" });
        }}
      >
        <div className="...">
          <h1 className="...">
            Should show element: {shouldShow ? "yes" : "no"}
          </h1>
          <span>State machine state: {state.value}</span>
        </div>
      </main>
    </>
  );
}
```

The best part about state machines, you've avoided a lot of if-else soup. No need to wrestle with timers and their ids in UI. (No `useEffect` as well 👀)

You don't need to worry about your UI logic leaking into your business logic. You can completely decouple the two.

### Sandbox

<iframe src="https://stackblitz.com/edit/vitejs-vite-tqbjy7?ctl=1&embed=1&file=src%2Fmachine.ts&hideNavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="Modeling Interactions w/ XState" loading="lazy"></iframe>

References:

- [XState](https://stately.ai/docs/)
- [Core concepts](https://stately.ai/docs/state-machines-and-statecharts)

Feel free to contact me on [Bluesky](https://bsky.app/profile/anikd.com) for any questions or feedback, or if you find any mistakes in this. I'd love to hear from you!
