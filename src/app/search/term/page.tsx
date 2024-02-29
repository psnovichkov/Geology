"use client";
import {
  Field,
  Formik,
  Form,
  FormikProps,
  useFormikContext,
  useField,
} from "formik";
import SampleCard from "@/components/samplecard/samplecard.component";
import { useState } from "react";
import samplesMock from "../../../mock/results.json";
import { Sample } from "@/services/api";

interface SampleTerm {
  searchterm: string;
}

export default function SearchTerm() {
  const [samples, setSamples] = useState<Sample[]>([]);

  return (
    <div>
      <div className="grid md:grid-cols-6 md:gap-4">
        <div className="col-start-1 col-span-6 lg:col-start-2 lg:col-span-4">
          <h1 className="text-center font-bold text-lg p-6">
            Search Inventory
          </h1>
        </div>
        <div className="col-start-1 col-span-6 md:col-start-1 md:col-span-6 lg:col-start-2 lg:col-span-4">
          <Formik
            initialValues={{
              searchterm: "",
            }}
            onSubmit={async (values, actions) => {
              console.log(values);
              actions.setSubmitting(true);
              setTimeout(() => {
                setSamples(samplesMock);
                actions.setSubmitting(false);
              }, 100);
            }}
          >
            {(props: FormikProps<SampleTerm>) => (
              <Form>
                <div className="grid md:grid-cols-6 md:gap-1">
                  <div className="col-start-1 col-span-4">
                    <Field
                      type="text"
                      id="searchterm"
                      name="searchterm"
                      placeholder="Enter keyword or phrase to search by..."
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <small>Note: separate each word with a space.</small>
                  </div>
                  <div className="col-start-5 col-span-1">
                    <button
                      type="submit"
                      className="bg-secondary-100 hover:bg-secondary-200 text-white font-bold py-2 px-4 rounded"
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="grid">
        <div className="col-start-1 col-span-12">Search Results</div>
        <div className="col-start-1 col-span-12">
          {samples.map((sample) => (
            <SampleCard key={sample.sampleId} {...sample} />
          ))}
        </div>
      </div>
    </div>
  );
}
