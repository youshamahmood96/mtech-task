import {render,screen} from '@testing-library/react'
import {BrowserRouter as Router} from "react-router-dom";

import NotFound from '../../Components/NotFound/NotFound'

test('renders Return to home', () => {
    render(<Router><NotFound /></Router>);
    const linkElement = screen.getByText(/No Problem! we got you/i);
    expect(linkElement).toBeInTheDocument();
  });