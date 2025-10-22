import root from "./routes/root"
import page from "./routes/page"

console.log("Fetching routes from some external source")

await new Promise((resolve) => setTimeout(resolve, 2_000))

const routes = ["/", "/foo", "/bar", "/baz"]

export const routeTree = root.addChildren(routes.map((path) => page(path)))
