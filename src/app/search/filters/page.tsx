"use client";
import { Field, Formik, Form, FormikProps } from "formik";
import SampleCard from "@/components/samplecard/samplecard.component";
import { useState } from "react";
import { Sample, API } from "@/services/api";

interface InitialValuesForSearchFilters {
  category: string;
  collectorName: string;
  advisorName: string;
  collectionYear: string;
  collectionReason: string;
  sampleForm: string;
  sampleType: string;
  storageBuilding: string;
  storageRoom: string;
}

export default function FilterSearch() {
  const [samples, setSamples] = useState<Sample[]>([]);

  return (
    <div>
      <Formik
        initialValues={{
          category: "",
          collectorName: "",
          advisorName: "",
          collectionYear: "",
          collectionReason: "",
          sampleForm: "",
          sampleType: "",
          storageBuilding: "",
          storageRoom: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          actions.setSubmitting(true);
          API.searchByFilter(values).then((result) => {
            setSamples(result);
            actions.setSubmitting(false);
          });
        }}
      >
        {(props: FormikProps<InitialValuesForSearchFilters>) => <div></div>}
      </Formik>
    </div>
  );
}
