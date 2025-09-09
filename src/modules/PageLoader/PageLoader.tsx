import Spinner from 'images/circle.svg'

function PageLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">

      <Spinner className=" w-20 h-20 animate-spin" />
    </div>
  )
}
export default PageLoader
