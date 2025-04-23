type VideoTitleProps = {
  title: string;
  description: string;
};

const VideoTitle = (props: VideoTitleProps) => {
  const { title, description } = props;
  return (
    <div className="mb-16 pl-[60px] text-white absolute top-[35vh]">
      <h1 className="text-5xl ">{title}</h1>
      <p className="my-6 w-2/6 text-lg">{description}</p>
      <button className="w-[110px] h-10 rounded-md bg-gray-400 mr-2 opacity-90 cursor-pointer">
        ▶️ Play Now
      </button>
      <button className="w-[110px] h-10 rounded-md bg-gray-400 opacity-90 cursor-pointer">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
