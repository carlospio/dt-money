import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema >


export function SearchForm(){
    const { 
        register, 
        handleSubmit,
        formState: {isSubmitting}
    
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    function handleSearchTransacrions(data: SearchFormInputs){
        console.log(data)
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