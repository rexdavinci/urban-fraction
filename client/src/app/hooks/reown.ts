import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { bsc, bscTestnet } from '@reown/appkit/networks'

// 1. Get projectId
const projectId = 'e8261894860f7ba678c6f264b4fd3b0b'

// 2. Set the networks
const networks = [bsc, bscTestnet] as [typeof bsc, typeof bscTestnet]

// 3. Create a metadata object - optional
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 4. Create a AppKit instance
export const mountAppKit = () => createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
});
