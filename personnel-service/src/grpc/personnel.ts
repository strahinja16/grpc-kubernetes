import * as grpc from 'grpc';
import {personnelRepository} from "../db/repositories";
import {IPersonnelManagementServer, PersonnelManagementService} from "../proto/personnel_grpc_pb";
import {
    ChangeRoleRequest,
    ChangeRoleResponse,
    LoginRequest,
    LoginResponse,
    SignUpRequest,
    SignUpResponse,
} from "../proto/personnel_pb";
import {personnelMapper} from "../mappers/personnel";
import {Role} from "../db/entities/personnel";

class PersonnelServer implements IPersonnelManagementServer {

    /**
     * Signs up new person
     * @param call
     * @param callback
     */
    signUp = async (
        call: grpc.ServerUnaryCall<SignUpRequest>,
        callback: grpc.sendUnaryData<SignUpResponse>
    ): Promise<void> => {
        try {
            const personWithJwt = await personnelRepository.signUp(call.request.getSignupdto().toObject());

            const response = new SignUpResponse();
            response.setPerson(personnelMapper.toGrpc(personWithJwt.personnel));
            response.setJwt(personWithJwt.jwt);

            callback(null, response);
        } catch (e) {
            console.log(`personnel-service: PersonnelManagementServer.signUp error: ${e.toString()}`);
            callback(e.toString(), null);
        }
    };

    /**
     * Logs in person
     * @param call
     * @param callback
     */
    login = async (
        call: grpc.ServerUnaryCall<LoginRequest>,
        callback: grpc.sendUnaryData<LoginResponse>
    ): Promise<void> => {
        try {
            const personWithJwt = await personnelRepository.login(call.request.getLogindto().toObject());

            const response = new LoginResponse();
            response.setPerson(personnelMapper.toGrpc(personWithJwt.personnel));
            response.setJwt(personWithJwt.jwt);

            callback(null, response);
        } catch (e) {
            console.log(`personnel-service: PersonnelManagementServer.login error: ${e.toString()}`);
            callback(e.toString(), null);
        }
    };

    /**
     * Changes person role
     * @param call
     * @param callback
     */
    changeRole = async (
        call: grpc.ServerUnaryCall<ChangeRoleRequest>,
        callback: grpc.sendUnaryData<ChangeRoleResponse>
    ): Promise<void> => {
        try {
            const person = await personnelRepository.changeRole({
                id: call.request.getPersonnelid(),
                role: ((call.request.getRole() as number) as Role)
            });

            const response = new ChangeRoleResponse();
            response.setPerson(personnelMapper.toGrpc(person));

            callback(null, response);
        } catch (e) {
            console.log(`personnel-service: PersonnelManagementServer.changeRole error: ${e.toString()}`);
            callback(e.toString(), null);
        }
    };
}

export default {
    service: PersonnelManagementService,
    implementation: new PersonnelServer(),
};
