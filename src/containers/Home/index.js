import React, {Component} from 'react'
import MdHome from 'react-icons/lib/md/home'
import styled from 'styled-components'
const Title = styled.h1`
    font-size:1.5em;
    text-align:center;
    color:#4a4a4a;
`
const Wrapper = styled.section`
    padding：4em;
    background:#f0f0f0;
`
class Home extends Component {
    render() {
        return (
            <Wrapper>
                <Title><MdHome size={20}/>Home</Title>
            </Wrapper>
        );
    }
}

export default Home;
