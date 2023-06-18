import React from 'react';
import './TopPartOfHomePage.css';
import { IconButton, Input, Stack, useColorModeValue } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
const TopPartOfHomePage = () => {
  return (
    <div id="TopPartOfHomePage" className="centered">
      <div>
      <div>
        <h1>Discover a place</h1>
      </div>
      <div id="second">
        <h1>you'll love to live</h1>
      </div>

      <div className="button-row">
      <button>Buy</button>
      <button>Rent</button>
      <button>Sold</button>
    </div>
      

      {/* <div class="search-bar">
  <input type="text" class="search-input" placeholder="Search..." />
 
   <button id="boom1">search🔎</button>   
</div> */}

<Stack direction={'row'} gap={0} marginTop={"10px"}>
              <Input
                padding={"24px 0px"}
                placeholder={'Search...'}
                bg={useColorModeValue('white.500', 'white.700')}
                border={0}
                _focus={{
                  bg: 'white.300',
                }}
                width={{base:"200px" ,sm: "180px", md: "250px",lg:"300px" }}
                borderTopRightRadius={"none"}
                borderBottomRightRadius={"none"}
              />
              <IconButton
                bg={useColorModeValue('red.400', 'red.800')}
                color={useColorModeValue('white', 'white.800')}
                _hover={{
                  bg: 'red.600',
                }}
                padding={"24px 0px"}
                width={{base:"60px" ,sm: "50px", md: "60px",lg:"70px" }}
                borderTopLeftRadius={"none"}
                borderBottomLeftRadius={"none"}
                aria-label="Subscribe"
                icon={<BiSearch />}
              />
            </Stack>
      </div>
     
    </div>
  );
};

export default TopPartOfHomePage;
