import { PropTypes } from "prop-types";
import {
  Accordion,
  Card,
  Divider,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { CustomAccordionControl } from "../components/custom-accordion-control";
import { DataBlock } from "../components/data-block";

export const ScholarshipList = ({ scholarships = [] }) => {
  return (
    <Card withBorder mt="md">
      <Stack>
        <Title order={3} size="h6">
          Escolaridades ({scholarships.length})
        </Title>
        {scholarships.length === 0 && (
          <Text fw={300} size="sm">
            Nenhuma escolaridade cadastrada
          </Text>
        )}
        <Accordion chevronPosition="left" variant="contained">
          {scholarships.map((scholarship) => (
            <Accordion.Item value={scholarship.value} key={scholarship.id}>
              <CustomAccordionControl>
                <DataBlock label="Instituição" value={scholarship.schoolName} />
              </CustomAccordionControl>
              <Accordion.Panel>
                <Divider mb="xl" />
                <Grid>
                  <Grid.Col span={{ xs: 12, md: 6 }}>
                    <DataBlock label="Cargo" value={scholarship.course} />
                  </Grid.Col>
                  <Grid.Col span={{ xs: 12, md: 3 }}>
                    <DataBlock
                      label="Data de início"
                      value={scholarship.startDate}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ xs: 12, md: 3 }}>
                    <DataBlock
                      label="Data de término"
                      value={scholarship.endDate}
                    />
                  </Grid.Col>
                </Grid>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
    </Card>
  );
};

ScholarshipList.propTypes = {
  scholarships: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      schoolName: PropTypes.string.isRequired,
      course: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    })
  ),
};
