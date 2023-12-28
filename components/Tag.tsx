import { slug } from 'github-slugger'
import Link from 'next/link'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-designColor hover:text-designColorHover dark:hover:text-designColorHover"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
