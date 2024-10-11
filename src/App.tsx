import { StartInvestingNow } from "./components/sections/StartInvestingNow"
import { Hero } from "./components/sections/Hero"
import { RiseLayout } from "./components/shared/RiseLayout"
import { AssetClasses } from "./components/sections/AssetClasses"

function App() {
 

  return (
    <RiseLayout>
      <div className="container mx-auto max-w-6xl">
         <Hero />
         <StartInvestingNow />
         <AssetClasses />
      </div>
    </RiseLayout>
  )
}

export default App
