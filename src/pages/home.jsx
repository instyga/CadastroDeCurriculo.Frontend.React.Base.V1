import { Container } from "@mantine/core";
import { ExperimentalFormAlert } from "../components/experimental-form-alert";
import { FormPersonalData } from "../forms/personal-data";
import { FormProfessionalExperiences } from "../forms/professional-experiences";
import { FormScholarshipDetails } from "../forms/scholarship-details";
import { ProfessionalExperiencesList } from "../forms/professional-experiences-list";
import { ScholarshipList } from "../forms/scholarship-list";
import { useFormContext } from "../context/use-form-context";

const experiences_mock = [
  {
    id: 1,
    value: "experience-1",
    companyName: "Acme Inc.",
    jobTitle: "Software Engineer",
    startDate: "2020-06-01",
    endDate: "2022-05-31",
    description:
      "Developed and maintained web applications using React and Node.js.",
  },
];

const scholarship_mock = [
  {
    id: 1,
    value: "1",
    schoolName: "Universidade X",
    course: "Engenharia de Software",
    startDate: "01/2023",
    endDate: "12/2023",
  },
];

export const Home = () => {
  const { step, registerStepQuantity } = useFormContext();

  const formSteps = [
    <ExperimentalFormAlert key={1} />,
    <FormPersonalData key={2} />,
    <>
      <FormProfessionalExperiences />
      <ProfessionalExperiencesList experiences={experiences_mock} />
    </>,
    <>
      <FormScholarshipDetails />
      <ScholarshipList scholarships={scholarship_mock} />
    </>,
  ];

  registerStepQuantity(formSteps.length);

  return <Container size="lg">{formSteps[step]}</Container>;
};
