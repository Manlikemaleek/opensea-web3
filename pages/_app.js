import '../styles/globals.css'
import {Thirdweb3Provider} from '@3rdweb/hooks'

const supportedChainIds = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
  <Thirdweb3Provider
  supportedChainIds={supportedChainIds}
  connectors={connectors}
  >
 <Component {...pageProps} />
  
  </Thirdweb3Provider>
  )
}

export default MyApp
