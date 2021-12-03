const Footer = ({ stands }) => {
  return (
    <footer  className="flex justify-between w-screen p-5 bg-green-500 " >
      <span>{`${stands ? Object.keys(stands).length : 0} locations world wild`}</span>
    </footer>
  )
}

export default Footer
