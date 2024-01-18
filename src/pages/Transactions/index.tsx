import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer, TransactionsTable, PriceHighLight } from "./styles";
import { SearchForm } from "./components/SearchForm";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";

export function Transactions() {

    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
    })

   

    return (
        <div>
            <Header />

            <Summary />



            <TransactionsContainer>

                <SearchForm />
                <TransactionsTable>

                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="40%">{transaction.description} </td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>
                                            {transaction.type == 'outcome' && '- '}
                                            {priceFormatter.format(transaction.price)}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{dateFormatter.format(new Date(transaction.createdAt))} </td>
                                </tr>
                            )
                        })}


                    

                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>


        </div>
    )
}