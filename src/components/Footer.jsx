import '../App.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Books App {currentYear}</p>
    </div>
  )
}

export default Footer
