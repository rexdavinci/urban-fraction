// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { HomeUnits$Type } from "./HomeUnits";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["HomeUnits"]: HomeUnits$Type;
    ["contracts/HomeUnits.sol:HomeUnits"]: HomeUnits$Type;
  }

  interface ContractTypesMap {
    ["HomeUnits"]: GetContractReturnType<HomeUnits$Type["abi"]>;
    ["contracts/HomeUnits.sol:HomeUnits"]: GetContractReturnType<HomeUnits$Type["abi"]>;
  }
}
