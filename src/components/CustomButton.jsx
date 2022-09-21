import "./CustomButton.scss"



const CustomButton = ({onClick ,children}) => {
  return (
    <div className="custon-button-container" onClick={onClick}>
        {children}
    </div>
  )
}

export default CustomButton