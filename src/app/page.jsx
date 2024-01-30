import { SignInButton, SignOutButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <section className="mt-12  flex w-1/3 flex-col  px-4">
      <h1 className="mb-4 text-4xl font-bold">Welcome to My Website</h1>
      <p className="mb-8 text-lg">Thank you for visiting our homepage!</p>
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold">About Us</h2>
        <p>
          We are a team of passionate developers dedicated to creating amazing
          websites.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold">Services</h2>
        <ul className="ml-8 list-disc">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>UI/UX Design</li>
        </ul>
      </div>
      <div>
        <h2 className="mb-2 text-2xl font-bold">Contact Us</h2>
        <p>
          Feel free to reach out to us for any inquiries or project
          collaborations.
        </p>
      </div>
      {/* <SignOutButton className=" hover:text-gray-300" />
      <SignInButton className="hover:text-gray-300 " /> */}
    </section>
  );
}
