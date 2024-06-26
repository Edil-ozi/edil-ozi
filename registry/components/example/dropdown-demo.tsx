import Dropdown from "../edil-ozi/dropdown";

const items = [
  {
    name: 'Github',
    link: 'https://github.com/Edil-ozi/edil-ozi',
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com',
  },
  {
    name: 'Google',
    link: 'https://www.google.com',
  },
]

export default function DropdownDemo() {
  return (
    <div className="h-96 flex items-center">
      <Dropdown text='Links' items={items} /> 
    </div>
  )
}
