"use client";
import { Sample } from "@/services/api";
import { useEffect, useState } from "react";
import sampleDetail from "../../../mock/sampleDetail.json";
import Image from "next/image";

export default function SampleDetail() {
  const [sample, setSample] = useState<Sample>();

  useEffect(() => {
    setSample(sampleDetail);
  }, []);

  if (!sample) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="items-center justify-between pt-2 pl-8 pr-8 pb-8 sm:pt-4 sm:pl-16 sm:pr-16 sm:pb-16">
        <div className="grid md:grid-cols-6 md:gap-4">
          <div className="col-start-0 col-span-12 md:col-start-1 md:col-span-6 lg:col-start-2 lg:col-span-4">
            <div className="card hover:shadow-lg">
              <div className="card-body">
                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <div className="justify-self-center">
                    <div className="h-36">
                      <Image
                        className="object-cover w-full "
                        src="/sample_image.jpg"
                        alt=""
                        width={72}
                        height={72}
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      {sample.sampleId}
                    </h3>
                    <span className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                      {sample.category}
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="px-4 sm:px-0"></div>
                  <div className="mt-6 border-t border-gray-300">
                    <dl className="divide-y divide-gray-200">
                      <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <div className="text-sm font-medium leading-6 text-gray-900">
                          Collection Details
                        </div>
                        <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-100">
                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Collector Name
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.collectorName}
                            </div>
                          </div>

                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Advisor Name
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.advisorName}
                            </div>
                          </div>

                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Collection Year
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.collectionYear}
                            </div>
                          </div>
                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Collection Site Coordinates
                              {sample.locationRectangleBounds
                                ? "rectangle"
                                : ""}
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {/** figure out how to display the coordinates based on the type of coordinates */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <div className="text-sm font-medium leading-6 text-gray-900">
                          Sample Details
                        </div>
                        <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-100">
                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Short Description
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.shortDescription}
                            </div>
                          </div>

                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Type(s)
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.sampleType?.join(", ")}
                            </div>
                          </div>

                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Form(s)
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.sampleForm?.join(", ")}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <div className="text-sm font-medium leading-6 text-gray-900">
                          Storage Details
                        </div>
                        <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-100">
                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Building
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.storageBuilding}
                            </div>
                          </div>
                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Room
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.storageRoom}
                            </div>
                          </div>
                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Extra Details
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.storageDetails}
                            </div>
                          </div>
                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Duration
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.storageDuration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
