import { Container } from "@mantine/core";
import { ExperimentalFormAlert } from "../components/experimental-form-alert";
import { FormPersonalData } from "../forms/personal-data";
import { FormProfessionalExperiences } from "../forms/professional-experiences";
import { FormScholarshipDetails } from "../forms/scholarship-details";
import { ProfessionalExperiencesList } from "../forms/professional-experiences-list";
import { ScholarshipList } from "../forms/scholarship-list";

export const Home = () => {
  return (
    <Container size="lg">
      <ExperimentalFormAlert />
      <FormPersonalData />
      <>
        <FormProfessionalExperiences />
        <ProfessionalExperiencesList experiences={[]} />
      </>
      <>
        <FormScholarshipDetails />
        <ScholarshipList scholarships={[]} />
      </>
    </Container>
  );
};
