// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { IERC1155Receiver$Type } from "./IERC1155Receiver";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["IERC1155Receiver"]: IERC1155Receiver$Type;
    ["@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol:IERC1155Receiver"]: IERC1155Receiver$Type;
  }

  interface ContractTypesMap {
    ["IERC1155Receiver"]: GetContractReturnType<IERC1155Receiver$Type["abi"]>;
    ["@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol:IERC1155Receiver"]: GetContractReturnType<IERC1155Receiver$Type["abi"]>;
  }
}
