// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { Pausable$Type } from "./Pausable";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["Pausable"]: Pausable$Type;
    ["@openzeppelin/contracts/utils/Pausable.sol:Pausable"]: Pausable$Type;
  }

  interface ContractTypesMap {
    ["Pausable"]: GetContractReturnType<Pausable$Type["abi"]>;
    ["@openzeppelin/contracts/utils/Pausable.sol:Pausable"]: GetContractReturnType<Pausable$Type["abi"]>;
  }
}
