import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer, TransactionsTable, PriceHighLight } from "./styles";
import { SearchForm } from "./components/SearchForm";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Transactions() {

    const {transactions} = useContext(TransactionsContext)

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
                                        <PriceHighLight variant={transaction.type}>{transaction.price}</PriceHighLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}


                    

                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>


        </div>
    )
}