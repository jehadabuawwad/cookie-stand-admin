const Footer = ({ stands }) => {
  return (
    <footer className='p-4' style={{ backgroundColor: '#15B981' }}>
      <span>{`${stands ? Object.keys(stands).length : 0} locations world wild`}</span>
    </footer>
  )
}

export default Footer
