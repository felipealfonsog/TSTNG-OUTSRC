/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  bold?: bool,
  inverted?: bool,
};

const Text = styled.span`
  color: ${props => props.inverted ? props.theme.colors.white : props.theme.colors.black};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize.text};
  font-weight: ${props => props.bold ? props.theme.fontWeight : 'normal'};
  line-height: ${props => props.theme.lineHeight };
`;

export default (props: Props) => <Text {...props} />;