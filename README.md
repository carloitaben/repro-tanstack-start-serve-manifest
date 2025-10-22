I want to programmatically create routes based on data from a remote service, such as a CMS, using the same page template for every route.

Initially, I attempted this with virtual file routes:

```ts
const routes = ["/", "/foo", "/bar", "/baz"]

export const routes = rootRoute(
  "templates/root.tsx",
  routes.map((path) => route(path, "templates/page.tsx")),
)
```

but without the `verboseFileRoutes` option, the `createFileRoute` path argument gets replaced in an infinite loop (React Router v7 solves this problem by passing an unique `id` per route).

I am now trying to disable route generation and manually build the route tree. This approach works wonderfully during development but fails during builds with:
```
error during build:
[tanstack-start:start-manifest-plugin] Could not load tanstack-start-manifest:v (imported by node_modules/.pnpm/@tanstack+start-server-core@1.133.20/node_modules/@tanstack/start-server-core/dist/esm/loadVirtualModule.js): Cannot read properties of undefined (reading 'routes')
    at Object.handler (file:///Users/carlo/Desktop/repro-tanstack/node_modules/.pnpm/@tanstack+start-plugin-core@1.133.22_@tanstack+react-router@1.133.22_react-dom@19.2.0_react@1_nsfiuwlnjputsb7kmxgojrkhey/node_modules/@tanstack/start-plugin-core/dist/esm/start-manifest-plugin/plugin.js:59:66)
    at Object.handler (file:///Users/carlo/Desktop/repro-tanstack/node_modules/.pnpm/vite@7.1.11_@types+node@24.9.1_jiti@2.6.1_terser@5.44.0_tsx@4.20.6/node_modules/vite/dist/node/chunks/config.js:33962:13)
    at file:///Users/carlo/Desktop/repro-tanstack/node_modules/.pnpm/rollup@4.52.5/node_modules/rollup/dist/es/shared/node-entry.js:22426:40
    at async PluginDriver.hookFirstAndGetPlugin (file:///Users/carlo/Desktop/repro-tanstack/node_modules/.pnpm/rollup@4.52.5/node_modules/rollup/dist/es/shared/node-entry.js:22308:28)
    at async file:///Users/carlo/Desktop/repro-tanstack/node_modules/.pnpm/rollup@4.52.5/node_modules/rollup/dist/es/shared/node-entry.js:21308:33
    at async Queue.work (file:///Users/carlo/Desktop/repro-tanstack/node_modules/.pnpm/rollup@4.52.5/node_modules/rollup/dist/es/shared/node-entry.js:22536:32)
```
