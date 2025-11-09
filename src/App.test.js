import { render, screen } from '@testing-library/react';
import App from './App';

test('renders frontend message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Frontend says: Hello from React!/i);
  expect(linkElement).toBeInTheDocument();
});
