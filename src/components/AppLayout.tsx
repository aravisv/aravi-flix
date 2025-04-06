import { BACKGROUND_IMG_URL } from "../constants";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${BACKGROUND_IMG_URL})`,
      }}
      className="h-[100vh]"
    >
      {children}
    </div>
  );
};

export default AppLayout;
