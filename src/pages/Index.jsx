import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Image, Button, Flex, useColorModeValue, useToast, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

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

const Index = () => {
  const [currentDevice, setCurrentDevice] = useState(0);
  const toast = useToast();

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

  const backgroundColors = ["linear-gradient(135deg, #667eea 0%, #764ba2 100%)", "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"];

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 50;

    document.body.style.backgroundPosition = `${moveX / offsetFactor}px ${moveY / offsetFactor}px`;
  };

  return (
    <Box minHeight="100vh" background={`${backgroundColors[currentDevice]} url('https://www.transparenttextures.com/patterns/brushed-alum.png')`} py={12} px={6} onMouseMove={handleMouseMove}>
      <Flex as={motion.div} maxWidth="800px" mx="auto" direction="column" alignItems="center" textAlign="center" height="100vh" justifyContent="center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
        <Heading as="h1" size="2xl" mb={6} color="white" fontWeight="bold" textTransform="uppercase" letterSpacing="wide" fontFamily="'Orbitron', sans-serif">
          {imaginaryDevices[currentDevice].name}
        </Heading>
        <Text fontSize="xl" mb={8} color="white" maxWidth="600px" mx="auto">
          {imaginaryDevices[currentDevice].description}
        </Text>
        <Box as={motion.div} borderRadius="full" overflow="hidden" boxShadow="lg" mb={8} initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
          <Image src={imaginaryDevices[currentDevice].image} alt={imaginaryDevices[currentDevice].name} width="400px" height="400px" objectFit="cover" />
        </Box>
        <Button colorScheme="whiteAlpha" size="lg" onClick={handleButtonClick} _hover={{ bg: "whiteAlpha.800" }}>
          Learn More
        </Button>
      </Flex>
      <Box as="footer" mt={8} textAlign="center" color="white">
        <Text as="span" mr={4}>
          Copyright
        </Text>
        <Text as="span" mr={4}>
          Terms and Conditions
        </Text>
        <Text as="span">Privacy Policy</Text>
      </Box>
    </Box>
  );
};

export default Index;
