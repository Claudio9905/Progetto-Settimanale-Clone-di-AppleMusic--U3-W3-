import SectionHome1 from "./SectionHome1";
import SectionHome2 from "./SectionHome2";
import SectionHome3 from "./SectionHome3";

const MainHome = () => {
  return (
    <>
      <div className="bg-dark text-light">
        <SectionHome1 />
        <SectionHome2 />
        <SectionHome3 />
      </div>
    </>
  );
};

export default MainHome;
