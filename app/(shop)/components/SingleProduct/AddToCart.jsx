"use client";
import useCartStore from "@/store/useCartStore";
import Button from "@mui/material/Button";

const AddToCArt = ({ id }) => {
  const { addItem } = useCartStore();
  return (
    <Button variant="contained" size="small" onClick={() => addItem(id)}>
      Add to cart
    </Button>
  );
};

export default AddToCArt;
