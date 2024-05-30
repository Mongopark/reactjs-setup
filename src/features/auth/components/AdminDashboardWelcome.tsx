import welcome from '../../../assets/images/welcome.png';
import { ReactNode } from 'react';

export default function AdminDashboardWelcome() {
  return (
    <section className="flex flex-col items-center justify-center bg-[#EEEAF2] py-6 md:py-9 px-4 md:px-8 rounded-lg md:rounded-large">
      <h1 className="text-2xl font-bold text-center">Welcome to the Typescript RTK Auth App</h1>
      <p className="text-center text-sm">
      An App to test the funtionality of a backend program, with backend APIs
      </p>
      <img
        src={welcome}
        style={{
          objectFit: 'cover'
        }}
        alt="Zynopay App"
        className="py-4 md:py-6"
      />
      <ul className="grid grid-cols-2 w-full gap-y-3">
        <AdminDashboardWelcomeExtra>Authentication</AdminDashboardWelcomeExtra>
        <AdminDashboardWelcomeExtra>List Products</AdminDashboardWelcomeExtra>
        <AdminDashboardWelcomeExtra>Create Product</AdminDashboardWelcomeExtra>
        <AdminDashboardWelcomeExtra>Logout</AdminDashboardWelcomeExtra>
      </ul>
      <p className="mt-4 w-full text-end text-xs text-light italic">and many more...</p>
    </section>
  );
}

function AdminDashboardWelcomeExtra({ children }: { children: ReactNode }) {
  return (
    <li className="flex flex-row gap-2 items-center text-2xs">
      <div className="w-[0.375rem] h-[0.375rem] rounded-full bg-black" />
      <span>{children}</span>
    </li>
  );
}
