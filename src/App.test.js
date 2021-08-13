import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
    render(<App />);

    const headingDisplay = screen.getByText(/discover your favorite gif/i);
  

    expect(headingDisplay).toBeInTheDocument();
    expect(screen.getByText(/search/i)).toBeInTheDocument();
    expect(screen.getByText(/gif/i)).toBeInTheDocument();
});

test('if search button clicked, display gif', () => {
    render(<App />);

    const searchButton = screen.getByText(/search/i)

    userEvent.click(searchButton);

    
})

