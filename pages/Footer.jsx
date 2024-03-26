export default function Footer() {
  return (
    <div className="flex justify-center flex-col bg-gray-800 text-white pb-16">
      <h6 className="flex justify-center mt-4">Contact me:</h6>
      <div className="flex justify-center mt-2">
        <div>Phone: &nbsp; </div>
        <div>070 464 82 52</div>
      </div>
      <div className="flex justify-center mt-2">
        <div>E-mail: &nbsp;</div>
        <a href="mailto:Kevin.sodini@hotmail.com">Kevin.sodini@hotmail.com</a>
      </div>
      <div className="links flex justify-center space-x-6 pt-4">
        <a href="https://www.linkedin.com/in/kevin-sodini-80478423a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Rapturee" target="_blank" rel="noopener noreferrer">Github</a>
        {/* Other links */}
      </div>
    </div>
  );
}