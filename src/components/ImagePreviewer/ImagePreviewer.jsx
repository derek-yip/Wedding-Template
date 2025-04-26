import { useState, useEffect } from "react";
// import LoadingCard from "@/components/loadingCard";

const createBlobURL = (blob) => {
  return blob ? URL.createObjectURL(blob) : "";
};

function ImagePreviewer({ imageUrl, alt, className, onClick }) {
  const [loading, setLoading] = useState(true);
  const [imageBlob, setImageBlob] = useState(null);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(imageUrl);
        if (response.ok) {
          const contentType = response.headers.get("content-type");
          if (contentType === "image/jpeg" || contentType === "image/png") {
            const blob = await response.blob();
            setImageBlob(blob);
          } else {
            console.error(
              "Invalid content type. Expected image/jpeg or image/png."
            );
            setError(true);
          }
        } else {
          console.error("Error fetching image:", response.status);
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching image:", error);
        setLoading(false);
        setError(true);
      }
    };

    loadImage();
  }, [imageUrl]);

  return (
    <>
      {!isError && (
        <>
          {loading ? (
            // <LoadingCard />
            <>LOADING</>
          ) : (
            <img
              src={createBlobURL(imageBlob)}
              alt={alt}
              className={className}
              onClick={onClick}
            />
          )}
        </>
      )}
    </>
  );
}

export default ImagePreviewer;
