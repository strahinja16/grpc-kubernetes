
import React, { FC, useCallback, useState } from "react";
import { Button, Form, Message, Modal } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import Loading from "../../Loading/Loading";
import {
  ADD_MATERIAL_ITEMS, ADD_MATERIAL_ITEMS_UPDATE,
} from "../../../graphql/mutations/warehouse";
import { IMaterialType } from "../../../models/warehouse";

export interface AddMaterialItemsModalProps {
  closeModal: () => void
  materialTypes: IMaterialType[]
  warehouseId: number;
}

const AddMaterialItemsModal: FC<AddMaterialItemsModalProps> = ({ closeModal, materialTypes, warehouseId }) => {
  const [error, setError] = useState('');
  const [addMaterialItems, { data, loading }] = useMutation(ADD_MATERIAL_ITEMS, {
    update: ADD_MATERIAL_ITEMS_UPDATE(warehouseId, closeModal),
  });

  const materialsIncluded: { [key: string]: boolean } = {};
  materialTypes.forEach(mt => materialsIncluded[mt.name] = false);
  const materialQuantities: { [key: string]: number } = {};
  materialTypes.forEach(mt => materialQuantities[mt.name] = 0);

  const [inputValues, setInputValues] = useState({
    name: '',
    price: '',
    materialsIncluded,
    materialQuantities,
  });

  const handleOnCheckboxChange = useCallback((mtName: string) => {
      inputValues.materialsIncluded[mtName] = !inputValues.materialsIncluded[mtName];
      setInputValues(Object.assign({}, inputValues));
    },
    [inputValues]
  );

  const handleMaterialQuantityInputChange = useCallback((mtName: string, value: string) => {
      const parsedValue = Number(value);
      if (isNaN(parsedValue)) {
        setErrorBriefly("Quantity value must be number.");
        return;
      }

      inputValues.materialQuantities[mtName] = parsedValue;
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
    const filteredSpecs = Object.keys(materialsIncluded)
      .filter(mtName => inputValues.materialsIncluded[mtName]);

    const specsValid = filteredSpecs.length && filteredSpecs
      .filter(mtName => inputValues.materialsIncluded[mtName])
      .every(mtName => inputValues.materialQuantities[mtName] > 0);

    if (!specsValid) {
      setErrorBriefly("There has to be at least one checked material." +
        "Checked material types must have quantities greater than 0");
    }


    return specsValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const materialItemsWithQuantities = Object.keys(materialsIncluded)
        .filter(mtName => inputValues.materialsIncluded[mtName])
        .map(mtName => ({
          materialTypeId: Number(materialTypes.find(mt => mt.name === mtName)!.id),
          materialState: 0,
          quantity: inputValues.materialQuantities[mtName],
          warehouseId: Number(warehouseId),
        }));

      const materialItems: { materialTypeId: number, materialState: number, warehouseId: number }[] = [];
      materialItemsWithQuantities.forEach(mi => {
        const quantity = mi.quantity;
        delete mi.quantity;
        Array.from(Array(quantity).keys()).forEach(q => materialItems.push(mi));
      });

      addMaterialItems({
        variables: {
          input: {
            materialItems,
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
      <Modal open size="mini">
        <Modal.Header>Add materials</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            {error && <Message negative><p>{error}</p></Message>}
            <Form.Field>
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
                        onChange={(e) => handleMaterialQuantityInputChange(mt.name, e.target.value)}
                        type="text"
                        placeholder="Quantity"
                        name={`${mt.name}-quantity`}
                        value={inputValues.materialQuantities[mt.name]}
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

export default AddMaterialItemsModal;
