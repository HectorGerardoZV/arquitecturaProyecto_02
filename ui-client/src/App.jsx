import RouterApp from "./router/RouterApp"

import { AuthProvider } from "./context/AuthProvider"

function App() {

  return (
    <AuthProvider>
      <RouterApp />
    </AuthProvider>
  )
}

export default App
