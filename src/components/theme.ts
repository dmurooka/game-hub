import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfitg = {
   initialColorMode: 'dark' 
};

const theme = extendTheme({ config }); 

export default theme;