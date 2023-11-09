import Image from 'next/image'
import Link from 'next/link'
interface BlogCardProps {
  blog: any;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => (
  <Link key={blog.id} href={`/blogs/${blog.id}`} className="relative">
    <div className="m-4 rounded-lg bg-white p-4 shadow-lg transition-all border border-mainbrown shadow-mainbrown duration-200 hover:scale-[1.01]  max-w-[450px]">
      <div className="relative h-60 w-full">
        <Image
          src={blog.attributes.cover.data.attributes.formats.small.url}
          alt="Descripción de la imagen"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold  font-josefine leading-tight text-gray-900 text-center">{blog.attributes.title}</h3>
      <p className="mt-2 min-h-[42px] text-sm font-josefine font-extralight text-gray-700 text-center">{blog.attributes.description}</p>
      <div className="mt-4 flex justify-center text-sm font-medium text-mainbrown mb-2  ">
        <p className='text-xl font-josefine font-extralight border-b-2 border-mainbrown'>
          Leer más
        </p>
        
        </div>
    </div>
  </Link>
)

export default BlogCard