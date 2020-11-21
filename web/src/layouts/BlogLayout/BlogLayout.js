import Header from 'src/components/Header/Header'

const BlogLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
