import { renderRouter, screen } from 'expo-router/testing-library'
import { fireEvent } from '@testing-library/react-native'
import Home from '../../app/index'
import About from '../../app/about'

/*
  > Triple AAA
  > Arrange: Configuração, preparação do teste
  > Act: Acao que queremos testar
  > Assert: Resultado esperado (expect)

*/


describe("Testing Home Page", () => {

  it("should render the link to the About screen", () => {
    renderRouter({
      index: Home
    })

    expect(screen.getByText("Ir para About")).toBeTruthy();
  })


  it("should navigate to the /about page when clicking the link", async () => {

    renderRouter({
      index: Home,
      about: About
    }, {
      initialUrl: "/"
    })

    fireEvent.press(screen.getByText("Ir para About"))
    expect(await screen.findByText("Pagina Sobre")).toBeTruthy();

  })


  it("should display Sujeito Programador when clicking the Acessar button", async () => {
    renderRouter({
      index: Home,
    }, {
      initialUrl: "/"
    })

    expect(screen.queryByText("Sujeito Programador")).toBeNull();


    const button = screen.getByText("Acessar");
    fireEvent.press(button);

    expect(await screen.findByText("Sujeito Programador")).toBeTruthy();


  })


})