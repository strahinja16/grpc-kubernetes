// @ts-ignore
import Joi from 'joi-browser';
import React, { FC, useCallback, useState } from "react";
import { Button, Form, Message, Modal } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import Loading from "../../Loading/Loading";
import { ADD_WAREHOUSE, ADD_WAREHOUSE_UPDATE } from "../../../graphql/mutations/warehouse";

export interface AddWarehouseModalProps {
  closeModal: () => void
}

const AddWarehouseModal: FC<AddWarehouseModalProps> = ({ closeModal }) => {
  const [error, setError] = useState('');
  const [addWarehouse, { data, loading }] = useMutation(ADD_WAREHOUSE, {
    update: ADD_WAREHOUSE_UPDATE(closeModal),
  });
  const [inputValues, setInputValues] = useState({
    name: '',
    capacity: '',
  });

  const handleOnChange = useCallback(event => {
      const { name, value } = event.target;
      setInputValues({ ...inputValues, [name]: value });
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
      capacity: Joi.number()
        .required()
        .error(new Error('Capacity is required in number format.')),
    });

    const result = Joi.validate(
      { name: inputValues.name, capacity: parseInt(inputValues.capacity, 10) },
      schema
    );

    if (result.error && result.error.message) {
      setErrorBriefly(result.error.message);
    }
    return !result.error;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      addWarehouse({ variables: { input: { warehouse: {
        name: inputValues.name,
        capacity: parseInt(inputValues.capacity, 10)
      }}}})
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
      <Modal open size="mini">
        <Modal.Header>Add warehouse</Modal.Header>
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
              <label htmlFor="capacity">Capacity</label>
              <input
                onChange={handleOnChange}
                type="text"
                placeholder="Capacity"
                name="capacity"
                value={inputValues.capacity}
              />
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

export default AddWarehouseModal;
