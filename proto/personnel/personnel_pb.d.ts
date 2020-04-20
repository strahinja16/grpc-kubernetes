// package: personnel
// file: personnel.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SignUpRequest extends jspb.Message { 

    hasSignupdto(): boolean;
    clearSignupdto(): void;
    getSignupdto(): SignUpDto | undefined;
    setSignupdto(value?: SignUpDto): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpRequest): SignUpRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignUpRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpRequest;
    static deserializeBinaryFromReader(message: SignUpRequest, reader: jspb.BinaryReader): SignUpRequest;
}

export namespace SignUpRequest {
    export type AsObject = {
        signupdto?: SignUpDto.AsObject,
    }
}

export class SignUpResponse extends jspb.Message { 

    hasPerson(): boolean;
    clearPerson(): void;
    getPerson(): Personnel | undefined;
    setPerson(value?: Personnel): void;

    getJwt(): string;
    setJwt(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpResponse): SignUpResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignUpResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpResponse;
    static deserializeBinaryFromReader(message: SignUpResponse, reader: jspb.BinaryReader): SignUpResponse;
}

export namespace SignUpResponse {
    export type AsObject = {
        person?: Personnel.AsObject,
        jwt: string,
    }
}

export class LoginRequest extends jspb.Message { 

    hasLogindto(): boolean;
    clearLogindto(): void;
    getLogindto(): LoginDto | undefined;
    setLogindto(value?: LoginDto): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequest;
    static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
    export type AsObject = {
        logindto?: LoginDto.AsObject,
    }
}

export class LoginResponse extends jspb.Message { 

    hasPerson(): boolean;
    clearPerson(): void;
    getPerson(): Personnel | undefined;
    setPerson(value?: Personnel): void;

    getJwt(): string;
    setJwt(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResponse;
    static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
    export type AsObject = {
        person?: Personnel.AsObject,
        jwt: string,
    }
}

export class ChangeRoleRequest extends jspb.Message { 
    getRole(): Role;
    setRole(value: Role): void;

    getPersonnelid(): number;
    setPersonnelid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeRoleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeRoleRequest): ChangeRoleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeRoleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeRoleRequest;
    static deserializeBinaryFromReader(message: ChangeRoleRequest, reader: jspb.BinaryReader): ChangeRoleRequest;
}

export namespace ChangeRoleRequest {
    export type AsObject = {
        role: Role,
        personnelid: number,
    }
}

export class ChangeRoleResponse extends jspb.Message { 

    hasPerson(): boolean;
    clearPerson(): void;
    getPerson(): Personnel | undefined;
    setPerson(value?: Personnel): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeRoleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeRoleResponse): ChangeRoleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeRoleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeRoleResponse;
    static deserializeBinaryFromReader(message: ChangeRoleResponse, reader: jspb.BinaryReader): ChangeRoleResponse;
}

export namespace ChangeRoleResponse {
    export type AsObject = {
        person?: Personnel.AsObject,
    }
}

export class SignUpDto extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getLastname(): string;
    setLastname(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpDto.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpDto): SignUpDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignUpDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpDto;
    static deserializeBinaryFromReader(message: SignUpDto, reader: jspb.BinaryReader): SignUpDto;
}

export namespace SignUpDto {
    export type AsObject = {
        name: string,
        lastname: string,
        email: string,
        password: string,
    }
}

export class LoginDto extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginDto.AsObject;
    static toObject(includeInstance: boolean, msg: LoginDto): LoginDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginDto;
    static deserializeBinaryFromReader(message: LoginDto, reader: jspb.BinaryReader): LoginDto;
}

export namespace LoginDto {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class Personnel extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getSerial(): string;
    setSerial(value: string): void;

    getName(): string;
    setName(value: string): void;

    getLastname(): string;
    setLastname(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getRole(): Role;
    setRole(value: Role): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Personnel.AsObject;
    static toObject(includeInstance: boolean, msg: Personnel): Personnel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Personnel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Personnel;
    static deserializeBinaryFromReader(message: Personnel, reader: jspb.BinaryReader): Personnel;
}

export namespace Personnel {
    export type AsObject = {
        id: number,
        serial: string,
        name: string,
        lastname: string,
        email: string,
        role: Role,
    }
}

export enum Role {
    OPERATOR = 0,
    MANAGER = 1,
    ADMIN = 2,
}
