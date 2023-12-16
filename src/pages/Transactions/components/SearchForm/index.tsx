import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema >


export function SearchForm(){

    const {fetchTransactions} = useContext(TransactionsContext)

    const { 
        register, 
        handleSubmit,
        formState: {isSubmitting}
    
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchTransacrions(data: SearchFormInputs){
       await fetchTransactions(data.query)
    }

    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransacrions)}>
            <input  
                {...register('query')}
                
                type="text" 
                placeholder="Busque por transações" 
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>

                Buscar
            </button>
        </SearchFormContainer>
    )

}