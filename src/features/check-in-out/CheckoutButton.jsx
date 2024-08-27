/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingout } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      isLoading={isCheckingout}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;