function outraLista({ item }) {

    return (
        <>
            <h3>Lista de Coisas boas: </h3>

            {/* Forma de fazer um if em react  */}

            {  item.length > 0 ?  (

                item.map((item, index) => (
                    <p key={index}>{item}</p>
                )))

                // Com o MAP eu percorro uma lista, no exemplo acima, ele gera paragrafos com a lista de 
                        //itens passada no app.js, usando props 

                        
            // Forma de fazer um else em react

            :   


            (
            <p>Não há itens na lista ! </p>
            )

            } 


        </>
    )

}
export default outraLista