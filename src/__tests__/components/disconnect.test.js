import Disconnect from '../../pages/disconnect/disconnect'
import { BrowserRouter } from 'react-router-dom'
import ShallowRenderer from 'react-test-renderer/shallow' // ES6

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('renders footer', () => {
  const renderer = new ShallowRenderer()
  renderer.render(
    <BrowserRouter>
      <Disconnect />
    </BrowserRouter>
  )
  const result = renderer.getRenderOutput()

  expect(result.type).toBeDefined()
  expect(result.props.children).toEqual(<Disconnect />)
})
