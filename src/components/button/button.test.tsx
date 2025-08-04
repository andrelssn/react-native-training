import { render, fireEvent } from '@testing-library/react-native'
import { Button } from './button'

describe("Button Component", () => {
  it("should be render button with Text Clique Aqui", () => {
    const functioMock = jest.fn();
    const { getByText } = render(<Button title="Clique Aqui" onPress={functioMock} />)

    expect(getByText("Clique Aqui")).toBeTruthy();

  })

  it("should be render button and call onPress", () => {
    const functioMock = jest.fn();

    const { getByText, getByTestId } = render(<Button title="Clique Aqui" onPress={functioMock} />)

    expect(getByText("Clique Aqui")).toBeTruthy();

    fireEvent.press(getByTestId("button-test"))

    expect(functioMock).toHaveBeenCalled();

  })
})