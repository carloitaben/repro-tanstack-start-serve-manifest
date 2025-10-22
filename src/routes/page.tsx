import { createRoute } from "@tanstack/react-router"
import root from "./root"

export default (path: string) =>
  createRoute({
    getParentRoute: () => root,
    path,
    component: Component,
  })

function Component() {
  return (
    <div>
      <h3>Welcome Home!!!</h3>
    </div>
  )
}
