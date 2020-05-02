// @ts-ignore
import Joi from 'joi-browser';
import React, { FC, useCallback, useState } from "react";
import { Button, Form, Message, Modal } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import Loading from "../../Loading/Loading";
import { ADD_MATERIAL_TYPE, ADD_MATERIAL_TYPE_UPDATE } from "../../../graphql/mutations/warehouse";

export interface AddMaterialTypeModalProps {
  closeModal: () => void
}

const AddMaterialTypeModal: FC<AddMaterialTypeModalProps> = ({ closeModal }) => {
  const [error, setError] = useState('');
  const [addMaterialType, { data, loading }] = useMutation(ADD_MATERIAL_TYPE, {
    update: ADD_MATERIAL_TYPE_UPDATE(closeModal),
  });
  const [inputValues, setInputValues] = useState({
    name: '',
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
    });

    const result = Joi.validate(
      { name: inputValues.name },
      schema
    );

    if (result.error && result.error.message) {
      setErrorBriefly(result.error.message);
    }
    return !result.error;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      addMaterialType({ variables: { input: { ...inputValues } } })
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
        <Modal.Header>Add material type</Modal.Header>
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

export default AddMaterialTypeModal;
