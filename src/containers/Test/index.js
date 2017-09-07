import React, {Component} from 'react';
import MdTextFields from 'react-icons/lib/md/text-fields'
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
class Test extends Component {
    render() {
        return (
            <Wrapper>
                <Title><MdTextFields size={20}/>Test</Title>
            </Wrapper>
        );
    }
}

export default Test;
