import { auth } from "@clerk/nextjs";

export default function AddToCart() {
  async function addItem({ FormData }) {
    "use server";
    const { userId } = auth();
    if (!userId) {
      throw new Error("You must be signed in to add an item to your cart");
    }
    console.log("add item server action", formData);
  }

  return (
    <form action={addItem}>
      <input value={"test"} type="text" name="name" />
      <button type="submit">Add to Cart</button>
    </form>
  );
}
