import { StartInvestingNow } from "./components/sections/StartInvestingNow"
import { Hero } from "./components/sections/Hero"
import { RiseLayout } from "./components/shared/RiseLayout"
import { AssetClasses } from "./components/sections/AssetClasses"
import { WeAreRegulated } from "./components/sections/WeAreRegulated"
import { DownloadRiseApp } from "./components/sections/DownloadRiseApp"
import { JoinRiseCommunity } from "./components/sections/JoinRiseCommunity"

function App() {


  return (
    <RiseLayout>
      <section className="container mx-auto max-w-6xl px-4 md:px-8">
        <Hero />
        <StartInvestingNow />
        <AssetClasses />
      </section>
      <WeAreRegulated />
      <section className="container mx-auto max-w-6xl px-4">
        <JoinRiseCommunity />
        <DownloadRiseApp />
      </section>
    </RiseLayout>
  )
}

export default App
