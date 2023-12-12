import { useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Home() {
  const [attributes, setAttributes] = useState();
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleOnGenerate(e) {
    e.preventDefault();

    setIsLoading(true);
    setAttributes(undefined);
    setImage(undefined);
    setError(undefined);

    try {
      const { image } = await fetch('/api/image', {
        method: 'POST',
        body: JSON.stringify({
          description: ""
        })
      }).then(res => res.json());
      
      setImage(image);
    } catch(e) {
      setError(e.message);
    }

    setIsLoading(false);
  }

  return (
    <>
      <Button onClick={handleOnGenerate} disabled={isLoading}>Generate</Button>
      <Card attributes={attributes} image={image} isLoading={isLoading} />
    </>
  );
}
