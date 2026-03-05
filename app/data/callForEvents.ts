export interface CallForEventCardData {
  title: string;
  description: string;
  formUrl: string;
  image: string;
}

export const callForEvents: CallForEventCardData[] = [
  {
    title: "Call for Speakers",
    description: "D3 Community is hosting meetups!! Would you like to be a speaker at our meetups? Let us know with this form.",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfRlbtegrypHBHw8sHVy_FEcIYLGBo6i5ZETeLxY6NFfSnYjw/viewform",
    image: "/callForSpeakers/callforspeakers.jpeg"
  },
  {
    title: "Volunteer at D3!!",
    description: "D3 Community is looking for volunteers!! Would you like to be a volunteer at our meetups? Let us know with this form.",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdByt9-Cb7vV2ceZnLMcbOSUBA4YfFKMp17QxJAesiddUYpdA/viewform",
    image: "/callForVolunteers/callForVolunteers.jpeg"
  }
];
