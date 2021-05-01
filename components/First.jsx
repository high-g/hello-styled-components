import styled from 'styled-components'

const First = () => {
  const Container = styled.div`
    font-size: 25px;
    color: black;
  `

  const Text = styled.p`
    font-size: 30px;
    color: ${({ color }) => (color ? color : 'blue')};
  `

  return (
    <Container>
      <div>test</div>
      <Text>Text components</Text>
      <Text color="orange">Text components</Text>
    </Container>
  )
}

export default First
