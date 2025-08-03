'use client';

import { Box, Text, VStack, HStack, Grid, GridItem } from '@chakra-ui/react';
import AssetTable from '@/components/dashboard/AssetTable';
import FlowDiagram from '@/components/dashboard/FlowDiagram';
import RiskIndicator from '@/components/dashboard/RiskIndicator';

export default function Home() {
  return (
    <Box maxW="8xl" mx="auto" py={6} px={4}>
      <Grid 
        templateColumns={{ 
          base: "1fr",                    // Single column on mobile
          lg: "minmax(300px, 1fr) 2fr"   // Two columns on large screens
        }} 
        gap={8}
      >
        {/* Left Column - Description and Extra */}
        <GridItem>
          <Box 
            bg="white" 
            borderRadius="2xl" 
            p={8}
            // boxShadow="sm"
          >
            <VStack align="stretch" gap={8}>
              {/* Description Section */}
              <Box>
                <Text 
                  fontSize="xl" 
                  fontWeight="bold" 
                  color="brand.primary"
                  mb={6}
                >
                  Description
                </Text>
                <Text color="gray.600" fontSize="sm" lineHeight="1.7">
                  Lorem Ipsum Dolor Sit Amet Consectetur. Aenean Sodales Pellentesque Gravida Nibh Et Magna Faucibus.
                  Dui Commodo Ut Metus Amet Egestas Habitant Viverra. Quisque Fusce Senectus Facilisis Non Diam Leo Nulla
                  Sem Pellentesque. Sit In Vel Sed Cursus Metus Sit Fringilla Vestibulum.
                </Text>
              </Box>

              {/* Extra Section */}
              <Box>
                <Text 
                  fontSize="xl" 
                  fontWeight="bold" 
                  color="brand.primary"
                  mb={6}
                >
                  Extra
                </Text>
                <Text color="gray.600" fontSize="sm" lineHeight="1.7">
                  Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.
                </Text>
              </Box>

              {/* Additional Info Section */}
              <Box pt={6} borderTop="1px" borderColor="gray.200" borderStyle="solid">
                <VStack align="stretch" gap={4}>
                  <HStack justify="space-between">
                    <Text color="gray.600" fontWeight="bold" fontSize="sm">Lorem Ipsum Dolor</Text>
                    <Text color="gray.500">10/19/2017</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text color="gray.600" fontWeight="bold" fontSize="sm">Lorem Ipsum Dolor</Text>
                    <Text color="gray.500" fontSize="sm">Ut</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text color="gray.600" fontWeight="bold" fontSize="sm">Lorem Ipsum Dolor</Text>
                    <Text color="gray.500" fontSize="sm">Eros</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text color="gray.600" fontWeight="bold" fontSize="sm">Lorem Ipsum Dolor</Text>
                    <Text color="gray.500" fontSize="sm"><span style={{ color: 'green' }}>✓</span> Yes</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text color="gray.600" fontWeight="bold" fontSize="sm">Lorem Ipsum Dolor</Text>
                    <Text color="gray.500" fontSize="sm">Sit</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text color="gray.600" fontWeight="bold" fontSize="sm">Lorem Ipsum Dolor</Text>
                    <Text color="gray.500" fontSize="sm">Lorem Ipsum Dolor</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text color="gray.600" fontWeight="bold" fontSize="sm">Lorem Ipsum Dolor</Text>
                    <Text color="gray.500" fontSize="sm">Lorem Ipsum Dolor</Text>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </GridItem>

        {/* Right Column - Flowchart and Table */}
        <GridItem>
          <Box 
            bg="white" 
            borderRadius="2xl" 
            p={8}
            // boxShadow="sm"
          >
            <VStack align="stretch" gap={8}>
              <Text 
                fontSize="xl" 
                fontWeight="bold" 
                color="brand.primary"
              >
                Lorem Lorem Lorem
              </Text>
              <Box 
                bg="gray.50" 
                p={8} 
                borderRadius="xl"
              >
                <FlowDiagram />
              </Box>
              
              <Box>
                <Text 
                  fontSize="xl" 
                  fontWeight="bold" 
                  color="brand.primary"
                  mb={6}
                >
                  Lorem Ipsum Dolor Sit
                </Text>
                <Grid 
                  templateColumns={{ 
                    base: "1fr",           // Stack on mobile
                    lg: "1fr auto"         // Side by side on large screens
                  }} 
                  gap={6} 
                  alignItems="start"
                >
                  <Box 
                    border="1px" 
                    borderColor="gray.200" 
                    borderRadius="xl" 
                    borderStyle="solid"
                    overflow="hidden"
                    h="100%"
                  >
                    <AssetTable />
                  </Box>
                  <Box 
                    border="1px" 
                    borderColor="gray.200" 
                    borderRadius="xl" 
                    borderStyle="solid"
                    overflow="hidden"
                    h="100%"
                  >
                    <RiskIndicator />
                  </Box>
                </Grid>
              </Box>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
