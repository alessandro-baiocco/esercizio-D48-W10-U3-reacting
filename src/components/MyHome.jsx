import MyCarousel from "./Mycarousel";

const MyHome = () => {
  return (
    <main>
      <div>
        <MyCarousel search={"harry%20potter"} title={"Trending Now"} />
        <MyCarousel search={"spider%20man"} title={"Watch It Again"} />
        <MyCarousel search={"indiana%20Jones"} title={"New Releases"} />
      </div>
    </main>
  );
};

export default MyHome;
