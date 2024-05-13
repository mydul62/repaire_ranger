import { Helmet } from "react-helmet";

const DynamicTitle = ({title}) => {
  return (
    <div>
       <Helmet>
             
                <title >RepaireRanger/{title}</title>
               
            </Helmet>
    </div>
  );
};

export default DynamicTitle;