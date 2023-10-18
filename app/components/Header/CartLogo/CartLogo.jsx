"use client";
import ShopCart from "@/app/assets/img/cart-ant.svg";
import useCartStore from "@/store/useCartStore";
import Image from "next/image";
import Link from "next/link";
import "./CartLogo.scss";

function CartLogo() {
  const { items } = useCartStore();
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  console.log(totalQuantity > 0);
  return (
    <div className="cart-logo">
      <Link href="/cart">
        <Image src={ShopCart} width={24} height={24} alt="Shop-Cart" />
        <span className={`cart-quantity ${totalQuantity > 0 ? "active" : ""}`}>
          {totalQuantity}
        </span>
      </Link>
    </div>
  );
}

export default CartLogo;
