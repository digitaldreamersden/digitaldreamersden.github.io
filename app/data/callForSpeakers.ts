export interface CallForSpeakersData {
  title: string;
  description: string;
  formUrl: string;
  image: string;
}

const callForSpeakersData: CallForSpeakersData = {
  title: "Call for Speakers",
  description: "D3 Community is hosting meetups!! Would you like to be a speaker at our meetups? Let us know with this form.",
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfRlbtegrypHBHw8sHVy_FEcIYLGBo6i5ZETeLxY6NFfSnYjw/viewform",
  image: "/callForSpeakers/callforspeakers.jpeg"
};

export default callForSpeakersData;
