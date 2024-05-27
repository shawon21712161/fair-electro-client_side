import { Carousel, Typography } from "@material-tailwind/react";

const Banner = () => {
  return (
    <Carousel className="rounded-xl border-spacing-5">
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/QXFYkxW/photo-collage-png.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Fair Electronics
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              We are Proving our best services for our customers... We are sell
              best electronics item in the town. We have various item like
              watch, laptop, phone, speaker etc.. Every Product have valid warrenty.
            </Typography>
          </div>
        </div>
      </div>
      

     
    </Carousel>
  );
};
export default Banner;
