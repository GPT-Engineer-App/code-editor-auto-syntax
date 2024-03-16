import React, { useState } from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Textarea, Flex, Heading, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp, FaFileCode, FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";

const Index = () => {
  const [code, setCode] = useState({
    html: "",
    css: "",
    js: "",
    py: "",
    php: "",
  });

  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.200");

  const handleCodeChange = (language) => (event) => {
    setCode({ ...code, [language]: event.target.value });
  };

  return (
    <Flex direction="column" p={4} bg={bgColor} minH="100vh" color={textColor}>
      <Flex justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="xl">
          Code Editor
        </Heading>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="outline" aria-label="Toggle color mode" />
      </Flex>
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>
            <FaFileCode /> Files
          </Tab>
          <Tab>
            <FaHtml5 /> HTML
          </Tab>
          <Tab>
            <FaCss3Alt /> CSS
          </Tab>
          <Tab>
            <FaJs /> JS
          </Tab>
          <Tab>
            <FaPython /> Python
          </Tab>
          <Tab>
            <FaPhp /> PHP
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Select a file to edit...</p>
          </TabPanel>
          <TabPanel>
            <Textarea placeholder="Write your HTML code here..." value={code.html} onChange={handleCodeChange("html")} />
          </TabPanel>
          <TabPanel>
            <Textarea placeholder="Write your CSS code here..." value={code.css} onChange={handleCodeChange("css")} />
          </TabPanel>
          <TabPanel>
            <Textarea placeholder="Write your JavaScript code here..." value={code.js} onChange={handleCodeChange("js")} />
          </TabPanel>
          <TabPanel>
            <Textarea placeholder="Write your Python code here..." value={code.py} onChange={handleCodeChange("py")} />
          </TabPanel>
          <TabPanel>
            <Textarea placeholder="Write your PHP code here..." value={code.php} onChange={handleCodeChange("php")} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Index;
