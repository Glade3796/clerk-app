import { currentUser } from "@clerk/nextjs";

export default function PageDashboard({ children }) {
  async function addHobby(FormData) {
    "use server";
    const user = await currentUser();
    if (!user) {
      throw new Error("You must be signed in to use this feature");
    }

    const serverData = {
      formData: "formData",
    };
    console.log(
      "add item server action completed with user details ",
      serverData,
    );
  }
  return (
    <section>
      <h1>YA Dashboard!!!</h1>
      {children}
      <form action={addHobby}>
        <input value={"soccer"} type="text" name="hobby" />
        <button type="submit">Submit your hobby</button>
      </form>
    </section>
  );
}
