// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AncillaryDataUpdated extends ethereum.Event {
  get params(): AncillaryDataUpdated__Params {
    return new AncillaryDataUpdated__Params(this);
  }
}

export class AncillaryDataUpdated__Params {
  _event: AncillaryDataUpdated;

  constructor(event: AncillaryDataUpdated) {
    this._event = event;
  }

  get questionID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get update(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class NewAdmin extends ethereum.Event {
  get params(): NewAdmin__Params {
    return new NewAdmin__Params(this);
  }
}

export class NewAdmin__Params {
  _event: NewAdmin;

  constructor(event: NewAdmin) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdminAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class QuestionEmergencyResolved extends ethereum.Event {
  get params(): QuestionEmergencyResolved__Params {
    return new QuestionEmergencyResolved__Params(this);
  }
}

export class QuestionEmergencyResolved__Params {
  _event: QuestionEmergencyResolved;

  constructor(event: QuestionEmergencyResolved) {
    this._event = event;
  }

  get questionID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get payouts(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }
}

export class QuestionFlagged extends ethereum.Event {
  get params(): QuestionFlagged__Params {
    return new QuestionFlagged__Params(this);
  }
}

export class QuestionFlagged__Params {
  _event: QuestionFlagged;

  constructor(event: QuestionFlagged) {
    this._event = event;
  }

  get questionID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class QuestionInitialized extends ethereum.Event {
  get params(): QuestionInitialized__Params {
    return new QuestionInitialized__Params(this);
  }
}

export class QuestionInitialized__Params {
  _event: QuestionInitialized;

  constructor(event: QuestionInitialized) {
    this._event = event;
  }

  get questionID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get requestTimestamp(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ancillaryData(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get rewardToken(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get reward(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get proposalBond(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class QuestionPaused extends ethereum.Event {
  get params(): QuestionPaused__Params {
    return new QuestionPaused__Params(this);
  }
}

export class QuestionPaused__Params {
  _event: QuestionPaused;

  constructor(event: QuestionPaused) {
    this._event = event;
  }

  get questionID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class QuestionReset extends ethereum.Event {
  get params(): QuestionReset__Params {
    return new QuestionReset__Params(this);
  }
}

export class QuestionReset__Params {
  _event: QuestionReset;

  constructor(event: QuestionReset) {
    this._event = event;
  }

  get questionID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class QuestionResolved extends ethereum.Event {
  get params(): QuestionResolved__Params {
    return new QuestionResolved__Params(this);
  }
}

export class QuestionResolved__Params {
  _event: QuestionResolved;

  constructor(event: QuestionResolved) {
    this._event = event;
  }

  get questionID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get settledPrice(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get payouts(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }
}

export class QuestionUnpaused extends ethereum.Event {
  get params(): QuestionUnpaused__Params {
    return new QuestionUnpaused__Params(this);
  }
}

export class QuestionUnpaused__Params {
  _event: QuestionUnpaused;

  constructor(event: QuestionUnpaused) {
    this._event = event;
  }

  get questionID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class RemovedAdmin extends ethereum.Event {
  get params(): RemovedAdmin__Params {
    return new RemovedAdmin__Params(this);
  }
}

export class RemovedAdmin__Params {
  _event: RemovedAdmin;

  constructor(event: RemovedAdmin) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get removedAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class UmaCtfAdapter__getLatestUpdateResultValue0Struct extends ethereum.Tuple {
  get timestamp(): BigInt {
    return this[0].toBigInt();
  }

  get update(): Bytes {
    return this[1].toBytes();
  }
}

export class UmaCtfAdapter__getQuestionResultValue0Struct extends ethereum.Tuple {
  get requestTimestamp(): BigInt {
    return this[0].toBigInt();
  }

  get reward(): BigInt {
    return this[1].toBigInt();
  }

  get proposalBond(): BigInt {
    return this[2].toBigInt();
  }

  get emergencyResolutionTimestamp(): BigInt {
    return this[3].toBigInt();
  }

  get resolved(): boolean {
    return this[4].toBoolean();
  }

  get paused(): boolean {
    return this[5].toBoolean();
  }

  get reset(): boolean {
    return this[6].toBoolean();
  }

  get rewardToken(): Address {
    return this[7].toAddress();
  }

  get creator(): Address {
    return this[8].toAddress();
  }

  get ancillaryData(): Bytes {
    return this[9].toBytes();
  }
}

export class UmaCtfAdapter__getUpdatesResultValue0Struct extends ethereum.Tuple {
  get timestamp(): BigInt {
    return this[0].toBigInt();
  }

  get update(): Bytes {
    return this[1].toBytes();
  }
}

export class UmaCtfAdapter__questionsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: boolean;
  value5: boolean;
  value6: boolean;
  value7: Address;
  value8: Address;
  value9: Bytes;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: boolean,
    value5: boolean,
    value6: boolean,
    value7: Address,
    value8: Address,
    value9: Bytes
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    map.set("value8", ethereum.Value.fromAddress(this.value8));
    map.set("value9", ethereum.Value.fromBytes(this.value9));
    return map;
  }

  getRequestTimestamp(): BigInt {
    return this.value0;
  }

  getReward(): BigInt {
    return this.value1;
  }

  getProposalBond(): BigInt {
    return this.value2;
  }

  getEmergencyResolutionTimestamp(): BigInt {
    return this.value3;
  }

  getResolved(): boolean {
    return this.value4;
  }

  getPaused(): boolean {
    return this.value5;
  }

  getReset(): boolean {
    return this.value6;
  }

  getRewardToken(): Address {
    return this.value7;
  }

  getCreator(): Address {
    return this.value8;
  }

  getAncillaryData(): Bytes {
    return this.value9;
  }
}

export class UmaCtfAdapter__updatesResult {
  value0: BigInt;
  value1: Bytes;

  constructor(value0: BigInt, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }

  getTimestamp(): BigInt {
    return this.value0;
  }

  getUpdate(): Bytes {
    return this.value1;
  }
}

export class UmaCtfAdapter extends ethereum.SmartContract {
  static bind(address: Address): UmaCtfAdapter {
    return new UmaCtfAdapter("UmaCtfAdapter", address);
  }

  admins(param0: Address): BigInt {
    let result = super.call("admins", "admins(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_admins(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("admins", "admins(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  collateralWhitelist(): Address {
    let result = super.call(
      "collateralWhitelist",
      "collateralWhitelist():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_collateralWhitelist(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "collateralWhitelist",
      "collateralWhitelist():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ctf(): Address {
    let result = super.call("ctf", "ctf():(address)", []);

    return result[0].toAddress();
  }

  try_ctf(): ethereum.CallResult<Address> {
    let result = super.tryCall("ctf", "ctf():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  emergencySafetyPeriod(): BigInt {
    let result = super.call(
      "emergencySafetyPeriod",
      "emergencySafetyPeriod():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_emergencySafetyPeriod(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "emergencySafetyPeriod",
      "emergencySafetyPeriod():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getExpectedPayouts(questionID: Bytes): Array<BigInt> {
    let result = super.call(
      "getExpectedPayouts",
      "getExpectedPayouts(bytes32):(uint256[])",
      [ethereum.Value.fromFixedBytes(questionID)]
    );

    return result[0].toBigIntArray();
  }

  try_getExpectedPayouts(
    questionID: Bytes
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getExpectedPayouts",
      "getExpectedPayouts(bytes32):(uint256[])",
      [ethereum.Value.fromFixedBytes(questionID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getLatestUpdate(
    questionID: Bytes,
    owner: Address
  ): UmaCtfAdapter__getLatestUpdateResultValue0Struct {
    let result = super.call(
      "getLatestUpdate",
      "getLatestUpdate(bytes32,address):((uint256,bytes))",
      [
        ethereum.Value.fromFixedBytes(questionID),
        ethereum.Value.fromAddress(owner)
      ]
    );

    return changetype<UmaCtfAdapter__getLatestUpdateResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getLatestUpdate(
    questionID: Bytes,
    owner: Address
  ): ethereum.CallResult<UmaCtfAdapter__getLatestUpdateResultValue0Struct> {
    let result = super.tryCall(
      "getLatestUpdate",
      "getLatestUpdate(bytes32,address):((uint256,bytes))",
      [
        ethereum.Value.fromFixedBytes(questionID),
        ethereum.Value.fromAddress(owner)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<UmaCtfAdapter__getLatestUpdateResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getQuestion(questionID: Bytes): UmaCtfAdapter__getQuestionResultValue0Struct {
    let result = super.call(
      "getQuestion",
      "getQuestion(bytes32):((uint256,uint256,uint256,uint256,bool,bool,bool,address,address,bytes))",
      [ethereum.Value.fromFixedBytes(questionID)]
    );

    return changetype<UmaCtfAdapter__getQuestionResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getQuestion(
    questionID: Bytes
  ): ethereum.CallResult<UmaCtfAdapter__getQuestionResultValue0Struct> {
    let result = super.tryCall(
      "getQuestion",
      "getQuestion(bytes32):((uint256,uint256,uint256,uint256,bool,bool,bool,address,address,bytes))",
      [ethereum.Value.fromFixedBytes(questionID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<UmaCtfAdapter__getQuestionResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getUpdates(
    questionID: Bytes,
    owner: Address
  ): Array<UmaCtfAdapter__getUpdatesResultValue0Struct> {
    let result = super.call(
      "getUpdates",
      "getUpdates(bytes32,address):((uint256,bytes)[])",
      [
        ethereum.Value.fromFixedBytes(questionID),
        ethereum.Value.fromAddress(owner)
      ]
    );

    return result[0].toTupleArray<
      UmaCtfAdapter__getUpdatesResultValue0Struct
    >();
  }

  try_getUpdates(
    questionID: Bytes,
    owner: Address
  ): ethereum.CallResult<Array<UmaCtfAdapter__getUpdatesResultValue0Struct>> {
    let result = super.tryCall(
      "getUpdates",
      "getUpdates(bytes32,address):((uint256,bytes)[])",
      [
        ethereum.Value.fromFixedBytes(questionID),
        ethereum.Value.fromAddress(owner)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<UmaCtfAdapter__getUpdatesResultValue0Struct>()
    );
  }

  initialize(
    ancillaryData: Bytes,
    rewardToken: Address,
    reward: BigInt,
    proposalBond: BigInt
  ): Bytes {
    let result = super.call(
      "initialize",
      "initialize(bytes,address,uint256,uint256):(bytes32)",
      [
        ethereum.Value.fromBytes(ancillaryData),
        ethereum.Value.fromAddress(rewardToken),
        ethereum.Value.fromUnsignedBigInt(reward),
        ethereum.Value.fromUnsignedBigInt(proposalBond)
      ]
    );

    return result[0].toBytes();
  }

  try_initialize(
    ancillaryData: Bytes,
    rewardToken: Address,
    reward: BigInt,
    proposalBond: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "initialize",
      "initialize(bytes,address,uint256,uint256):(bytes32)",
      [
        ethereum.Value.fromBytes(ancillaryData),
        ethereum.Value.fromAddress(rewardToken),
        ethereum.Value.fromUnsignedBigInt(reward),
        ethereum.Value.fromUnsignedBigInt(proposalBond)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  isAdmin(addr: Address): boolean {
    let result = super.call("isAdmin", "isAdmin(address):(bool)", [
      ethereum.Value.fromAddress(addr)
    ]);

    return result[0].toBoolean();
  }

  try_isAdmin(addr: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isAdmin", "isAdmin(address):(bool)", [
      ethereum.Value.fromAddress(addr)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isFlagged(questionID: Bytes): boolean {
    let result = super.call("isFlagged", "isFlagged(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(questionID)
    ]);

    return result[0].toBoolean();
  }

  try_isFlagged(questionID: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("isFlagged", "isFlagged(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(questionID)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isInitialized(questionID: Bytes): boolean {
    let result = super.call("isInitialized", "isInitialized(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(questionID)
    ]);

    return result[0].toBoolean();
  }

  try_isInitialized(questionID: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isInitialized",
      "isInitialized(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(questionID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxAncillaryData(): BigInt {
    let result = super.call(
      "maxAncillaryData",
      "maxAncillaryData():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_maxAncillaryData(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxAncillaryData",
      "maxAncillaryData():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  optimisticOracle(): Address {
    let result = super.call(
      "optimisticOracle",
      "optimisticOracle():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_optimisticOracle(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "optimisticOracle",
      "optimisticOracle():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  questions(param0: Bytes): UmaCtfAdapter__questionsResult {
    let result = super.call(
      "questions",
      "questions(bytes32):(uint256,uint256,uint256,uint256,bool,bool,bool,address,address,bytes)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new UmaCtfAdapter__questionsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBoolean(),
      result[5].toBoolean(),
      result[6].toBoolean(),
      result[7].toAddress(),
      result[8].toAddress(),
      result[9].toBytes()
    );
  }

  try_questions(
    param0: Bytes
  ): ethereum.CallResult<UmaCtfAdapter__questionsResult> {
    let result = super.tryCall(
      "questions",
      "questions(bytes32):(uint256,uint256,uint256,uint256,bool,bool,bool,address,address,bytes)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UmaCtfAdapter__questionsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBoolean(),
        value[5].toBoolean(),
        value[6].toBoolean(),
        value[7].toAddress(),
        value[8].toAddress(),
        value[9].toBytes()
      )
    );
  }

  ready(questionID: Bytes): boolean {
    let result = super.call("ready", "ready(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(questionID)
    ]);

    return result[0].toBoolean();
  }

  try_ready(questionID: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("ready", "ready(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(questionID)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  updates(param0: Bytes, param1: BigInt): UmaCtfAdapter__updatesResult {
    let result = super.call(
      "updates",
      "updates(bytes32,uint256):(uint256,bytes)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new UmaCtfAdapter__updatesResult(
      result[0].toBigInt(),
      result[1].toBytes()
    );
  }

  try_updates(
    param0: Bytes,
    param1: BigInt
  ): ethereum.CallResult<UmaCtfAdapter__updatesResult> {
    let result = super.tryCall(
      "updates",
      "updates(bytes32,uint256):(uint256,bytes)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UmaCtfAdapter__updatesResult(value[0].toBigInt(), value[1].toBytes())
    );
  }

  yesOrNoIdentifier(): Bytes {
    let result = super.call(
      "yesOrNoIdentifier",
      "yesOrNoIdentifier():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_yesOrNoIdentifier(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "yesOrNoIdentifier",
      "yesOrNoIdentifier():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _ctf(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _finder(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddAdminCall extends ethereum.Call {
  get inputs(): AddAdminCall__Inputs {
    return new AddAdminCall__Inputs(this);
  }

  get outputs(): AddAdminCall__Outputs {
    return new AddAdminCall__Outputs(this);
  }
}

export class AddAdminCall__Inputs {
  _call: AddAdminCall;

  constructor(call: AddAdminCall) {
    this._call = call;
  }

  get admin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddAdminCall__Outputs {
  _call: AddAdminCall;

  constructor(call: AddAdminCall) {
    this._call = call;
  }
}

export class EmergencyResolveCall extends ethereum.Call {
  get inputs(): EmergencyResolveCall__Inputs {
    return new EmergencyResolveCall__Inputs(this);
  }

  get outputs(): EmergencyResolveCall__Outputs {
    return new EmergencyResolveCall__Outputs(this);
  }
}

export class EmergencyResolveCall__Inputs {
  _call: EmergencyResolveCall;

  constructor(call: EmergencyResolveCall) {
    this._call = call;
  }

  get questionID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get payouts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class EmergencyResolveCall__Outputs {
  _call: EmergencyResolveCall;

  constructor(call: EmergencyResolveCall) {
    this._call = call;
  }
}

export class FlagCall extends ethereum.Call {
  get inputs(): FlagCall__Inputs {
    return new FlagCall__Inputs(this);
  }

  get outputs(): FlagCall__Outputs {
    return new FlagCall__Outputs(this);
  }
}

export class FlagCall__Inputs {
  _call: FlagCall;

  constructor(call: FlagCall) {
    this._call = call;
  }

  get questionID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class FlagCall__Outputs {
  _call: FlagCall;

  constructor(call: FlagCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get ancillaryData(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get rewardToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get reward(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get proposalBond(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get questionID(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }

  get questionID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PostUpdateCall extends ethereum.Call {
  get inputs(): PostUpdateCall__Inputs {
    return new PostUpdateCall__Inputs(this);
  }

  get outputs(): PostUpdateCall__Outputs {
    return new PostUpdateCall__Outputs(this);
  }
}

export class PostUpdateCall__Inputs {
  _call: PostUpdateCall;

  constructor(call: PostUpdateCall) {
    this._call = call;
  }

  get questionID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get update(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class PostUpdateCall__Outputs {
  _call: PostUpdateCall;

  constructor(call: PostUpdateCall) {
    this._call = call;
  }
}

export class PriceDisputedCall extends ethereum.Call {
  get inputs(): PriceDisputedCall__Inputs {
    return new PriceDisputedCall__Inputs(this);
  }

  get outputs(): PriceDisputedCall__Outputs {
    return new PriceDisputedCall__Outputs(this);
  }
}

export class PriceDisputedCall__Inputs {
  _call: PriceDisputedCall;

  constructor(call: PriceDisputedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get value1(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get ancillaryData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class PriceDisputedCall__Outputs {
  _call: PriceDisputedCall;

  constructor(call: PriceDisputedCall) {
    this._call = call;
  }
}

export class RemoveAdminCall extends ethereum.Call {
  get inputs(): RemoveAdminCall__Inputs {
    return new RemoveAdminCall__Inputs(this);
  }

  get outputs(): RemoveAdminCall__Outputs {
    return new RemoveAdminCall__Outputs(this);
  }
}

export class RemoveAdminCall__Inputs {
  _call: RemoveAdminCall;

  constructor(call: RemoveAdminCall) {
    this._call = call;
  }

  get admin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveAdminCall__Outputs {
  _call: RemoveAdminCall;

  constructor(call: RemoveAdminCall) {
    this._call = call;
  }
}

export class RenounceAdminCall extends ethereum.Call {
  get inputs(): RenounceAdminCall__Inputs {
    return new RenounceAdminCall__Inputs(this);
  }

  get outputs(): RenounceAdminCall__Outputs {
    return new RenounceAdminCall__Outputs(this);
  }
}

export class RenounceAdminCall__Inputs {
  _call: RenounceAdminCall;

  constructor(call: RenounceAdminCall) {
    this._call = call;
  }
}

export class RenounceAdminCall__Outputs {
  _call: RenounceAdminCall;

  constructor(call: RenounceAdminCall) {
    this._call = call;
  }
}

export class ResetCall extends ethereum.Call {
  get inputs(): ResetCall__Inputs {
    return new ResetCall__Inputs(this);
  }

  get outputs(): ResetCall__Outputs {
    return new ResetCall__Outputs(this);
  }
}

export class ResetCall__Inputs {
  _call: ResetCall;

  constructor(call: ResetCall) {
    this._call = call;
  }

  get questionID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ResetCall__Outputs {
  _call: ResetCall;

  constructor(call: ResetCall) {
    this._call = call;
  }
}

export class ResolveCall extends ethereum.Call {
  get inputs(): ResolveCall__Inputs {
    return new ResolveCall__Inputs(this);
  }

  get outputs(): ResolveCall__Outputs {
    return new ResolveCall__Outputs(this);
  }
}

export class ResolveCall__Inputs {
  _call: ResolveCall;

  constructor(call: ResolveCall) {
    this._call = call;
  }

  get questionID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ResolveCall__Outputs {
  _call: ResolveCall;

  constructor(call: ResolveCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }

  get questionID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}