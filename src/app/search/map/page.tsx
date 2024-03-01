"use client";
import { Field, Formik, Form, FormikProps } from "formik";
import React from "react";
import MyGoogleMap from "@/components/googleMap/googleMap.component";
import { API, SearchLocationParams } from "@/services/api";

export default function SearchMap() {
  return (
    <div>
      <div>
        <h2 className="text-center mb-6 font-semibold text-2xl">
          Search Sample
        </h2>
      </div>
      <p className="text-center text-sm mb-2">
        Please use map rectangular control to select the area to search and
        click SEARCH button
      </p>

      <Formik
        initialValues={{}}
        onSubmit={async (values, actions) => {
          console.log("=============== form values", values);
          actions.setSubmitting(true);
          // API.addSample(values).then(() => {
          //   actions.setSubmitting(false);
          // });
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 100);
        }}
      >
        {(props: FormikProps<SearchLocationParams>) => (
          <Form>
            <fieldset className="border border-black p-4">
              <legend className="float-none w-auto p-2  text-xl">
                Sample Collection Location
              </legend>
              <MyGoogleMap mode="search" />
            </fieldset>
          </Form>
        )}
      </Formik>
    </div>
  );
}
