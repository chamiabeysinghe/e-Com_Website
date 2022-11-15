import { render, screen } from '@testing-library/react';
import Login from "../components/Admin/Login";

describe("Login", () =>{
    test('renders lcorrectly', () => {
        render(<Login />);
        const nameElement = screen.getByRole("textbox");
        expect(nameElement).toBeInTheDocument();
      });

})

