
import React, { FC, useCallback, useState } from "react";
import { Button, Form, Message, Modal } from "semantic-ui-react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Loading from "../../Loading/Loading";
import { IProductType } from "../../../models/warehouse";
import { GET_WAREHOUSE_CONTENT_CLIENT } from "../../../graphql/queries/warehouse";
import { PLACE_ORDER, PLACE_ORDER_UPDATE } from "../../../graphql/mutations/execution";
import { GET_LOGGED_IN_USER } from "../../../graphql/queries/personnel";

export interface PlaceOrderModalProps {
  closeModal: () => void
}

const PlaceOrderModal: FC<PlaceOrderModalProps> = ({ closeModal }) => {
  const [error, setError] = useState('');

  const { data: whData} = useQuery(GET_WAREHOUSE_CONTENT_CLIENT);
  const { data: userData } = useQuery(GET_LOGGED_IN_USER);
  const productTypes: IProductType[] = whData.getWarehouseDashboardContent.productTypes;
  const [placeOrder, { data, loading }] = useMutation(PLACE_ORDER, {
    update: PLACE_ORDER_UPDATE(closeModal),
  });

  const productsIncluded: { [key: string]: boolean } = {};
  productTypes.forEach(pt => productsIncluded[pt.name] = false);
  const productQuantities: { [key: string]: number } = {};
  productTypes.forEach(pt => productQuantities[pt.name] = 0);

  const [inputValues, setInputValues] = useState({
    name: '',
    price: '',
    dateTime: `${new Date().getFullYear()}-${`${new Date().getMonth() + 1}`
      .padStart(2, '0')}-${`${new Date().getDate()}`
      .padStart(2, '0')}T${`${new Date().getHours()}`
      .padStart(2, '0')}:${`${new Date().getMinutes()}`
      .padStart(2, '0')}`,
    productsIncluded,
    productQuantities,
  });

  const handleOnCheckboxChange = useCallback((ptName: string) => {
      inputValues.productsIncluded[ptName] = !inputValues.productsIncluded[ptName];
      setInputValues(Object.assign({}, inputValues));
    },
    [inputValues]
  );

  const handleProductQuantityInputChange = useCallback((ptName: string, value: string) => {
      const parsedValue = Number(value);
      if (isNaN(parsedValue)) {
        setErrorBriefly("Quantity value must be number.");
        return;
      }

      inputValues.productQuantities[ptName] = parsedValue;
      setInputValues(Object.assign({}, inputValues));
    },
    [inputValues]
  );

  const handleDateTimeChange = useCallback((e) => {
      inputValues.dateTime = e.target.value;
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
    const filteredProducts = Object.keys(productsIncluded)
      .filter(mtName => inputValues.productsIncluded[mtName]);

    const productsValid = filteredProducts.length && filteredProducts
      .filter(ptName => inputValues.productsIncluded[ptName])
      .every(ptName => inputValues.productQuantities[ptName] > 0);

    const dateValid = new Date(inputValues.dateTime) > new Date();
    if (!dateValid) {
      setErrorBriefly("Date and time must be greater than current date and time");
    } else if (!productsValid) {
      setErrorBriefly("There has to be at least one checked product." +
        "Checked products must have quantities greater than 0");
    }

    return productsValid && dateValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const filteredProducts = Object.keys(productsIncluded)
        .filter(mtName => inputValues.productsIncluded[mtName]);

      const orderSpecs = filteredProducts.map(product => ({
        productTypeId: productTypes.find(pt => pt.name === product)!.id,
        quantity: inputValues.productQuantities[product],
      }));

      placeOrder({
        variables: {
          input: {
            endDate: new Date(inputValues.dateTime),
            personnelId: userData.user.serial,
            orderSpecs,
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
        <Modal.Header>Place order</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            {error && <Message negative><p>{error}</p></Message>}
            <Form.Field style={{ marginTop: '-10px' }}>
              <label htmlFor="endDate">End date</label>
              <input
                type="datetime-local"
                onChange={handleDateTimeChange}
                value={inputValues.dateTime}
              />
            </Form.Field>
            <Form.Field>
              {
                productTypes.map(pt => (
                  <Form.Group inline key={pt.id}>
                    <Form.Checkbox
                      width={8}
                      inline
                      name={`${pt.name}-checkbox`}
                      onChange={() => handleOnCheckboxChange(pt.name)}
                      required={false}
                      checked={inputValues.productsIncluded[pt.name]}
                      label={pt.name}
                    />
                    <Form.Field width={8} style={{ padding: 0}}>
                      <input
                        onChange={(e) => handleProductQuantityInputChange(pt.name, e.target.value)}
                        type="text"
                        placeholder="Quantity"
                        name={`${pt.name}-quantity`}
                        value={inputValues.productQuantities[pt.name]}
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

export default PlaceOrderModal;
