import './Colaborador.css'

const Colaborador = (props)=>{
    return(
        <div className='colaborador'>
            <div className='cabeca'>
                <img src='https://github.com/Ed1Abreu.png' alt='Edvanderson Abreu'/>
            </div>
            
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador