/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "example.example";

/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}

export interface MsgCreateUser {
  creator: string;
  address: string;
  balance: number;
  state: string;
  sponsor: string;
}

export interface MsgCreateUserResponse {
  id: number;
}

export interface MsgUpdateUser {
  creator: string;
  id: number;
  address: string;
  balance: number;
  state: string;
  sponsor: string;
}

export interface MsgUpdateUserResponse {
}

export interface MsgDeleteUser {
  creator: string;
  id: number;
}

export interface MsgDeleteUserResponse {
}

export interface MsgAddCitizen {
  creator: string;
  name: string;
  desc: string;
  sponsor: string;
}

export interface MsgAddCitizenResponse {
  id: number;
}

export interface MsgAddProposal {
  creator: string;
  name: string;
  desc: string;
  votes: number;
}

export interface MsgAddProposalResponse {
  id: number;
}

export interface MsgVoteonProposal {
  creator: string;
  id: number;
  votes: number;
}

export interface MsgVoteonProposalResponse {
  id: number;
}

export interface MsgVoteForProposal {
  creator: string;
  id: number;
  votes: number;
  yesno: boolean;
}

export interface MsgVoteForProposalResponse {
  id: number;
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgCreateUser(): MsgCreateUser {
  return { creator: "", address: "", balance: 0, state: "", sponsor: "" };
}

export const MsgCreateUser = {
  encode(message: MsgCreateUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.balance !== 0) {
      writer.uint32(24).uint64(message.balance);
    }
    if (message.state !== "") {
      writer.uint32(34).string(message.state);
    }
    if (message.sponsor !== "") {
      writer.uint32(42).string(message.sponsor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.balance = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.state = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sponsor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUser {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      state: isSet(object.state) ? String(object.state) : "",
      sponsor: isSet(object.sponsor) ? String(object.sponsor) : "",
    };
  },

  toJSON(message: MsgCreateUser): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.balance !== 0) {
      obj.balance = Math.round(message.balance);
    }
    if (message.state !== "") {
      obj.state = message.state;
    }
    if (message.sponsor !== "") {
      obj.sponsor = message.sponsor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateUser>, I>>(base?: I): MsgCreateUser {
    return MsgCreateUser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateUser>, I>>(object: I): MsgCreateUser {
    const message = createBaseMsgCreateUser();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.balance = object.balance ?? 0;
    message.state = object.state ?? "";
    message.sponsor = object.sponsor ?? "";
    return message;
  },
};

function createBaseMsgCreateUserResponse(): MsgCreateUserResponse {
  return { id: 0 };
}

export const MsgCreateUserResponse = {
  encode(message: MsgCreateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUserResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateUserResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateUserResponse>, I>>(base?: I): MsgCreateUserResponse {
    return MsgCreateUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateUserResponse>, I>>(object: I): MsgCreateUserResponse {
    const message = createBaseMsgCreateUserResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateUser(): MsgUpdateUser {
  return { creator: "", id: 0, address: "", balance: 0, state: "", sponsor: "" };
}

export const MsgUpdateUser = {
  encode(message: MsgUpdateUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.balance !== 0) {
      writer.uint32(32).uint64(message.balance);
    }
    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }
    if (message.sponsor !== "") {
      writer.uint32(50).string(message.sponsor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.address = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.balance = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.state = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sponsor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateUser {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      address: isSet(object.address) ? String(object.address) : "",
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      state: isSet(object.state) ? String(object.state) : "",
      sponsor: isSet(object.sponsor) ? String(object.sponsor) : "",
    };
  },

  toJSON(message: MsgUpdateUser): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.balance !== 0) {
      obj.balance = Math.round(message.balance);
    }
    if (message.state !== "") {
      obj.state = message.state;
    }
    if (message.sponsor !== "") {
      obj.sponsor = message.sponsor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateUser>, I>>(base?: I): MsgUpdateUser {
    return MsgUpdateUser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateUser>, I>>(object: I): MsgUpdateUser {
    const message = createBaseMsgUpdateUser();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.address = object.address ?? "";
    message.balance = object.balance ?? 0;
    message.state = object.state ?? "";
    message.sponsor = object.sponsor ?? "";
    return message;
  },
};

function createBaseMsgUpdateUserResponse(): MsgUpdateUserResponse {
  return {};
}

export const MsgUpdateUserResponse = {
  encode(_: MsgUpdateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateUserResponse {
    return {};
  },

  toJSON(_: MsgUpdateUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateUserResponse>, I>>(base?: I): MsgUpdateUserResponse {
    return MsgUpdateUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateUserResponse>, I>>(_: I): MsgUpdateUserResponse {
    const message = createBaseMsgUpdateUserResponse();
    return message;
  },
};

function createBaseMsgDeleteUser(): MsgDeleteUser {
  return { creator: "", id: 0 };
}

export const MsgDeleteUser = {
  encode(message: MsgDeleteUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteUser {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteUser): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteUser>, I>>(base?: I): MsgDeleteUser {
    return MsgDeleteUser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteUser>, I>>(object: I): MsgDeleteUser {
    const message = createBaseMsgDeleteUser();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteUserResponse(): MsgDeleteUserResponse {
  return {};
}

export const MsgDeleteUserResponse = {
  encode(_: MsgDeleteUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteUserResponse {
    return {};
  },

  toJSON(_: MsgDeleteUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteUserResponse>, I>>(base?: I): MsgDeleteUserResponse {
    return MsgDeleteUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteUserResponse>, I>>(_: I): MsgDeleteUserResponse {
    const message = createBaseMsgDeleteUserResponse();
    return message;
  },
};

function createBaseMsgAddCitizen(): MsgAddCitizen {
  return { creator: "", name: "", desc: "", sponsor: "" };
}

export const MsgAddCitizen = {
  encode(message: MsgAddCitizen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    if (message.sponsor !== "") {
      writer.uint32(34).string(message.sponsor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddCitizen {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCitizen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.desc = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sponsor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddCitizen {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      desc: isSet(object.desc) ? String(object.desc) : "",
      sponsor: isSet(object.sponsor) ? String(object.sponsor) : "",
    };
  },

  toJSON(message: MsgAddCitizen): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.desc !== "") {
      obj.desc = message.desc;
    }
    if (message.sponsor !== "") {
      obj.sponsor = message.sponsor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddCitizen>, I>>(base?: I): MsgAddCitizen {
    return MsgAddCitizen.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddCitizen>, I>>(object: I): MsgAddCitizen {
    const message = createBaseMsgAddCitizen();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.desc = object.desc ?? "";
    message.sponsor = object.sponsor ?? "";
    return message;
  },
};

function createBaseMsgAddCitizenResponse(): MsgAddCitizenResponse {
  return { id: 0 };
}

export const MsgAddCitizenResponse = {
  encode(message: MsgAddCitizenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddCitizenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCitizenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddCitizenResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgAddCitizenResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddCitizenResponse>, I>>(base?: I): MsgAddCitizenResponse {
    return MsgAddCitizenResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddCitizenResponse>, I>>(object: I): MsgAddCitizenResponse {
    const message = createBaseMsgAddCitizenResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgAddProposal(): MsgAddProposal {
  return { creator: "", name: "", desc: "", votes: 0 };
}

export const MsgAddProposal = {
  encode(message: MsgAddProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    if (message.votes !== 0) {
      writer.uint32(32).uint64(message.votes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.desc = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.votes = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddProposal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      desc: isSet(object.desc) ? String(object.desc) : "",
      votes: isSet(object.votes) ? Number(object.votes) : 0,
    };
  },

  toJSON(message: MsgAddProposal): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.desc !== "") {
      obj.desc = message.desc;
    }
    if (message.votes !== 0) {
      obj.votes = Math.round(message.votes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddProposal>, I>>(base?: I): MsgAddProposal {
    return MsgAddProposal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddProposal>, I>>(object: I): MsgAddProposal {
    const message = createBaseMsgAddProposal();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.desc = object.desc ?? "";
    message.votes = object.votes ?? 0;
    return message;
  },
};

function createBaseMsgAddProposalResponse(): MsgAddProposalResponse {
  return { id: 0 };
}

export const MsgAddProposalResponse = {
  encode(message: MsgAddProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddProposalResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddProposalResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgAddProposalResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddProposalResponse>, I>>(base?: I): MsgAddProposalResponse {
    return MsgAddProposalResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddProposalResponse>, I>>(object: I): MsgAddProposalResponse {
    const message = createBaseMsgAddProposalResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgVoteonProposal(): MsgVoteonProposal {
  return { creator: "", id: 0, votes: 0 };
}

export const MsgVoteonProposal = {
  encode(message: MsgVoteonProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.votes !== 0) {
      writer.uint32(24).uint64(message.votes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteonProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteonProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.votes = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgVoteonProposal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      votes: isSet(object.votes) ? Number(object.votes) : 0,
    };
  },

  toJSON(message: MsgVoteonProposal): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.votes !== 0) {
      obj.votes = Math.round(message.votes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgVoteonProposal>, I>>(base?: I): MsgVoteonProposal {
    return MsgVoteonProposal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgVoteonProposal>, I>>(object: I): MsgVoteonProposal {
    const message = createBaseMsgVoteonProposal();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.votes = object.votes ?? 0;
    return message;
  },
};

function createBaseMsgVoteonProposalResponse(): MsgVoteonProposalResponse {
  return { id: 0 };
}

export const MsgVoteonProposalResponse = {
  encode(message: MsgVoteonProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteonProposalResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteonProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgVoteonProposalResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgVoteonProposalResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgVoteonProposalResponse>, I>>(base?: I): MsgVoteonProposalResponse {
    return MsgVoteonProposalResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgVoteonProposalResponse>, I>>(object: I): MsgVoteonProposalResponse {
    const message = createBaseMsgVoteonProposalResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgVoteForProposal(): MsgVoteForProposal {
  return { creator: "", id: 0, votes: 0, yesno: false };
}

export const MsgVoteForProposal = {
  encode(message: MsgVoteForProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.votes !== 0) {
      writer.uint32(24).uint64(message.votes);
    }
    if (message.yesno === true) {
      writer.uint32(32).bool(message.yesno);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteForProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteForProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.votes = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.yesno = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgVoteForProposal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      votes: isSet(object.votes) ? Number(object.votes) : 0,
      yesno: isSet(object.yesno) ? Boolean(object.yesno) : false,
    };
  },

  toJSON(message: MsgVoteForProposal): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.votes !== 0) {
      obj.votes = Math.round(message.votes);
    }
    if (message.yesno === true) {
      obj.yesno = message.yesno;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgVoteForProposal>, I>>(base?: I): MsgVoteForProposal {
    return MsgVoteForProposal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgVoteForProposal>, I>>(object: I): MsgVoteForProposal {
    const message = createBaseMsgVoteForProposal();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.votes = object.votes ?? 0;
    message.yesno = object.yesno ?? false;
    return message;
  },
};

function createBaseMsgVoteForProposalResponse(): MsgVoteForProposalResponse {
  return { id: 0 };
}

export const MsgVoteForProposalResponse = {
  encode(message: MsgVoteForProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteForProposalResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteForProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgVoteForProposalResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgVoteForProposalResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgVoteForProposalResponse>, I>>(base?: I): MsgVoteForProposalResponse {
    return MsgVoteForProposalResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgVoteForProposalResponse>, I>>(object: I): MsgVoteForProposalResponse {
    const message = createBaseMsgVoteForProposalResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>;
  UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse>;
  DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse>;
  AddCitizen(request: MsgAddCitizen): Promise<MsgAddCitizenResponse>;
  AddProposal(request: MsgAddProposal): Promise<MsgAddProposalResponse>;
  VoteonProposal(request: MsgVoteonProposal): Promise<MsgVoteonProposalResponse>;
  VoteForProposal(request: MsgVoteForProposal): Promise<MsgVoteForProposalResponse>;
}

export const MsgServiceName = "example.example.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateUser = this.CreateUser.bind(this);
    this.UpdateUser = this.UpdateUser.bind(this);
    this.DeleteUser = this.DeleteUser.bind(this);
    this.AddCitizen = this.AddCitizen.bind(this);
    this.AddProposal = this.AddProposal.bind(this);
    this.VoteonProposal = this.VoteonProposal.bind(this);
    this.VoteForProposal = this.VoteForProposal.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse> {
    const data = MsgCreateUser.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateUser", data);
    return promise.then((data) => MsgCreateUserResponse.decode(_m0.Reader.create(data)));
  }

  UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse> {
    const data = MsgUpdateUser.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateUser", data);
    return promise.then((data) => MsgUpdateUserResponse.decode(_m0.Reader.create(data)));
  }

  DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse> {
    const data = MsgDeleteUser.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteUser", data);
    return promise.then((data) => MsgDeleteUserResponse.decode(_m0.Reader.create(data)));
  }

  AddCitizen(request: MsgAddCitizen): Promise<MsgAddCitizenResponse> {
    const data = MsgAddCitizen.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddCitizen", data);
    return promise.then((data) => MsgAddCitizenResponse.decode(_m0.Reader.create(data)));
  }

  AddProposal(request: MsgAddProposal): Promise<MsgAddProposalResponse> {
    const data = MsgAddProposal.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddProposal", data);
    return promise.then((data) => MsgAddProposalResponse.decode(_m0.Reader.create(data)));
  }

  VoteonProposal(request: MsgVoteonProposal): Promise<MsgVoteonProposalResponse> {
    const data = MsgVoteonProposal.encode(request).finish();
    const promise = this.rpc.request(this.service, "VoteonProposal", data);
    return promise.then((data) => MsgVoteonProposalResponse.decode(_m0.Reader.create(data)));
  }

  VoteForProposal(request: MsgVoteForProposal): Promise<MsgVoteForProposalResponse> {
    const data = MsgVoteForProposal.encode(request).finish();
    const promise = this.rpc.request(this.service, "VoteForProposal", data);
    return promise.then((data) => MsgVoteForProposalResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
