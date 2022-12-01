import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import App from './App';
import UploadFormDialog from './UploadFormDialog'

//const uploadFormDialogSpy = jest.spyOn(UploadFormDialog, 'UploadFormDialog')

// uploadFormDialogSpy.mockImplementation(()=>{
//   return(<div data-testid="UploadFormDialog"></div>)
// })

test('pop up test', async () => {
  render(<UploadFormDialog />);
  const button = screen.getByRole("button")
  userEvent.click(button)
  //expect(screen.getByTestId("UploadFormDialog")).toBeInTheDocument()
    expect(screen.getByTestId("description")).toBeInTheDocument()
});