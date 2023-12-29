interface imgsPathProps {
  arrayLength: number;
  imgExt: ".svg" | ".png" | ".jpg";
  srcFolder: string;
}

const imgsPath = ({ arrayLength, imgExt, srcFolder }: imgsPathProps) => {
  const imgsArray = Array.from({ length: arrayLength }, (_, index) => {
    const path = require(`@/app/assets/imgs/${srcFolder}/${
      index + 1
    }${imgExt}`) as string;

    return JSON.parse(JSON.stringify(path));
  });

  return imgsArray;
};
export default imgsPath;
