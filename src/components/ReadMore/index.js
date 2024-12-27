import {useState} from 'react'

import {
  Container,
  Heading,
  Text1,
  Image,
  Text,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    setIsExpanded(prevState => !prevState)
  }

  return (
    <Container>
      <Heading>React Hooks</Heading>
      <Text1>Hooks are a new addition to react</Text1>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Text>
        {isExpanded
          ? reactHooksDescription
          : `${reactHooksDescription.substring(0, 170)}`}
      </Text>
      <Button type="button" onClick={toggleReadMore}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </Button>
    </Container>
  )
}

export default ReadMore
