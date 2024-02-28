"use client";
import React from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import axios from "axios";

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

export default function SearchFilters() {
  return (
    <div>
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
            const result = await axios
              .get(
                `http://localhost:5000/samples?category=${values.category}&collectorName=${values.collectorName}&advisorName=${values.advisorName}&collectionYear=${values.collectionYear}`
              )
              .then(() => {
                actions.setSubmitting(false);
              });
          }}
        >
          {(props: FormikProps<InitialValuesForSearchFilters>) => (
            <Form>
              <fieldset>
                <Field
                  type="text"
                  name="collectionYear"
                  placeholder="collection year"
                />
                <Field
                  type="text"
                  name="collectorName"
                  placeholder="collector name"
                />
                <Field name="advisorName" as="select">
                  <option value="Ben">Ben</option>
                  <option value="Dave">Dave</option>
                </Field>
                <Field name="category" as="select">
                  <option value="singleSpecimen">Single Specimen</option>
                  <option value="collection">Collection</option>
                </Field>
                <Field name="collectionReason" as="select">
                  <option value="teaching">Teaching</option>
                  <option value="research">Research</option>
                </Field>
                <Field name="sampleType" as="select">
                  <option value="rock">Rock</option>
                  <option value="mineral">Mineral</option>
                  <option value="fossil">Fossil</option>
                  <option value="soil">Soil</option>
                  <option value="water">Water</option>
                </Field>
                <Field name="sampleForm" as="select">
                  <option value="handSample">Hand Sample</option>
                  <option value="mineralSeparate">Mineral Separate</option>
                  <option value="thinSection">Thin Section</option>
                </Field>
                <Field name="storageBuilding" as="select">
                  <option value="CH">CH</option>
                  <option value="PS">PS</option>
                </Field>
                <Field name="storageRoom" as="select">
                  <option value="room1">Room1</option>
                  <option value="room2">Room2</option>
                  <option value="room3">Room3</option>
                </Field>
                <button type="submit">SUBMIT</button>
              </fieldset>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
