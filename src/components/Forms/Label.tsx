interface Props {
  name: string
}

const Label = (props: Props) => {
  return <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>{props.name}</label>
}

export default Label
