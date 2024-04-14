import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Image, Button, Flex, useToast } from "@chakra-ui/react";

const imaginaryDevices = [
  {
    name: "Holographic Smartwatch",
    description: "Experience the future on your wrist with our holographic smartwatch.",
    image: "https://images.unsplash.com/photo-1625314897518-bb4fe6e95229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwaG9sb2dyYXBoaWMlMjBzbWFydHdhdGNofGVufDB8fHx8MTcxMzEwMzkwNXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Mind-Controlled Earbuds",
    description: "Control your music and calls with the power of your thoughts.",
    image: "https://images.unsplash.com/photo-1667681362383-d9239c8fa2b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaW5kJTIwY29udHJvbGxlZCUyMGVhcmJ1ZHN8ZW58MHx8fHwxNzEzMTAzOTA1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Augmented Reality Contact Lenses",
    description: "Enhance your vision and interact with digital content seamlessly.",
    image: "https://images.unsplash.com/photo-1592478457432-38ed2af3ee03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdWdtZW50ZWQlMjByZWFsaXR5JTIwY29udGFjdCUyMGxlbnNlc3xlbnwwfHx8fDE3MTMxMDM5MDV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Self-Charging Smartphone",
    description: "Never worry about battery life again with our self-charging smartphone.",
    image: "https://images.unsplash.com/photo-1596742578443-7682ef5251cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZWxmJTIwY2hhcmdpbmclMjBzbWFydHBob25lfGVufDB8fHx8MTcxMzEwMzkwNnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const deviceBackgrounds = {
  "Holographic Smartwatch": "linear-gradient(135deg, #1a365d 0%, #153e75 50%, #2a69ac 100%)",
  "Mind-Controlled Earbuds": "linear-gradient(135deg, #2a69ac 0%, #153e75 50%, #1a365d 100%)",
  "Augmented Reality Contact Lenses": "linear-gradient(135deg, #153e75 0%, #1a365d 50%, #2a69ac 100%)",
  "Self-Charging Smartphone": "linear-gradient(135deg, #2a69ac 0%, #1a365d 50%, #153e75 100%)",
};

const Index = () => {
  const [currentDevice, setCurrentDevice] = useState(0);
  const toast = useToast();

  const currentBackground = deviceBackgrounds[imaginaryDevices[currentDevice].name];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDevice((prevDevice) => (prevDevice + 1) % imaginaryDevices.length);
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleButtonClick = () => {
    toast({
      title: "Dummy Website",
      description: "This is just a dummy website showcasing imaginary devices.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box minHeight="100vh" bg={currentBackground} py={12} px={6}>
      <Flex maxWidth="800px" mx="auto" direction="column" alignItems="center" textAlign="center" height="100vh" justifyContent="center">
        <Heading as="h1" size="2xl" mb={6} color="white" fontWeight="bold" textTransform="uppercase" letterSpacing="wide">
          {imaginaryDevices[currentDevice].name}
        </Heading>
        <Text fontSize="xl" mb={8} color="white" maxWidth="600px" mx="auto">
          {imaginaryDevices[currentDevice].description}
        </Text>
        <Box borderRadius="full" overflow="hidden" boxShadow="lg" mb={8}>
          <Image src={imaginaryDevices[currentDevice].image} alt={imaginaryDevices[currentDevice].name} width="400px" height="400px" objectFit="cover" />
        </Box>
        <Button colorScheme="whiteAlpha" size="lg" onClick={handleButtonClick} _hover={{ bg: "whiteAlpha.800" }}>
          Learn More
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;
