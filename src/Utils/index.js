// image upload
import axios from "axios";
export const imageUpload = async (image) => {
  const formData = new FormData();
    formData.append("image", image);
   try{
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_iMGBB_API_KEY}`,
      formData
    )
    return data.data.display_url;
   }catch(err){
    console.log(err);
    
   }
};
