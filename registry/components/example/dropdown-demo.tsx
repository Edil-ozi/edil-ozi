import Dropdown from "../edil-ozi/dropdown";

const items = [
  {
    name: 'Github',
    link: 'https://github.com/Edil-ozi/edil-ozi',
  },
  {
    name: 'Twitter',
    link: 'https://x.com/shatlyk1415',
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com',
  },
]

export default function DropdownDemo() {
  return (
    <div className="h-96 flex items-center">
      <Dropdown text='Links' items={items} /> 
    </div>
  )
}
