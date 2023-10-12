import { render, screen } from '@testing-library/react'
import Home from './page.js'
import '@testing-library/jest-dom'


describe('Home', ()=>
{
    it('Renderiza o home',()=>{
            render (<Home />)

            const textoecra = screen.getByText('Exemplo de texto');

    })

    expect(textoecra).toBeInTheDocument()

})



