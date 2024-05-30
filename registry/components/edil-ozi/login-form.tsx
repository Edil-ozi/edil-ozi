"use client"
import { FC, useState } from "react";

interface Props {
  classes?: string
}

const LoginForm: FC<Props> = ({ classes }) => {
  const [form, setForm] = useState({ email: '', password: '' })

  const inputs = [
    {
      title: 'Email',
      placeholder: 'sample@gmail.com',
      type: 'email',
      classes: ''
    },
    {
      title: 'Password',
      placeholder: '••••••••',
      type: 'password',
      classes: ''
    }
  ]

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('form', form)
    // submit form here...
  }
  return (
    <section className="z-[10] w-full mx-4">
      <div className="flex flex-col items-center justify-center mx-auto w-full ">
        <div className={`bg-slate-100 text-black  dark:bg-slate-900 dark:text-white rounded-md shadow-lg w-full mx-12 md:w-[480px] ${classes}`}>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {inputs.map(({ title, type, placeholder, classes }) => (
                <div key={title}>
                  <label htmlFor={title} className="block mb-2 text-sm font-medium">{title}</label>
                  <input onChange={(e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))} type={type} name={type} id={title} className={`bg-gray-100 text-black border border-gray-300 sm:text-sm rounded-md outline-none focus:ring focus:ring-green-500 block w-full p-2.5 ${classes}`} placeholder={placeholder} />
                </div>
              ))}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border bg-gray-100 rounded outline-none focus:ring focus:ring-green-500 " />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium hover:underline outline-none focus:ring focus:ring-green-500">Forget password?</a>
              </div>
              <button type="submit" className="w-full font-medium bg-green-500 text-black rounded-md text-sm px-5 py-2.5 text-center outline-none focus:ring focus:ring-green-600">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm