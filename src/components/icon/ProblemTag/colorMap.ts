type ColorMap = {
  [key in ProblemType]: string;
};

const colorMap: ColorMap = {
  시간초과: "#FF4568",
  "메모리 초과": "#9D68E7",
  에러: "#60B068",
  해결방법: "#4B79D9",
  반례요청: "#28B7AE",
  왜맞틀: "#FF7D45",
  왜틀맞: "#F6A929",
  기타: "#5B5B5B",
};

export default colorMap;
