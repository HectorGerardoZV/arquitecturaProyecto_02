import RouterApp from "./router/RouterApp"

//Providers
import { AuthProvider } from "./context/AuthProvider"
import { SensorsProvider } from "./context/SensorsProvider"
import { AlarmsProvider } from "./context/AlarmsProvider"
import { SensosProvider } from "./context/SensosProvider"

function App() {

  return (
    <AuthProvider>
      <SensorsProvider>
        <AlarmsProvider>
          <SensosProvider>
            <RouterApp />
          </SensosProvider>
        </AlarmsProvider>
      </SensorsProvider>
    </AuthProvider>
  )
}

export default App
