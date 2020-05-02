// @ts-ignore
import Joi from 'joi-browser';
import React, { FC, useCallback, useState } from "react";
import { Button, Form, Message, Modal } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import Loading from "../../Loading/Loading";
import {
  ADD_PRODUCT_TYPE,
  ADD_PRODUCT_TYPE_UPDATE,
} from "../../../graphql/mutations/warehouse";
import { IMaterialType } from "../../../models/warehouse";

export interface AddProductTypeModalProps {
  closeModal: () => void
  materialTypes: IMaterialType[]
}

const AddProductTypeModal: FC<AddProductTypeModalProps> = ({ closeModal, materialTypes }) => {
  const [error, setError] = useState('');
  const [addProductType, { data, loading }] = useMutation(ADD_PRODUCT_TYPE, {
    update: ADD_PRODUCT_TYPE_UPDATE(closeModal),
  });

  const materialsIncluded: { [key: string]: boolean } = {};
  materialTypes.forEach(mt => materialsIncluded[mt.name] = false);
  const materialSpecs: { [key: string]: number } = {};
  materialTypes.forEach(mt => materialSpecs[mt.name] = 0);

  const [inputValues, setInputValues] = useState({
    name: '',
    price: '',
    materialsIncluded,
    materialSpecs,
  });

  const handleOnChange = useCallback(event => {
      const { name, value } = event.target;
      setInputValues({ ...inputValues, [name]: value });
    },
    [inputValues]
  );

  const handleOnCheckboxChange = useCallback((mtName: string) => {
      inputValues.materialsIncluded[mtName] = !inputValues.materialsIncluded[mtName];
      setInputValues(Object.assign({}, inputValues));
    },
    [inputValues]
  );

  const handleMaterialSpecInputChange = useCallback((mtName: string, value: string) => {
      const parsedValue = Number(value);
      if (isNaN(parsedValue)) {
        setErrorBriefly("Quantity value must be number.");
        return;
      }

      inputValues.materialSpecs[mtName] = parsedValue;
      setInputValues(Object.assign({}, inputValues));
    },
    [inputValues]
  );

  const setErrorBriefly = (error: string) => {
    setError(error);
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  const validateForm = () => {
    const schema = Joi.object().keys({
      name: Joi.string()
        .required()
        .error(new Error('Name is required.')),
      price: Joi.number()
        .required()
        .error(new Error('Price is required in number format.')),
    });

    const filteredSpecs = Object.keys(materialsIncluded)
      .filter(mtName => inputValues.materialsIncluded[mtName]);

    const specsValid = filteredSpecs.length && filteredSpecs
      .every(mtName => inputValues.materialSpecs[mtName] > 0);

    const result = Joi.validate(
      { name: inputValues.name, price: parseInt(inputValues.price, 10) },
      schema
    );

    if (result.error && result.error.message) {
      setErrorBriefly(result.error.message);
    }

    if (!specsValid) {
      setErrorBriefly("There has to be at least one checked material." +
        "Checked material quantities must be greater than 0");
    }


    return !result.error && specsValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      addProductType({
        variables: {
          input: {
            productType: {
              name: inputValues.name,
              price: parseInt(inputValues.price, 10)
            },
            materialSpecs: Object.keys(materialsIncluded)
              .filter(mtName => inputValues.materialsIncluded[mtName])
              .map(mtName => ({
                materialTypeId: materialTypes.find(mt => mt.name === mtName)!.id,
                quantity: inputValues.materialSpecs[mtName]
              }))
          }
        }
      })
        .then(() => {
          if (data.error) {
            setErrorBriefly(data.error);
          }
        })
        .catch((e: any) => setErrorBriefly(e.message));
    }
  };

  const handleCancel = () => {
    closeModal();
  };

  return loading
    ? <Loading/>
    :(
      <Modal open style={{ width: '400px'}}>
        <Modal.Header>Add product type and material specifications</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            {error && <Message negative><p>{error}</p></Message>}
            <Form.Field>
              <label htmlFor="name">Name</label>
              <input
                onChange={handleOnChange}
                type="text"
                placeholder="Name"
                name="name"
                value={inputValues.name}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="capacity">Price</label>
              <input
                onChange={handleOnChange}
                type="text"
                placeholder="Price"
                name="price"
                value={inputValues.price}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="materialSpecs">Material specifications</label>
              {
                materialTypes.map(mt => (
                  <Form.Group inline key={mt.id}>
                    <Form.Checkbox
                      width={8}
                      inline
                      name={`${mt.name}-checkbox`}
                      onChange={() => handleOnCheckboxChange(mt.name)}
                      required={false}
                      checked={inputValues.materialsIncluded[mt.name]}
                      label={mt.name}
                    />
                    <Form.Field width={8} style={{ padding: 0}}>
                      <input
                        onChange={(e) => handleMaterialSpecInputChange(mt.name, e.target.value)}
                        type="text"
                        placeholder="Quantity"
                        name={`${mt.name}-quantity`}
                        value={inputValues.materialSpecs[mt.name]}
                      />
                    </Form.Field>
                  </Form.Group>
                ))
              }
            </Form.Field>
            <Button
              type="submit"
              onSubmit={handleSubmit}
              name="button"
              primary
            >
              Submit
            </Button>
            <Button
              onClick={handleCancel}
              name="button"
              secondary
            >
              Cancel
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
};

export default AddProductTypeModal;
