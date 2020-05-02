import * as grpc from 'grpc';
import {ExecutionClient, IExecutionClient} from "../../proto/execution_grpc_pb";
import {
  AddProductTypeRequest,
  AddProductTypeResponse,
} from "../../proto/execution_pb";
import {config} from "../../config";
import { ProductType } from "../../db/entities/product-type";

class ExecutionGrpcClient  {
  executionClient: IExecutionClient;

  constructor() {
    this.executionClient = new ExecutionClient(config.executionServiceGrpcUrl!, grpc.credentials.createInsecure());
  }

  addProductType(input: Partial<ProductType>): Promise<{ id: number, name: string, price: number }> {
    return new Promise((resolve ,reject) => {
      const request = new AddProductTypeRequest();
      request.setName(input.name);
      request.setPrice(input.price);

      this.executionClient.addProductType(
        request,
        (error: (grpc.ServiceError | null), response: AddProductTypeResponse) => {
          if (error != null) {
            reject(error.details);
            return;
          }

          resolve({
            id: response.getId(),
            name: response.getName(),
            price: response.getPrice(),
          });
        });
    });
  }
}

export const executionGrpcClient = new ExecutionGrpcClient();
