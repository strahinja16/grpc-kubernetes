import * as grpc from 'grpc';
import {IPersonnelManagementClient, PersonnelManagementClient} from "../proto/personnel/personnel_grpc_pb";
import {IChangeRoleDto, ILoginDto, IPersonnel, IPersonnelWithJwt, ISignUpDto} from "../models/personnel/personnel";
import {
    ChangeRoleRequest,
    ChangeRoleResponse,
    LoginDto,
    LoginRequest,
    LoginResponse,
    Role,
    SignUpDto,
    SignUpRequest,
    SignUpResponse
} from "../proto/personnel/personnel_pb";
import {personnelMapper} from "../mappers/personnel/personnel";

class PersonnelGrpcClient  {
    personnelClient: IPersonnelManagementClient;

    constructor() {
        this.personnelClient = new PersonnelManagementClient('personnel-service:50051', grpc.credentials.createInsecure());
    }

    signUp(input: ISignUpDto): Promise<IPersonnelWithJwt> {
        return new Promise((resolve ,reject) => {
            const request = new SignUpRequest();
            const signUpDto = new SignUpDto();

            signUpDto.setName(input.name);
            signUpDto.setLastname(input.lastname);
            signUpDto.setEmail(input.email);
            signUpDto.setPassword(input.password);

            request.setSignupdto(signUpDto);

            this.personnelClient.signUp(
                request,
                (error: (grpc.ServiceError | null), response: SignUpResponse) => {
                    if (error != null) {
                        reject(`api-gateway: PersonnelService.signUp ${error.toString()}`);
                    }

                    resolve({
                        personnel: personnelMapper.toGql(response.getPerson()!),
                        jwt: response.getJwt(),
                    });
                });
        });
    }

    login(input: ILoginDto): Promise<IPersonnelWithJwt> {
        return new Promise((resolve ,reject) => {
            const request = new LoginRequest();
            const loginDto = new LoginDto();

            loginDto.setEmail(input.email);
            loginDto.setPassword(input.password);

            request.setLogindto(loginDto);

            this.personnelClient.login(
                request,
                (error: (grpc.ServiceError | null), response: LoginResponse) => {
                    if (error != null) {
                        reject(`api-gateway: PersonnelService.login ${error.toString()}`);
                    }

                    resolve({
                        personnel: personnelMapper.toGql(response.getPerson()!),
                        jwt: response.getJwt(),
                    });
                });
        });
    }

    changeRole(input: IChangeRoleDto): Promise<IPersonnel> {
        return new Promise((resolve ,reject) => {
            const request = new ChangeRoleRequest();

            request.setPersonnelid(input.personnelId);
            request.setRole((input.role as number) as Role);

            this.personnelClient.changeRole(
                request,
                (error: (grpc.ServiceError | null), response: ChangeRoleResponse) => {
                    if (error != null) {
                        reject(`api-gateway: PersonnelService.changeRole ${error.toString()}`);
                    }

                    resolve(personnelMapper.toGql(response.getPerson()!));
                });
        });
    }
}

export default new PersonnelGrpcClient();
