import RouterApp from "./router/RouterApp"

//Providers
import { AuthProvider } from "./context/AuthProvider"
import { SensorsProvider } from "./context/SensorsProvider"
import { AlarmsProvider } from "./context/AlarmsProvider"

function App() {

  return (
    <AuthProvider>
      <SensorsProvider>
        <AlarmsProvider>
          <RouterApp />
        </AlarmsProvider>
      </SensorsProvider>
    </AuthProvider>
  )
}

export default App
