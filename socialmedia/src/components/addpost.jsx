import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Button, Stack } from "@chakra-ui/react";

function AddPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Example: Here you can implement logic to send data to your backend
    // For demonstration purposes, let's just log the data
    console.log({ title, body });
    // Clear form fields after submission
    setTitle('');
    setBody('');
  };

  return (
    <Box maxWidth="500px" mx="auto" mt="10" p="6" borderWidth="1px" borderRadius="lg">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="post-title">
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          
          <FormControl id="post-body">
            <FormLabel>Body</FormLabel>
            <Textarea
              placeholder="Enter post content"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={6}
            />
          </FormControl>

          <Button colorScheme="teal" type="submit">
            Add Post
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default AddPost;
