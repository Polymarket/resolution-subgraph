// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class MarketResolution extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MarketResolution entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MarketResolution must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MarketResolution", id.toString(), this);
    }
  }

  static loadInBlock(id: string): MarketResolution | null {
    return changetype<MarketResolution | null>(
      store.get_in_block("MarketResolution", id)
    );
  }

  static load(id: string): MarketResolution | null {
    return changetype<MarketResolution | null>(
      store.get("MarketResolution", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get newVersionQ(): boolean {
    let value = this.get("newVersionQ");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set newVersionQ(value: boolean) {
    this.set("newVersionQ", Value.fromBoolean(value));
  }

  get author(): Bytes {
    let value = this.get("author");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set author(value: Bytes) {
    this.set("author", Value.fromBytes(value));
  }

  get ancillaryData(): Bytes {
    let value = this.get("ancillaryData");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set ancillaryData(value: Bytes) {
    this.set("ancillaryData", Value.fromBytes(value));
  }

  get lastUpdateTimestamp(): BigInt {
    let value = this.get("lastUpdateTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set lastUpdateTimestamp(value: BigInt) {
    this.set("lastUpdateTimestamp", Value.fromBigInt(value));
  }

  get status(): string {
    let value = this.get("status");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get wasDisputed(): boolean {
    let value = this.get("wasDisputed");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set wasDisputed(value: boolean) {
    this.set("wasDisputed", Value.fromBoolean(value));
  }

  get proposedPrice(): BigInt {
    let value = this.get("proposedPrice");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set proposedPrice(value: BigInt) {
    this.set("proposedPrice", Value.fromBigInt(value));
  }

  get reproposedPrice(): BigInt {
    let value = this.get("reproposedPrice");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set reproposedPrice(value: BigInt) {
    this.set("reproposedPrice", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get updates(): string {
    let value = this.get("updates");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set updates(value: string) {
    this.set("updates", Value.fromString(value));
  }

  get transactionHash(): string | null {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transactionHash(value: string | null) {
    if (!value) {
      this.unset("transactionHash");
    } else {
      this.set("transactionHash", Value.fromString(<string>value));
    }
  }

  get logIndex(): BigInt | null {
    let value = this.get("logIndex");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set logIndex(value: BigInt | null) {
    if (!value) {
      this.unset("logIndex");
    } else {
      this.set("logIndex", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class AncillaryDataHashToQuestionId extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save AncillaryDataHashToQuestionId entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AncillaryDataHashToQuestionId must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AncillaryDataHashToQuestionId", id.toString(), this);
    }
  }

  static loadInBlock(id: string): AncillaryDataHashToQuestionId | null {
    return changetype<AncillaryDataHashToQuestionId | null>(
      store.get_in_block("AncillaryDataHashToQuestionId", id)
    );
  }

  static load(id: string): AncillaryDataHashToQuestionId | null {
    return changetype<AncillaryDataHashToQuestionId | null>(
      store.get("AncillaryDataHashToQuestionId", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get questionId(): string {
    let value = this.get("questionId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set questionId(value: string) {
    this.set("questionId", Value.fromString(value));
  }
}

export class Moderator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Moderator entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Moderator must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Moderator", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Moderator | null {
    return changetype<Moderator | null>(store.get_in_block("Moderator", id));
  }

  static load(id: string): Moderator | null {
    return changetype<Moderator | null>(store.get("Moderator", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get canMod(): boolean {
    let value = this.get("canMod");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set canMod(value: boolean) {
    this.set("canMod", Value.fromBoolean(value));
  }
}
