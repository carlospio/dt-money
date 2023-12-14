import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer, TransactionsTable, PriceHighLight  } from "./styles";


export function Transactions(){
    return( 
    <div> 
        <Header />
        <Summary />

        <TransactionsContainer>
        <TransactionsTable>
            <tbody>
                <tr>
                    <td width="40%">Desenvolvimento de site</td>
                    <td>
                        <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
                    </td>
                    <td>Venda</td>
                    <td>13/04/2022</td>
                </tr>

                <tr>
                    <td width="40%">Ifood</td>
                    <td>
                        <PriceHighLight variant="outcome">- R$ 59,90</PriceHighLight>
                    </td>
                    <td>Alimentação</td>
                    <td>10/04/2022</td>
                </tr>

             
            </tbody>
        </TransactionsTable>
        </TransactionsContainer>


    </div>
    )
}