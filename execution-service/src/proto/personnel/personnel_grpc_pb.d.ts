// package: personnel
// file: personnel.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as personnel_pb from "./personnel_pb";

interface IPersonnelManagementService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    signUp: IPersonnelManagementService_IsignUp;
    login: IPersonnelManagementService_Ilogin;
    changeRole: IPersonnelManagementService_IchangeRole;
}

interface IPersonnelManagementService_IsignUp extends grpc.MethodDefinition<personnel_pb.SignUpRequest, personnel_pb.SignUpResponse> {
    path: string; // "/personnel.PersonnelManagement/signUp"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<personnel_pb.SignUpRequest>;
    requestDeserialize: grpc.deserialize<personnel_pb.SignUpRequest>;
    responseSerialize: grpc.serialize<personnel_pb.SignUpResponse>;
    responseDeserialize: grpc.deserialize<personnel_pb.SignUpResponse>;
}
interface IPersonnelManagementService_Ilogin extends grpc.MethodDefinition<personnel_pb.LoginRequest, personnel_pb.LoginResponse> {
    path: string; // "/personnel.PersonnelManagement/login"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<personnel_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<personnel_pb.LoginRequest>;
    responseSerialize: grpc.serialize<personnel_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<personnel_pb.LoginResponse>;
}
interface IPersonnelManagementService_IchangeRole extends grpc.MethodDefinition<personnel_pb.ChangeRoleRequest, personnel_pb.ChangeRoleResponse> {
    path: string; // "/personnel.PersonnelManagement/changeRole"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<personnel_pb.ChangeRoleRequest>;
    requestDeserialize: grpc.deserialize<personnel_pb.ChangeRoleRequest>;
    responseSerialize: grpc.serialize<personnel_pb.ChangeRoleResponse>;
    responseDeserialize: grpc.deserialize<personnel_pb.ChangeRoleResponse>;
}

export const PersonnelManagementService: IPersonnelManagementService;

export interface IPersonnelManagementServer {
    signUp: grpc.handleUnaryCall<personnel_pb.SignUpRequest, personnel_pb.SignUpResponse>;
    login: grpc.handleUnaryCall<personnel_pb.LoginRequest, personnel_pb.LoginResponse>;
    changeRole: grpc.handleUnaryCall<personnel_pb.ChangeRoleRequest, personnel_pb.ChangeRoleResponse>;
}

export interface IPersonnelManagementClient {
    signUp(request: personnel_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: personnel_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    signUp(request: personnel_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: personnel_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    signUp(request: personnel_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: personnel_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    login(request: personnel_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: personnel_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: personnel_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: personnel_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: personnel_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: personnel_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    changeRole(request: personnel_pb.ChangeRoleRequest, callback: (error: grpc.ServiceError | null, response: personnel_pb.ChangeRoleResponse) => void): grpc.ClientUnaryCall;
    changeRole(request: personnel_pb.ChangeRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: personnel_pb.ChangeRoleResponse) => void): grpc.ClientUnaryCall;
    changeRole(request: personnel_pb.ChangeRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: personnel_pb.ChangeRoleResponse) => void): grpc.ClientUnaryCall;
}

export class PersonnelManagementClient extends grpc.Client implements IPersonnelManagementClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public signUp(request: personnel_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: personnel_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public signUp(request: personnel_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: personnel_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public signUp(request: personnel_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: personnel_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public login(request: personnel_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: personnel_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: personnel_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: personnel_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: personnel_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: personnel_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public changeRole(request: personnel_pb.ChangeRoleRequest, callback: (error: grpc.ServiceError | null, response: personnel_pb.ChangeRoleResponse) => void): grpc.ClientUnaryCall;
    public changeRole(request: personnel_pb.ChangeRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: personnel_pb.ChangeRoleResponse) => void): grpc.ClientUnaryCall;
    public changeRole(request: personnel_pb.ChangeRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: personnel_pb.ChangeRoleResponse) => void): grpc.ClientUnaryCall;
}
