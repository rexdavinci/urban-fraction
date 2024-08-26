/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace FractHome {
  export type HomeUnitStruct = {
    totalQty: BigNumberish;
    unitCost: BigNumberish;
    sold: BigNumberish;
    status: BigNumberish;
  };

  export type HomeUnitStructOutput = [
    totalQty: bigint,
    unitCost: bigint,
    sold: bigint,
    status: bigint
  ] & { totalQty: bigint; unitCost: bigint; sold: bigint; status: bigint };
}

export interface FractHomeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ADMIN"
      | "DEFAULT_ADMIN_ROLE"
      | "buyMultiUnits"
      | "buyUnits"
      | "company"
      | "delist"
      | "generateHome"
      | "generateHomes"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "home"
      | "homeUnits"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "onERC721Received"
      | "redeem"
      | "renounceRole"
      | "revokeRole"
      | "supportsInterface"
      | "viewHome"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Fractionized"
      | "MultiFractionized"
      | "MultiTycoon"
      | "Redeem"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "Tycoon"
  ): EventFragment;

  encodeFunctionData(functionFragment: "ADMIN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyMultiUnits",
    values: [AddressLike, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "buyUnits",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "company", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "delist",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "generateHome",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "generateHomes",
    values: [BigNumberish[], BigNumberish[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "home", values?: undefined): string;
  encodeFunctionData(functionFragment: "homeUnits", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "viewHome",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyMultiUnits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyUnits", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "company", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delist", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "generateHome",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateHomes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "home", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "homeUnits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "viewHome", data: BytesLike): Result;
}

export namespace FractionizedEvent {
  export type InputTuple = [
    home: BigNumberish,
    units: BigNumberish,
    costPerUnit: BigNumberish
  ];
  export type OutputTuple = [home: bigint, units: bigint, costPerUnit: bigint];
  export interface OutputObject {
    home: bigint;
    units: bigint;
    costPerUnit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MultiFractionizedEvent {
  export type InputTuple = [
    homes: BigNumberish[],
    units: BigNumberish[],
    costPerUnits: BigNumberish[]
  ];
  export type OutputTuple = [
    homes: bigint[],
    units: bigint[],
    costPerUnits: bigint[]
  ];
  export interface OutputObject {
    homes: bigint[];
    units: bigint[];
    costPerUnits: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MultiTycoonEvent {
  export type InputTuple = [homes: BigNumberish[], units: BigNumberish[]];
  export type OutputTuple = [homes: bigint[], units: bigint[]];
  export interface OutputObject {
    homes: bigint[];
    units: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RedeemEvent {
  export type InputTuple = [home: BigNumberish, units: BigNumberish];
  export type OutputTuple = [home: bigint, units: bigint];
  export interface OutputObject {
    home: bigint;
    units: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TycoonEvent {
  export type InputTuple = [home: BigNumberish, units: BigNumberish];
  export type OutputTuple = [home: bigint, units: bigint];
  export interface OutputObject {
    home: bigint;
    units: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface FractHome extends BaseContract {
  connect(runner?: ContractRunner | null): FractHome;
  waitForDeployment(): Promise<this>;

  interface: FractHomeInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  ADMIN: TypedContractMethod<[], [string], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  buyMultiUnits: TypedContractMethod<
    [buyer: AddressLike, homeIds: BigNumberish[], units: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  buyUnits: TypedContractMethod<
    [buyer: AddressLike, homeId: BigNumberish, units: BigNumberish],
    [void],
    "nonpayable"
  >;

  company: TypedContractMethod<[], [string], "view">;

  delist: TypedContractMethod<[homeId: BigNumberish], [void], "nonpayable">;

  generateHome: TypedContractMethod<
    [totalRooms: BigNumberish, costPerUnit: BigNumberish, uri: string],
    [void],
    "nonpayable"
  >;

  generateHomes: TypedContractMethod<
    [totalRooms: BigNumberish[], costPerUnit: BigNumberish[], uri: string[]],
    [void],
    "nonpayable"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  home: TypedContractMethod<[], [string], "view">;

  homeUnits: TypedContractMethod<[], [string], "view">;

  onERC1155BatchReceived: TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  onERC1155Received: TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  onERC721Received: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;

  redeem: TypedContractMethod<
    [homeId: BigNumberish, units: BigNumberish],
    [void],
    "nonpayable"
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  viewHome: TypedContractMethod<
    [homeId: BigNumberish],
    [FractHome.HomeUnitStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ADMIN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "buyMultiUnits"
  ): TypedContractMethod<
    [buyer: AddressLike, homeIds: BigNumberish[], units: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "buyUnits"
  ): TypedContractMethod<
    [buyer: AddressLike, homeId: BigNumberish, units: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "company"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "delist"
  ): TypedContractMethod<[homeId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "generateHome"
  ): TypedContractMethod<
    [totalRooms: BigNumberish, costPerUnit: BigNumberish, uri: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "generateHomes"
  ): TypedContractMethod<
    [totalRooms: BigNumberish[], costPerUnit: BigNumberish[], uri: string[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "home"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "homeUnits"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "onERC1155BatchReceived"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC1155Received"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC721Received"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "redeem"
  ): TypedContractMethod<
    [homeId: BigNumberish, units: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "viewHome"
  ): TypedContractMethod<
    [homeId: BigNumberish],
    [FractHome.HomeUnitStructOutput],
    "view"
  >;

  getEvent(
    key: "Fractionized"
  ): TypedContractEvent<
    FractionizedEvent.InputTuple,
    FractionizedEvent.OutputTuple,
    FractionizedEvent.OutputObject
  >;
  getEvent(
    key: "MultiFractionized"
  ): TypedContractEvent<
    MultiFractionizedEvent.InputTuple,
    MultiFractionizedEvent.OutputTuple,
    MultiFractionizedEvent.OutputObject
  >;
  getEvent(
    key: "MultiTycoon"
  ): TypedContractEvent<
    MultiTycoonEvent.InputTuple,
    MultiTycoonEvent.OutputTuple,
    MultiTycoonEvent.OutputObject
  >;
  getEvent(
    key: "Redeem"
  ): TypedContractEvent<
    RedeemEvent.InputTuple,
    RedeemEvent.OutputTuple,
    RedeemEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "Tycoon"
  ): TypedContractEvent<
    TycoonEvent.InputTuple,
    TycoonEvent.OutputTuple,
    TycoonEvent.OutputObject
  >;

  filters: {
    "Fractionized(uint256,uint256,uint256)": TypedContractEvent<
      FractionizedEvent.InputTuple,
      FractionizedEvent.OutputTuple,
      FractionizedEvent.OutputObject
    >;
    Fractionized: TypedContractEvent<
      FractionizedEvent.InputTuple,
      FractionizedEvent.OutputTuple,
      FractionizedEvent.OutputObject
    >;

    "MultiFractionized(uint256[],uint256[],uint256[])": TypedContractEvent<
      MultiFractionizedEvent.InputTuple,
      MultiFractionizedEvent.OutputTuple,
      MultiFractionizedEvent.OutputObject
    >;
    MultiFractionized: TypedContractEvent<
      MultiFractionizedEvent.InputTuple,
      MultiFractionizedEvent.OutputTuple,
      MultiFractionizedEvent.OutputObject
    >;

    "MultiTycoon(uint256[],uint256[])": TypedContractEvent<
      MultiTycoonEvent.InputTuple,
      MultiTycoonEvent.OutputTuple,
      MultiTycoonEvent.OutputObject
    >;
    MultiTycoon: TypedContractEvent<
      MultiTycoonEvent.InputTuple,
      MultiTycoonEvent.OutputTuple,
      MultiTycoonEvent.OutputObject
    >;

    "Redeem(uint256,uint256)": TypedContractEvent<
      RedeemEvent.InputTuple,
      RedeemEvent.OutputTuple,
      RedeemEvent.OutputObject
    >;
    Redeem: TypedContractEvent<
      RedeemEvent.InputTuple,
      RedeemEvent.OutputTuple,
      RedeemEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "Tycoon(uint256,uint256)": TypedContractEvent<
      TycoonEvent.InputTuple,
      TycoonEvent.OutputTuple,
      TycoonEvent.OutputObject
    >;
    Tycoon: TypedContractEvent<
      TycoonEvent.InputTuple,
      TycoonEvent.OutputTuple,
      TycoonEvent.OutputObject
    >;
  };
}
