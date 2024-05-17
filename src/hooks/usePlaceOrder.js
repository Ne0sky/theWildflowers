import { useState } from "react";
import toast from "react-hot-toast";

const usePlaceOrder = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const placeOrder = async (order) => {
    setIsPending(true);
    setError(null);

    try {
      const res = await fetch("https://sproutz.vercel.app/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (!res.ok) {
        const errorData = await res.json();
        toast.error("Failed to place order: " + (errorData.message || ""));
        throw new Error("Failed to place order: " + (errorData.message || ""));
      }

      const data = await res.json();
      setIsPending(false);
      toast.success("Order placed successfully");
      return data;

    } catch (err) {
      setIsPending(false);
      setError(err.message);
      toast.error(err.message);
      throw err; 
    }
  };

  return { isPending, error, placeOrder };
};

export default usePlaceOrder;
