import React, { MouseEventHandler } from 'react';
import { Button as ChakraButton, useColorMode, Box, useColorModeValue } from '@chakra-ui/react';
import { ButtonProps } from '@chakra-ui/button';

export interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { colorMode } = useColorMode();
  const background = useColorModeValue('white', 'cardbgdark');
  if (props.variant === 'outline') {
    return (
      <Box
        type={props.type}
        className={props.className}
        bgGradient={colorMode === 'light' ? 'linear(to-r, #0F62FF, #6B5BD2)' : 'transparent'}
        _hover={{
          bgGradient: 'linear(to-r, #0F62FF, #6B5BD2)',
        }}
        border={colorMode === 'light' ? '' : '1px solid white'}
        p="1px"
        w={props.w}
        borderRadius="5px"
      >
        <Box
          as={ChakraButton}
          {...(props as unknown)}
          backgroundColor={background}
          w="100%"
          h="100%"
          py={2}
          px={6}
          color={colorMode === 'light' ? 'blue' : 'white'}
          borderRadius="5px"
          onClick={(props.onClick as unknown) as MouseEventHandler<HTMLDivElement>}
        >
          {props.children}
        </Box>
      </Box>
    );
  }

  if (props.variant === 'ghost') {
    return <ChakraButton {...props}>{props.children}</ChakraButton>;
  }

  return (
    <Box
      as={ChakraButton}
      {...(props as unknown)}
      type={props.type}
      className={props.className}
      py={2}
      px={6}
      width={props.width}
      color="white"
      fontWeight="bold"
      borderRadius="md"
      w={props.w}
      bgGradient="linear(to-r, #0F62FF, #6B5BD2)"
      _hover={{
        bgGradient: 'linear(to-r, #0F62FF, #6B5BD2)',
      }}
      onClick={(props.onClick as unknown) as MouseEventHandler<HTMLDivElement>}
      rightIcon={props.rightIcon}
      leftIcon={props.leftIcon}
    >
      {props.children}
    </Box>
  );
};

export default Button;
