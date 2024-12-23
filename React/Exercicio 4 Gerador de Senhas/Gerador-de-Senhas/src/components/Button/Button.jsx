import "./style.module.css" 

export default function Button(props) {
    return (
        <>
        <button className="button">{props.children}</button>
        </>
    )
}