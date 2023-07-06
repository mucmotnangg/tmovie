import './Button.css'

export default function Button({children,style}) {
  return (
    <button className="button" style={style}>{children}</button>
  )
}
