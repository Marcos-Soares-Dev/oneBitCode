import "./style.module.css" 

export default function Conteiner(props) {
    return (
        <>
        <div className="conteiner">
            {props.children}
        </div>
        </>
    )
}