import Item from './Item'

function List() {
    return(
        <>
            <h1>Minha Lista</h1>

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <Item marca = 'Ferrari' ano_lancamento={1985} />
                <Item marca = 'Fiat'  ano_lancamento={2000}/>
                <Item marca = 'Fiat' />
                <Item />
            </ul>

        </>
    )
}

export default List;