import * as React from "react";

const ThumbsUp = (props: any) => {
  const { fill } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
      <path
        fill={fill || "#000"}
        d="M1.36 9.495v7.157h3.03l.153.018c2.813.656 4.677 1.129 5.606 1.422 1.234.389 1.694.484 2.53.54.627.043 1.338-.198 1.662-.528.179-.182.313-.556.366-1.136a.682.682 0 0 1 .406-.563c.249-.108.456-.284.629-.54.16-.234.264-.67.283-1.301a.681.681 0 0 1 .339-.57c.582-.337.87-.717.93-1.163.066-.493-.094-1.048-.513-1.68a.683.683 0 0 1 .176-.936c.4-.282.62-.674.676-1.23.088-.886-.477-1.541-1.756-1.672a9.42 9.42 0 0 0-3.394.283.68.68 0 0 1-.786-.95c.5-1.058.778-1.931.843-2.607.085-.897-.122-1.547-.606-2.083-.367-.406-.954-.638-1.174-.59-.29.062-.48.23-.725.818-.145.348-.215.644-.335 1.335-.115.656-.178.952-.31 1.34-.394 1.176-1.363 2.395-2.664 3.236-.912.589-1.9 1.05-2.937 1.37a.676.676 0 0 1-.2.03h-2.23Zm-.042 8.52c-.323.009-.613-.063-.856-.233-.31-.217-.456-.559-.46-.953l.004-7.323c-.034-.39.08-.748.353-1.014.255-.25.588-.368.94-.36h2.185c.884-.282 1.726-.68 2.506-1.182 1.048-.678 1.82-1.65 2.115-2.526.1-.302.155-.552.257-1.14.138-.789.224-1.156.422-1.628.41-.982.948-1.462 1.69-1.623.73-.158 1.793.263 2.465 1.007.745.824 1.074 1.855.952 3.129-.052.548-.204 1.161-.454 1.844a10.51 10.51 0 0 1 2.578-.056c2.007.205 3.134 1.512 2.97 3.164-.072.712-.33 1.317-.77 1.792.37.711.517 1.414.425 2.1-.106.79-.546 1.448-1.278 1.959-.057.693-.216 1.246-.498 1.66a2.87 2.87 0 0 1-.851.834c-.108.684-.335 1.219-.706 1.595-.615.626-1.714.999-2.718.931-.953-.064-1.517-.18-2.847-.6-.877-.277-2.693-.737-5.43-1.377H1.318Zm1.7-8.831a.68.68 0 1 1 1.359 0v7.678a.68.68 0 1 1-1.358 0V9.184Z"
      />
    </svg>
  );
};

export default ThumbsUp;