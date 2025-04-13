type VideoTitleProps = {
  id: string;
  title: string;
  description: string;
};

const VideoTitle = (props: VideoTitleProps) => {
  const { id, title, description } = props;
  return (
    <div className="mt-[10vh] mb-2 " id={id}>
      <h1 className="text-5xl ">{title}</h1>
      <p className="mt-4 w-2/6 text-lg">{description}</p>
      <button className="w-[110px] h-10 rounded-md bg-gray-400 mr-2">
        ▶️ Play Now
      </button>
      <button className="w-[110px] h-10 rounded-md bg-gray-400">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
