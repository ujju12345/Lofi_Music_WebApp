import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://lofigirl.com/wp-content/uploads/2023/02/DAY_UPDATE_ILLU.jpg" },
  { url: "https://i.ytimg.com/vi/0MiR7bC9B5o/maxresdefault.jpg" },
  { url: "https://d3bzyjrsc4233l.cloudfront.net/news/lofimain.jpg" },
  { url: "https://i.ytimg.com/vi/uHxgR7GzRNY/maxresdefault.jpg" }
];

const ImageCarousel = () => {
  return (
    <div className="w-full h-full">
      <SimpleImageSlider
        width='100%'
        height="100%"
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default ImageCarousel;