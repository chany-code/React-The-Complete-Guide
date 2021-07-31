import Greeting from "./Greeting";
import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Greeting component', ()=>{

    test('renders Hello World as a text', ()=>{
        // Arrange
        render(<Greeting />)

        // Act
        // ... nothing

        // Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument()
    })

    test('renders "It\'s good to see you!" if the button was NOT clicked', () => {
        render(<Greeting />)

        expect(screen.getByText('It\'s good to see you!')).toBeInTheDocument()
        expect(screen.queryByText('Changed!')).not.toBeInTheDocument()
    });

    test('renders "Changed!" and hides "It\'s good to see you!" if the button was clicked', () => {
        render(<Greeting />)

        //fireEvent.click(screen.getByText('Change Text!'))
        userEvent.click(screen.getByRole('button'))

        expect(screen.queryByText('It\'s good to see you!')).not.toBeInTheDocument()
        expect(screen.getByText('Changed!')).toBeInTheDocument()
    });
})