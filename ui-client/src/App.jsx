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
            {/*This is the application component*/}
            <RouterApp />
            {/*This is the application component*/}
          </SensosProvider>
        </AlarmsProvider>
      </SensorsProvider>
    </AuthProvider>
  )
}

export default App
