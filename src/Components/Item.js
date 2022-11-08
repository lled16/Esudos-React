import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>
                {marca} - {ano_lancamento}
            
            </li>
            
        
        </>
    )
}

Item.prototypes ={
    marca : PropTypes.string.isRequired,
    ano_lancamento : PropTypes.number
}

Item.defaultProps = {
    marca : "Marca não preenchida !",
    ano_lancamento : 0
}
export default Item;