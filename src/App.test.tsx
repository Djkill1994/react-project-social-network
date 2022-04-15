import {render, screen} from '@testing-library/react';
import ReactJsApp from "./App";

test('renders learn react link', () => {
    render(<ReactJsApp/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
