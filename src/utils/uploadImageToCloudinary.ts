import axios from "axios";

const uploadImageToCloud = async (file: any) => {
  const formData = new FormData();
    formData.append("upload_preset", "flat_finder24");
    formData.append("file", file);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response?.data?.secure_url;
    } catch (err: any) {
      console.log(err);
    }
};

export default uploadImageToCloud;
