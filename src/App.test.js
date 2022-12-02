import { render, screen, fireEvent, waitFor, modal } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
//import { eventWrapper } from '@testing-library/user-event/dist/utils';
import UploadFormDialog from './UploadFormDialog';

test('Renders our app', () => {
  render(<App />);
  const linkElement = screen.getByText('Photo Gallery');
  expect(linkElement).toBeInTheDocument();
});

test('See if upload button exists', async () => {
  render(<App />);
  const button = screen.getByText('Upload Photo');
  expect(button.toBeInTheDocument);
});

// const Button = ({onClick, children}) => (
//   <button onClick={onClick}>{children}</button>
// )

// test('Calls handleClickOpen prop when clicked', () => {
//   const handleClickOpen = jest.fn()
//   render(<Button variant="outlined" onClick={handleClickOpen}>Upload Photo</Button>)
//   fireEvent.click(screen.getByText('Upload Photo'))
//   expect(handleClickOpen).toHaveBeenCalledTimes(1)
// });

// test('pop up test', async () => {
//   render(<App />);
//   const button = screen.getByRole("button");
//   userEvent.click(button);
//   expect(screen.getByText("Select Photo"));
// });

// test('pop up test', async () => {
//   render(<App />);
//   fireEvent.click(screen.getByRole("button", {name:"Upload Photo"}));
//   expect(screen.getByText("Select Photo"));
// });

test('pop up test', async () => {
  render(<UploadFormDialog />);
  const button = screen.getByRole("button")
  userEvent.click(button)
  const element = screen.getByTestId('description')
    expect(element).toBeInTheDocument()
});

// test('Click sign in', () => {
//   render(<App />);
//   fireEvent.click(screen.getByText('Upload Photo'));
  
//   expect(uploadPhoto).toHaveBeenCalledTimes(1);
// });


// test('pop up test', async () => {
//   render(<App />);
//   fireEvent.click(screen.getByText('Upload Photo'));
  
// });
// fireEvent.click(screen.getByText('Upload Photo'))

// await waitFor(() =>
//   // getByRole throws an error if it cannot find an element
//   screen.getByRole('heading'),
// )




// test('Tests google sign in popup', () => {
//   render(<App />);
//   const { container } = render(<googleauth />)
//   // container is just a DOM node
//   const button = container.querySelector('button')
// });



//const uploadFormDialogSpy = jest.spyOn(UploadFormDialog, 'UploadFormDialog')

// uploadFormDialogSpy.mockImplementation(()=>{
//   return(<div data-testid="UploadFormDialog"></div>)
// })




