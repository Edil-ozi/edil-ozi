"use client";
import { FC, useState } from "react";

interface Props {
  classes?: string;
}

const LoginForm: FC<Props> = ({ classes }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const inputs = [
    {
      title: "Email",
      placeholder: "sample@gmail.com",
      type: "email",
      classes: "",
    },
    {
      title: "Password",
      placeholder: "••••••••",
      type: "password",
      classes: "",
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("form", form);
    // submit form here...
  };
  return (
    <section className="z-[10] mx-4 w-full">
      <div className="mx-auto flex w-full flex-col items-center justify-center">
        <div
          className={`mx-12 w-full rounded-md bg-slate-100 text-black shadow-lg dark:bg-slate-900 dark:text-white md:w-[480px] ${classes}`}
        >
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight">Login</h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
            >
              {inputs.map(({ title, type, placeholder, classes }) => (
                <div key={title}>
                  <label
                    htmlFor={title}
                    className="mb-2 block text-sm font-medium"
                  >
                    {title}
                  </label>
                  <input
                    autoComplete="false"
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    type={type}
                    name={type}
                    id={title}
                    className={`block w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-black outline-none focus:ring focus:ring-slate-400 sm:text-sm ${classes}`}
                    placeholder={placeholder}
                  />
                </div>
              ))}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="h-4 w-4 rounded border bg-gray-100 outline-none focus:ring focus:ring-slate-400"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember">Remember me</label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium outline-none hover:underline focus:ring focus:ring-slate-400"
                >
                  Forget password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-black outline-none focus:ring focus:ring-gray-200"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
