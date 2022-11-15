// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { render, screen } from '@testing-library/react';
import {Login} from "./components/Admin/Login";

describe('Texting Login component', () => {
  //Text 1
  it('should render without crashing', () => {
      render(<Login />);
  });
})