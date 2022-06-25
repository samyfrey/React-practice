import { v4 as uuidv4 } from "uuid";
import boat from '../../../images/boat.jpg'
import flowers from '../../../images/flowers.jpg'
import bike from '../../../images/bike.jpg'
import laptop from '../../../images/laptop.jpg'
import sunrise from '../../../images/sunrise.jpg'

const dataSlider = [
  {
    id: uuidv4(),
    photo: boat,
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  {
    id: uuidv4(),
    photo: flowers,
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  {
    id: uuidv4(),
    photo: bike,
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  // {
  //   id: uuidv4(),
  //   photo: laptop,
  //   title: "Lorem ipsum",
  //   subTitle: "Lorem"
  // },
  // {
  //   id: uuidv4(),
  //   photo: sunrise,
  //   title: "Lorem ipsum",
  //   subTitle: "Lorem"
  // },
];

export default dataSlider;
