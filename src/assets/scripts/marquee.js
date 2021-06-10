import Limarquee from "limarquee";

const tickerText = $(".ticker-wrapper.text"),
  tickerImgs = $(".ticker-wrapper.images");

const recognition = () => {
  const limarquee = new Limarquee(".recognition__content-row");
  limarquee.render({
    circular: true,
    loop: -1,
    drag: false,
    hoverstop: false,
    scrollamount: 80,
  });
};

recognition();
// aboutCompanyTicker();
