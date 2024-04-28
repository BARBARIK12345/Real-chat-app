import React from 'react'

const Imageuplaod = () => {

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
      };
    
      const uploadImage = () => {
        const formData = new FormData();
        formData.append('image', image);
        socket.emit('sendImage', formData);
      };
      
  return (
    <div>
       <Input type="file" onChange={handleImageUpload} />
        <Button onClick={uploadImage} colorScheme="blue">
          Upload Image
        </Button>
    </div>
  )
}

export default Imageuplaod
