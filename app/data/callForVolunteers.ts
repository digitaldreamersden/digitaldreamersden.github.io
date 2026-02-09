export interface CallForVolunteersData {
  title: string;
  description: string;
  formUrl: string;
  image: string;
}

const callForVolunteersData: CallForVolunteersData = {
  title: "Volunteer at D3!!",
  description: "D3 Community is looking for volunteers!! Would you like to be a volunteer at our meetups? Let us know with this form.",
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdByt9-Cb7vV2ceZnLMcbOSUBA4YfFKMp17QxJAesiddUYpdA/viewform",
  image: "/callForVolunteers/callForVolunteers.jpeg"
};

export default callForVolunteersData;
