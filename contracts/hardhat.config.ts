import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: 'localhost',
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      },
    },
  },
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545'
    }
  },
};

export default config;
